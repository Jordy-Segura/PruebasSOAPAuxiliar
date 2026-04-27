const SOAP_ENDPOINTS = {
  infoGeneral: "http://swoasis.espoch.edu.ec/OASis/OAS_Interop/InfoGeneral.asmx",
  infoCarrera: "http://swoasis.espoch.edu.ec/OASis/OAS_Interop/InfoCarrera.asmx",
  seguridad: "http://swoasis.espoch.edu.ec/OASis/OAS_Interop/Seguridad.asmx",
};

function esc(value) {
  return String(value == null ? "" : value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function buildEnvelope(method, args) {
  const bodyArgs = Object.entries(args || {})
    .map(([key, value]) => `<${key}>${esc(value)}</${key}>`)
    .join("");

  return `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <${method} xmlns="http://tempuri.org/">${bodyArgs}</${method}>
      </soap:Body>
    </soap:Envelope>`;
}

async function callSoap(endpointUrl, method, args) {
  const response = await fetch(endpointUrl, {
    method: "POST",
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      SOAPAction: `http://tempuri.org/${method}`,
    },
    body: buildEnvelope(method, args),
  });

  if (!response.ok) {
    throw new Error(`SOAP HTTP ${response.status}`);
  }

  const text = await response.text();
  const xml = new DOMParser().parseFromString(text, "text/xml");
  const fault = xml.getElementsByTagName("faultstring")[0];
  if (fault) {
    throw new Error(fault.textContent || "SOAP fault");
  }

  return xml;
}

function nodeText(row, tags) {
  for (let i = 0; i < tags.length; i += 1) {
    const node = row.getElementsByTagName(tags[i])[0];
    if (node && node.textContent && String(node.textContent).trim()) {
      return String(node.textContent).trim();
    }
  }
  return "";
}

function extractRows(xml) {
  const rows = [];
  ["Table", "Tables", "Row", "NewDataSet"].forEach((tag) => {
    const nodes = xml.getElementsByTagName(tag);
    for (let i = 0; i < nodes.length; i += 1) rows.push(nodes[i]);
  });
  return rows;
}

async function callCandidates(endpoint, methods, args) {
  for (let i = 0; i < methods.length; i += 1) {
    try {
      const xml = await callSoap(endpoint, methods[i], args);
      return { method: methods[i], xml };
    } catch (err) {
      // Intentamos con la siguiente operación candidata.
    }
  }
  return null;
}

export async function fetchCarreras() {
  const result = await callCandidates(
    SOAP_ENDPOINTS.infoGeneral,
    ["ConsultarCarreras", "ListarCarreras", "ObtenerCarreras", "GetCarreras", "Carreras"],
    {}
  );
  if (!result) return [];

  const rows = extractRows(result.xml);
  return rows
    .map((row) => nodeText(row, ["Carrera", "NombreCarrera", "CARRERA", "nombre", "descripcion"]))
    .filter(Boolean);
}

export async function fetchAsignaturas(carrera, pao) {
  const result = await callCandidates(
    SOAP_ENDPOINTS.infoCarrera,
    ["ConsultarAsignaturas", "ListarAsignaturas", "ObtenerAsignaturas", "GetAsignaturas", "AsignaturasPorCarreraPao"],
    { carrera, pao }
  );
  if (!result) return [];

  const rows = extractRows(result.xml);
  return rows
    .map((row) => nodeText(row, ["Asignatura", "NombreAsignatura", "MATERIA", "materia", "descripcion"]))
    .filter(Boolean);
}

function normalizeRole(roleRaw) {
  const value = String(roleRaw || "").toLowerCase();
  if (value.includes("coord")) return "coordinador";
  if (value.includes("admin")) return "admin";
  return "docente";
}

export async function fetchPaos(carrera) {
  const result = await callCandidates(
    SOAP_ENDPOINTS.infoCarrera,
    ["ConsultarPao", "ListarPao", "ObtenerPao", "GetPao", "PaoPorCarrera"],
    { carrera }
  );
  if (!result) return [];

  const rows = extractRows(result.xml);
  return rows
    .map((row) => nodeText(row, ["PAO", "Pao", "Semestre", "Nivel", "nivel"]))
    .filter(Boolean);
}

export async function fetchDocentesPorAsignatura(carrera, pao, asignatura) {
  const result = await callCandidates(
    SOAP_ENDPOINTS.infoCarrera,
    [
      "ConsultarDocentesAsignatura",
      "ListarDocentesAsignatura",
      "DocentesPorAsignatura",
      "ObtenerDocenteAsignatura",
      "GetDocentesAsignatura",
    ],
    { carrera, pao, asignatura }
  );
  if (!result) return [];

  const rows = extractRows(result.xml);
  return rows
    .map((row) => {
      const nombre = nodeText(row, ["Docente", "NombreDocente", "Nombres", "nombre"]);
      const email = nodeText(row, ["Correo", "Email", "Mail", "correo"]);
      if (!nombre && !email) return null;
      return {
        name: nombre || email,
        email: email || "",
        role: normalizeRole(nodeText(row, ["Rol", "Perfil", "rol"])),
      };
    })
    .filter(Boolean);
}

export async function fetchEstudiantesPorAsignatura(carrera, pao, asignatura) {
  const result = await callCandidates(
    SOAP_ENDPOINTS.infoCarrera,
    [
      "ConsultarEstudiantesAsignatura",
      "ListarEstudiantesAsignatura",
      "EstudiantesPorAsignatura",
      "GetEstudiantesAsignatura",
      "ObtenerMatriculados",
    ],
    { carrera, pao, asignatura }
  );
  if (!result) return [];

  const rows = extractRows(result.xml);
  return rows
    .map((row, idx) => {
      const cedula = nodeText(row, ["Cedula", "Identificacion", "CI", "cedula"]);
      const apellidos = nodeText(row, ["Apellidos", "Apellido", "apellidos"]);
      const nombres = nodeText(row, ["Nombres", "Nombre", "nombres"]);
      if (!cedula && !apellidos && !nombres) return null;
      return {
        id: "soap_" + (cedula || idx),
        cedula: cedula || "",
        apellidos: apellidos || "",
        nombres: nombres || "",
      };
    })
    .filter(Boolean);
}

export async function loginSeguridad(usuario, clave) {
  const result = await callCandidates(
    SOAP_ENDPOINTS.seguridad,
    ["ValidarUsuario", "Autenticar", "Login", "IniciarSesion"],
    { usuario, clave }
  );

  if (!result) return null;
  const rows = extractRows(result.xml);
  const row = rows[0] || result.xml;

  const estado = nodeText(row, ["Estado", "Resultado", "Valido", "VALIDO", "success"]);
  const nombre = nodeText(row, ["Nombre", "Usuario", "Nombres", "nombre"]);
  const rol = nodeText(row, ["Rol", "Perfil", "rol"]);

  const ok = ["1", "true", "ok", "si", "válido", "valido"].includes(String(estado).toLowerCase());
  if (!ok && !nombre) return null;

  return {
    name: nombre || usuario,
    role: normalizeRole(rol),
    email: usuario,
  };
}
