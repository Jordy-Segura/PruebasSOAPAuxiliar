const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");
const soap = require("soap");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const CONFIG_PATH = process.env.OASIS_CONFIG_PATH || path.join(__dirname, "oasis.config.json");

const WSDL = {
  infoGeneral: "https://swoasis.espoch.edu.ec/OASis/OAS_Interop/InfoGeneral.asmx?WSDL",
  infoCarrera: "https://swoasis.espoch.edu.ec/OASis/OAS_Interop/InfoCarrera.asmx?WSDL",
  seguridad: "https://swoasis.espoch.edu.ec/OASis/OAS_Interop/Seguridad.asmx?WSDL",
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

const DEFAULT_CONFIG = {
  intents: {
    carreras: {
      wsdl: "infoGeneral",
      candidates: ["ConsultarCarreras", "ListarCarreras", "GetCarreras", "Carreras"],
      args: {},
      responsePath: "",
    },
    paos: {
      wsdl: "infoCarrera",
      candidates: ["ConsultarPao", "ListarPao", "GetPao", "PaoPorCarrera"],
      args: { carrera: ["carrera", "nombreCarrera", "codCarrera"] },
      responsePath: "",
    },
    asignaturas: {
      wsdl: "infoCarrera",
      candidates: ["ConsultarAsignaturas", "ListarAsignaturas", "GetAsignaturas", "AsignaturasPorCarreraPao"],
      args: {
        carrera: ["carrera", "nombreCarrera", "codCarrera"],
        pao: ["pao", "nivel", "semestre", "periodo"],
      },
      responsePath: "",
    },
    docentes: {
      wsdl: "infoCarrera",
      candidates: ["ConsultarDocentesAsignatura", "ListarDocentesAsignatura", "DocentesPorAsignatura"],
      args: {
        carrera: ["carrera", "nombreCarrera", "codCarrera"],
        pao: ["pao", "nivel", "semestre", "periodo"],
        asignatura: ["asignatura", "materia", "codAsignatura"],
      },
      responsePath: "",
    },
    estudiantes: {
      wsdl: "infoCarrera",
      candidates: ["ConsultarEstudiantesAsignatura", "ListarEstudiantesAsignatura", "EstudiantesPorAsignatura", "ObtenerMatriculados"],
      args: {
        carrera: ["carrera", "nombreCarrera", "codCarrera"],
        pao: ["pao", "nivel", "semestre", "periodo"],
        asignatura: ["asignatura", "materia", "codAsignatura"],
      },
      responsePath: "",
    },
    login: {
      wsdl: "seguridad",
      candidates: ["ValidarUsuario", "Autenticar", "Login", "IniciarSesion"],
      args: {
        usuario: ["usuario", "login", "correo", "email"],
        clave: ["clave", "password", "contrasena"],
      },
      responsePath: "",
    },
  },
};

function readConfig() {
  try {
    const raw = fs.readFileSync(CONFIG_PATH, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    return DEFAULT_CONFIG;
  }
}

function getConfig() {
  const loaded = readConfig();
  return {
    intents: { ...DEFAULT_CONFIG.intents, ...(loaded.intents || {}) },
  };
}

const CLIENT_CACHE = new Map();

function normalizeRole(value) {
  const role = String(value || "").toLowerCase();
  if (role.includes("coord")) return "coordinador";
  if (role.includes("admin")) return "admin";
  return "docente";
}

async function createClient(wsdlUrl) {
  if (CLIENT_CACHE.has(wsdlUrl)) return CLIENT_CACHE.get(wsdlUrl);
  const client = await soap.createClientAsync(wsdlUrl, { disableCache: true });
  CLIENT_CACHE.set(wsdlUrl, client);
  return client;
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
      const primitive = Object.entries(current).filter(([, value]) => value == null || typeof value !== "object");
      if (primitive.length > 0) records.push(Object.fromEntries(primitive.map(([k, v]) => [k, v == null ? "" : String(v)])));
      Object.values(current).forEach((value) => {
        if (value && typeof value === "object") stack.push(value);
      });
    }
  }
  return records;
}

function pluckByPath(payload, dottedPath) {
  if (!dottedPath) return payload;
  const parts = dottedPath.split(".").filter(Boolean);
  let current = payload;
  for (const part of parts) {
    if (current == null) return null;
    current = current[part];
  }
  return current;
}

function listServiceMethods(client) {
  const described = client.describe() || {};
  const methods = [];
  Object.values(described).forEach((service) => {
    Object.values(service || {}).forEach((port) => {
      Object.keys(port || {}).forEach((method) => methods.push(method));
    });
  });
  return [...new Set(methods)];
}

function listServiceMethodDetails(client) {
  const described = client.describe() || {};
  const details = [];
  Object.values(described).forEach((service) => {
    Object.values(service || {}).forEach((port) => {
      Object.entries(port || {}).forEach(([name, meta]) => {
        const input = meta && meta.input && typeof meta.input === "object" ? Object.keys(meta.input) : [];
        details.push({ name, input });
      });
    });
  });
  const unique = [];
  details.forEach((item) => {
    if (!unique.some((u) => u.name === item.name)) unique.push(item);
  });
  return unique;
}

function methodMatches(method, candidates) {
  const m = method.toLowerCase();
  return candidates.some((candidate) => m.includes(String(candidate).toLowerCase()));
}

function pickMethods(client, candidates) {
  const all = listServiceMethodDetails(client);
  const dynamic = all.filter((method) => methodMatches(method.name, candidates));
  const ordered = [...dynamic, ...candidates.map((name) => ({ name, input: [] }))];
  return ordered.filter((value, idx, arr) => arr.findIndex((x) => x.name === value.name) === idx);
}

function buildSoapArgs(intentConfig, payload, inputNames) {
  const args = {};
  Object.entries(intentConfig.args || {}).forEach(([logicalParam, aliases]) => {
    const value = payload[logicalParam] ?? "";
    const names = Array.isArray(aliases) && aliases.length > 0 ? aliases : [logicalParam];
    const selectedName = names.find((paramName) => inputNames.includes(paramName)) || names[0];
    args[selectedName] = value;
  });
  return args;
}

async function executeIntent(intentName, payload = {}) {
  const config = getConfig();
  const intent = config.intents[intentName];
  if (!intent) throw new Error(`Intent no configurado: ${intentName}`);

  const wsdlUrl = WSDL[intent.wsdl];
  if (!wsdlUrl) throw new Error(`WSDL no configurado: ${intent.wsdl}`);

  const client = await createClient(wsdlUrl);
  const methods = pickMethods(client, intent.candidates || []);

  let lastError = null;
  for (const method of methods) {
    const args = buildSoapArgs(intent, payload, method.input || []);
    const asyncName = `${method.name}Async`;
    if (typeof client[asyncName] !== "function") continue;
    try {
      const [result] = await client[asyncName](args);
      const selected = pluckByPath(result, intent.responsePath || "") || result;
      return { method: method.name, result: selected, raw: result };
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error(`No se encontró un método SOAP compatible para ${intentName}`);
}

function dedupeObjects(list, keyFn) {
  return list.filter((item, idx, arr) => idx === arr.findIndex((x) => keyFn(x) === keyFn(item)));
}

app.get("/api/meta", async (req, res) => {
  try {
    const config = getConfig();
    const [general, carrera, seguridad] = await Promise.all([
      createClient(WSDL.infoGeneral),
      createClient(WSDL.infoCarrera),
      createClient(WSDL.seguridad),
    ]);

    res.json({
      wsdlMethods: {
        infoGeneral: listServiceMethods(general),
        infoCarrera: listServiceMethods(carrera),
        seguridad: listServiceMethods(seguridad),
      },
      config,
    });
  } catch (error) {
    res.status(500).json({ error: "No se pudo leer metadata WSDL", detail: String(error.message || error) });
  }
});

app.get("/api/carreras", async (req, res) => {
  try {
    const { result, method } = await executeIntent("carreras", {});
    const rows = flattenToRecords(result);
    const carreras = [...new Set(rows.map((r) => pickCaseInsensitive(r, FIELD_CANDIDATES.carreras)).filter(Boolean))];
    res.json({ method, data: carreras });
  } catch (error) {
    res.status(500).json({ error: "Error SOAP carreras", detail: String(error.message || error) });
  }
});

app.get("/api/paos", async (req, res) => {
  try {
    const { carrera = "" } = req.query;
    const { result, method } = await executeIntent("paos", { carrera });
    const rows = flattenToRecords(result);
    const paos = [...new Set(rows.map((r) => pickCaseInsensitive(r, FIELD_CANDIDATES.paos)).filter(Boolean))];
    res.json({ method, data: paos });
  } catch (error) {
    res.status(500).json({ error: "Error SOAP paos", detail: String(error.message || error) });
  }
});

app.get("/api/asignaturas", async (req, res) => {
  try {
    const { carrera = "", pao = "" } = req.query;
    const { result, method } = await executeIntent("asignaturas", { carrera, pao });
    const rows = flattenToRecords(result);
    const asignaturas = [...new Set(rows.map((r) => pickCaseInsensitive(r, FIELD_CANDIDATES.asignaturas)).filter(Boolean))];
    res.json({ method, data: asignaturas });
  } catch (error) {
    res.status(500).json({ error: "Error SOAP asignaturas", detail: String(error.message || error) });
  }
});

app.get("/api/docentes", async (req, res) => {
  try {
    const { carrera = "", pao = "", asignatura = "" } = req.query;
    const { result, method } = await executeIntent("docentes", { carrera, pao, asignatura });
    const rows = flattenToRecords(result);
    const docentes = dedupeObjects(
      rows
        .map((r) => ({
          name: pickCaseInsensitive(r, FIELD_CANDIDATES.docenteNombre),
          email: pickCaseInsensitive(r, FIELD_CANDIDATES.docenteEmail),
          role: normalizeRole(pickCaseInsensitive(r, FIELD_CANDIDATES.docenteRol)),
        }))
        .filter((d) => d.name || d.email),
      (x) => `${x.name}|${x.email}`
    );
    res.json({ method, data: docentes });
  } catch (error) {
    res.status(500).json({ error: "Error SOAP docentes", detail: String(error.message || error) });
  }
});

app.get("/api/estudiantes", async (req, res) => {
  try {
    const { carrera = "", pao = "", asignatura = "" } = req.query;
    const { result, method } = await executeIntent("estudiantes", { carrera, pao, asignatura });
    const rows = flattenToRecords(result);
    const estudiantes = dedupeObjects(
      rows
        .map((r) => ({
          cedula: pickCaseInsensitive(r, FIELD_CANDIDATES.cedula),
          apellidos: pickCaseInsensitive(r, FIELD_CANDIDATES.apellidos),
          nombres: pickCaseInsensitive(r, FIELD_CANDIDATES.nombres),
        }))
        .filter((s) => s.cedula || s.apellidos || s.nombres),
      (x) => `${x.cedula}|${x.apellidos}|${x.nombres}`
    );
    res.json({ method, data: estudiantes });
  } catch (error) {
    res.status(500).json({ error: "Error SOAP estudiantes", detail: String(error.message || error) });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { usuario = "", clave = "" } = req.body || {};
    const { result, method } = await executeIntent("login", { usuario, clave });
    const rows = flattenToRecords(result);
    const row = rows[0] || {};
    res.json({
      method,
      data: {
        name: pickCaseInsensitive(row, FIELD_CANDIDATES.loginNombre),
        email: usuario,
        role: normalizeRole(pickCaseInsensitive(row, FIELD_CANDIDATES.loginRol)),
        estado: pickCaseInsensitive(row, FIELD_CANDIDATES.loginEstado),
        raw: row,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error SOAP login", detail: String(error.message || error) });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Node SOAP bridge en http://localhost:${PORT}`);
  console.log(`Config SOAP activa: ${CONFIG_PATH}`);
});
