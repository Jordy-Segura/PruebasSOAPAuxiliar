const express = require("express");
const cors = require("cors");
const soap = require("soap");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const WSDL = {
  infoGeneral: "https://swoasis.espoch.edu.ec/OASis/OAS_Interop/InfoGeneral.asmx?WSDL",
  infoCarrera: "https://swoasis.espoch.edu.ec/OASis/OAS_Interop/InfoCarrera.asmx?WSDL",
  seguridad: "https://swoasis.espoch.edu.ec/OASis/OAS_Interop/Seguridad.asmx?WSDL",
};

const DEFAULT_METHODS = {
  carreras: ["ConsultarCarreras", "ListarCarreras", "GetCarreras", "Carreras"],
  paos: ["ConsultarPao", "ListarPao", "GetPao", "PaoPorCarrera"],
  asignaturas: ["ConsultarAsignaturas", "ListarAsignaturas", "GetAsignaturas", "AsignaturasPorCarreraPao"],
  docentes: ["ConsultarDocentesAsignatura", "ListarDocentesAsignatura", "DocentesPorAsignatura"],
  estudiantes: ["ConsultarEstudiantesAsignatura", "ListarEstudiantesAsignatura", "EstudiantesPorAsignatura", "ObtenerMatriculados"],
  login: ["ValidarUsuario", "Autenticar", "Login", "IniciarSesion"],
};

const FIELD_CANDIDATES = {
  carreras: ["Carrera", "NombreCarrera", "nombre", "descripcion"],
  paos: ["PAO", "Pao", "Semestre", "Nivel", "Periodo"],
  asignaturas: ["Asignatura", "NombreAsignatura", "Materia", "descripcion"],
  docenteNombre: ["Docente", "NombreDocente", "Nombres", "Nombre", "Profesor"],
  docenteEmail: ["Correo", "Email", "Mail"],
  docenteRol: ["Rol", "Perfil"],
  cedula: ["Cedula", "Identificacion", "CI"],
  apellidos: ["Apellidos", "Apellido"],
  nombres: ["Nombres", "Nombre"],
  loginEstado: ["Estado", "Resultado", "Valido", "success"],
  loginNombre: ["Nombre", "Usuario", "Nombres"],
  loginRol: ["Rol", "Perfil"],
};

function normalizeRole(value) {
  const role = String(value || "").toLowerCase();
  if (role.includes("coord")) return "coordinador";
  if (role.includes("admin")) return "admin";
  return "docente";
}

async function createClient(wsdlUrl) {
  return soap.createClientAsync(wsdlUrl, { disableCache: true });
}

function pickCaseInsensitive(record, keys) {
  const entries = Object.entries(record || {});
  for (const key of keys) {
    const found = entries.find(([k, v]) => k.toLowerCase() === key.toLowerCase() && v != null && String(v).trim() !== "");
    if (found) return String(found[1]).trim();
  }
  return "";
}

function flattenToRecords(payload) {
  const records = [];
  const stack = [payload];

  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) continue;

    if (Array.isArray(current)) {
      current.forEach((item) => stack.push(item));
      continue;
    }

    if (typeof current === "object") {
      const primitiveEntries = Object.entries(current).filter(([, value]) => value == null || typeof value !== "object");
      if (primitiveEntries.length > 0) {
        records.push(Object.fromEntries(primitiveEntries.map(([key, value]) => [key, value == null ? "" : String(value)])));
      }
      Object.values(current).forEach((value) => {
        if (value && typeof value === "object") stack.push(value);
      });
    }
  }

  return records;
}

function getMethodCandidates(client, fallback) {
  const allMethods = Object.keys(client.describe()?.[Object.keys(client.describe() || {})[0]]?.[Object.keys(client.describe()?.[Object.keys(client.describe() || {})[0]] || {})[0]] || {});
  const matches = allMethods
    .filter((method) => fallback.some((f) => method.toLowerCase().includes(f.toLowerCase())))
    .sort((a, b) => a.length - b.length);
  if (matches.length > 0) return matches;
  return fallback;
}

async function callAny(client, candidates, args) {
  const methods = getMethodCandidates(client, candidates);
  let lastError = null;

  for (const method of methods) {
    const asyncName = `${method}Async`;
    if (typeof client[asyncName] !== "function") continue;
    try {
      const [result] = await client[asyncName](args || {});
      return { method, result };
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError || new Error("No se encontró método SOAP válido");
}

app.get("/api/meta", async (req, res) => {
  try {
    const client = await createClient(WSDL.infoCarrera);
    const described = client.describe();
    res.json(described);
  } catch (error) {
    res.status(500).json({ error: "No se pudo leer WSDL", detail: String(error.message || error) });
  }
});

app.get("/api/carreras", async (req, res) => {
  try {
    const client = await createClient(WSDL.infoGeneral);
    const { result } = await callAny(client, DEFAULT_METHODS.carreras, {});
    const records = flattenToRecords(result);
    const data = [...new Set(records.map((r) => pickCaseInsensitive(r, FIELD_CANDIDATES.carreras)).filter(Boolean))];
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error consumiendo SOAP carreras", detail: String(error.message || error) });
  }
});

app.get("/api/paos", async (req, res) => {
  try {
    const { carrera = "" } = req.query;
    const client = await createClient(WSDL.infoCarrera);
    const { result } = await callAny(client, DEFAULT_METHODS.paos, { carrera });
    const records = flattenToRecords(result);
    const data = [...new Set(records.map((r) => pickCaseInsensitive(r, FIELD_CANDIDATES.paos)).filter(Boolean))];
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error consumiendo SOAP paos", detail: String(error.message || error) });
  }
});

app.get("/api/asignaturas", async (req, res) => {
  try {
    const { carrera = "", pao = "" } = req.query;
    const client = await createClient(WSDL.infoCarrera);
    const { result } = await callAny(client, DEFAULT_METHODS.asignaturas, { carrera, pao });
    const records = flattenToRecords(result);
    const data = [...new Set(records.map((r) => pickCaseInsensitive(r, FIELD_CANDIDATES.asignaturas)).filter(Boolean))];
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error consumiendo SOAP asignaturas", detail: String(error.message || error) });
  }
});

app.get("/api/docentes", async (req, res) => {
  try {
    const { carrera = "", pao = "", asignatura = "" } = req.query;
    const client = await createClient(WSDL.infoCarrera);
    const { result } = await callAny(client, DEFAULT_METHODS.docentes, { carrera, pao, asignatura });
    const records = flattenToRecords(result);

    const data = records
      .map((r) => ({
        name: pickCaseInsensitive(r, FIELD_CANDIDATES.docenteNombre),
        email: pickCaseInsensitive(r, FIELD_CANDIDATES.docenteEmail),
        role: normalizeRole(pickCaseInsensitive(r, FIELD_CANDIDATES.docenteRol)),
      }))
      .filter((d) => d.name || d.email)
      .filter((item, idx, arr) => idx === arr.findIndex((x) => x.name === item.name && x.email === item.email));

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error consumiendo SOAP docentes", detail: String(error.message || error) });
  }
});

app.get("/api/estudiantes", async (req, res) => {
  try {
    const { carrera = "", pao = "", asignatura = "" } = req.query;
    const client = await createClient(WSDL.infoCarrera);
    const { result } = await callAny(client, DEFAULT_METHODS.estudiantes, { carrera, pao, asignatura });
    const records = flattenToRecords(result);

    const data = records
      .map((r) => ({
        cedula: pickCaseInsensitive(r, FIELD_CANDIDATES.cedula),
        apellidos: pickCaseInsensitive(r, FIELD_CANDIDATES.apellidos),
        nombres: pickCaseInsensitive(r, FIELD_CANDIDATES.nombres),
      }))
      .filter((s) => s.cedula || s.apellidos || s.nombres)
      .filter((item, idx, arr) => idx === arr.findIndex((x) => x.cedula === item.cedula && x.apellidos === item.apellidos && x.nombres === item.nombres));

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error consumiendo SOAP estudiantes", detail: String(error.message || error) });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { usuario = "", clave = "" } = req.body || {};
    const client = await createClient(WSDL.seguridad);
    const { result } = await callAny(client, DEFAULT_METHODS.login, { usuario, clave });
    const records = flattenToRecords(result);
    const first = records[0] || {};

    res.json({
      name: pickCaseInsensitive(first, FIELD_CANDIDATES.loginNombre),
      email: usuario,
      role: normalizeRole(pickCaseInsensitive(first, FIELD_CANDIDATES.loginRol)),
      estado: pickCaseInsensitive(first, FIELD_CANDIDATES.loginEstado),
      raw: first,
    });
  } catch (error) {
    res.status(500).json({ error: "Error consumiendo SOAP login", detail: String(error.message || error) });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Node SOAP bridge en http://localhost:${PORT}`);
});
