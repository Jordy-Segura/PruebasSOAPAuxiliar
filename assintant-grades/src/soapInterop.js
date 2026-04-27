const SOAP_ENDPOINTS = {
  infoGeneral: "http://swoasis.espoch.edu.ec/OASis/OAS_Interop/InfoGeneral.asmx",
  infoCarrera: "http://swoasis.espoch.edu.ec/OASis/OAS_Interop/InfoCarrera.asmx",
  seguridad: "http://swoasis.espoch.edu.ec/OASis/OAS_Interop/Seguridad.asmx",
};

const WSDL_CACHE = {};

function esc(value) {
  return String(value == null ? "" : value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function byLocalName(root, localName) {
  const all = root.getElementsByTagName("*");
  const out = [];
  for (let i = 0; i < all.length; i += 1) {
    if (all[i].localName === localName) out.push(all[i]);
  }
  return out;
}

function firstByLocalName(root, localName) {
  const nodes = byLocalName(root, localName);
  return nodes[0] || null;
}

function readWsdlParamNames(xml, operationName) {
  const schemaElements = byLocalName(xml, "element").filter((n) => n.getAttribute("name") === operationName);
  for (let i = 0; i < schemaElements.length; i += 1) {
    const sequence = firstByLocalName(schemaElements[i], "sequence");
    if (!sequence) continue;
    const fields = byLocalName(sequence, "element")
      .map((n) => n.getAttribute("name"))
      .filter(Boolean);
    if (fields.length > 0) return fields;
  }
  return [];
}

async function discoverWsdl(endpointUrl) {
  if (WSDL_CACHE[endpointUrl]) return WSDL_CACHE[endpointUrl];
  try {
    const response = await fetch(`${endpointUrl}?WSDL`, { method: "GET" });
    if (!response.ok) throw new Error(`WSDL HTTP ${response.status}`);
    const wsdlText = await response.text();
    const xml = new DOMParser().parseFromString(wsdlText, "text/xml");
    const defs = firstByLocalName(xml, "definitions");
    const namespace = (defs && defs.getAttribute("targetNamespace")) || "http://tempuri.org/";

    const operations = {};
    byLocalName(xml, "operation").forEach((operationNode) => {
      const name = operationNode.getAttribute("name");
      if (!name) return;
      const soapOp = firstByLocalName(operationNode, "operation");
      const soapAction = (soapOp && soapOp.getAttribute("soapAction")) || `${namespace}${name}`;
      const paramNames = readWsdlParamNames(xml, name);
      operations[name] = { name, soapAction, paramNames };
    });

    WSDL_CACHE[endpointUrl] = { namespace, operations };
    return WSDL_CACHE[endpointUrl];
  } catch (err) {
    WSDL_CACHE[endpointUrl] = { namespace: "http://tempuri.org/", operations: {} };
    return WSDL_CACHE[endpointUrl];
  }
}

function buildEnvelope(namespace, method, args, paramNames) {
  const names = Array.isArray(paramNames) && paramNames.length > 0 ? paramNames : Object.keys(args || {});
  const bodyArgs = names
    .map((key) => `<${key}>${esc(args && Object.prototype.hasOwnProperty.call(args, key) ? args[key] : "")}</${key}>`)
    .join("");

  return `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <${method} xmlns="${namespace}">${bodyArgs}</${method}>
      </soap:Body>
    </soap:Envelope>`;
}

async function callSoap(endpointUrl, methodMeta, args, namespace) {
  const response = await fetch(endpointUrl, {
    method: "POST",
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      SOAPAction: methodMeta.soapAction || `${namespace}${methodMeta.name}`,
    },
    body: buildEnvelope(namespace, methodMeta.name, args, methodMeta.paramNames),
  });

  if (!response.ok) throw new Error(`SOAP HTTP ${response.status}`);
  const text = await response.text();
  const xml = new DOMParser().parseFromString(text, "text/xml");
  const fault = xml.getElementsByTagName("faultstring")[0];
  if (fault) throw new Error(fault.textContent || "SOAP fault");
  return xml;
}

function nodeText(row, tags) {
  for (let i = 0; i < tags.length; i += 1) {
    const node = row.getElementsByTagName(tags[i])[0];
    if (node && node.textContent && String(node.textContent).trim()) return String(node.textContent).trim();
  }
  return "";
}

function extractRows(xml) {
  const tags = ["Table", "Tables", "Row", "NewDataSet", "anyType", "item"];
  const rows = [];
  tags.forEach((tag) => {
    const nodes = xml.getElementsByTagName(tag);
    for (let i = 0; i < nodes.length; i += 1) rows.push(nodes[i]);
  });
  return rows;
}

function scoreOperation(name, keywords) {
  const lower = String(name).toLowerCase();
  let score = 0;
  keywords.forEach((kw, idx) => {
    if (lower.includes(kw)) score += (keywords.length - idx) * 5;
  });
  return score;
}

async function callIntent(endpoint, args, intentKeywords, fallbackNames) {
  const wsdl = await discoverWsdl(endpoint);
  const discovered = Object.values(wsdl.operations || {})
    .map((op) => ({ ...op, score: scoreOperation(op.name, intentKeywords) }))
    .filter((op) => op.score > 0)
    .sort((a, b) => b.score - a.score);

  const candidateOps = discovered.length > 0
    ? discovered
    : fallbackNames.map((name) => ({ name, soapAction: `${wsdl.namespace}${name}`, paramNames: Object.keys(args || {}) }));

  for (let i = 0; i < candidateOps.length; i += 1) {
    try {
      const xml = await callSoap(endpoint, candidateOps[i], args, wsdl.namespace);
      return { xml, method: candidateOps[i].name };
    } catch (err) {
      // intenta siguiente
    }
  }
  return null;
}

function normalizeRole(roleRaw) {
  const value = String(roleRaw || "").toLowerCase();
  if (value.includes("coord")) return "coordinador";
  if (value.includes("admin")) return "admin";
  return "docente";
}

function dedupe(list) {
  const seen = {};
  return list.filter((x) => {
    const key = JSON.stringify(x);
    if (seen[key]) return false;
    seen[key] = true;
    return true;
  });
}

export async function fetchCarreras() {
  const result = await callIntent(
    SOAP_ENDPOINTS.infoGeneral,
    {},
    ["carrera", "listar", "consultar", "obtener"],
    ["ConsultarCarreras", "ListarCarreras", "ObtenerCarreras", "GetCarreras", "Carreras"]
  );
  if (!result) return [];
  return dedupe(
    extractRows(result.xml)
      .map((row) => nodeText(row, ["Carrera", "NombreCarrera", "CARRERA", "nombre", "descripcion"]))
      .filter(Boolean)
  );
}

export async function fetchPaos(carrera) {
  const result = await callIntent(
    SOAP_ENDPOINTS.infoCarrera,
    { carrera },
    ["pao", "periodo", "nivel", "semestre"],
    ["ConsultarPao", "ListarPao", "ObtenerPao", "GetPao", "PaoPorCarrera"]
  );
  if (!result) return [];
  return dedupe(
    extractRows(result.xml)
      .map((row) => nodeText(row, ["PAO", "Pao", "Semestre", "Nivel", "nivel", "Periodo"]))
      .filter(Boolean)
  );
}

export async function fetchAsignaturas(carrera, pao) {
  const result = await callIntent(
    SOAP_ENDPOINTS.infoCarrera,
    { carrera, pao },
    ["asignatura", "materia", "malla", "nivel"],
    ["ConsultarAsignaturas", "ListarAsignaturas", "ObtenerAsignaturas", "GetAsignaturas", "AsignaturasPorCarreraPao"]
  );
  if (!result) return [];
  return dedupe(
    extractRows(result.xml)
      .map((row) => nodeText(row, ["Asignatura", "NombreAsignatura", "MATERIA", "materia", "descripcion"]))
      .filter(Boolean)
  );
}

export async function fetchDocentesPorAsignatura(carrera, pao, asignatura) {
  const result = await callIntent(
    SOAP_ENDPOINTS.infoCarrera,
    { carrera, pao, asignatura },
    ["docente", "profesor", "asignatura", "carga"],
    ["ConsultarDocentesAsignatura", "ListarDocentesAsignatura", "DocentesPorAsignatura", "ObtenerDocenteAsignatura", "GetDocentesAsignatura"]
  );
  if (!result) return [];
  return dedupe(
    extractRows(result.xml)
      .map((row) => {
        const nombre = nodeText(row, ["Docente", "NombreDocente", "Nombres", "nombre", "Profesor"]);
        const email = nodeText(row, ["Correo", "Email", "Mail", "correo"]);
        if (!nombre && !email) return null;
        return { name: nombre || email, email: email || "", role: normalizeRole(nodeText(row, ["Rol", "Perfil", "rol"])) };
      })
      .filter(Boolean)
  );
}

export async function fetchEstudiantesPorAsignatura(carrera, pao, asignatura) {
  const result = await callIntent(
    SOAP_ENDPOINTS.infoCarrera,
    { carrera, pao, asignatura },
    ["estudiante", "matric", "inscri", "asignatura"],
    ["ConsultarEstudiantesAsignatura", "ListarEstudiantesAsignatura", "EstudiantesPorAsignatura", "GetEstudiantesAsignatura", "ObtenerMatriculados"]
  );
  if (!result) return [];
  return dedupe(
    extractRows(result.xml)
      .map((row, idx) => {
        const cedula = nodeText(row, ["Cedula", "Identificacion", "CI", "cedula"]);
        const apellidos = nodeText(row, ["Apellidos", "Apellido", "apellidos"]);
        const nombres = nodeText(row, ["Nombres", "Nombre", "nombres"]);
        if (!cedula && !apellidos && !nombres) return null;
        return { id: `soap_${cedula || idx}`, cedula: cedula || "", apellidos: apellidos || "", nombres: nombres || "" };
      })
      .filter(Boolean)
  );
}

export async function loginSeguridad(usuario, clave) {
  const result = await callIntent(
    SOAP_ENDPOINTS.seguridad,
    { usuario, clave },
    ["login", "aut", "seguridad", "usuario", "clave"],
    ["ValidarUsuario", "Autenticar", "Login", "IniciarSesion"]
  );
  if (!result) return null;

  const rows = extractRows(result.xml);
  const row = rows[0] || result.xml;
  const estado = nodeText(row, ["Estado", "Resultado", "Valido", "VALIDO", "success"]);
  const nombre = nodeText(row, ["Nombre", "Usuario", "Nombres", "nombre"]);
  const rol = nodeText(row, ["Rol", "Perfil", "rol"]);
  const ok = ["1", "true", "ok", "si", "válido", "valido"].includes(String(estado).toLowerCase());
  if (!ok && !nombre) return null;
  return { name: nombre || usuario, role: normalizeRole(rol), email: usuario };
}
