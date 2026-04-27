const API_BASE = (import.meta.env.VITE_OASIS_API_BASE || "http://localhost:3000") + "/api";

async function http(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

function unwrap(payload) {
  if (Array.isArray(payload)) return payload;
  if (payload && Array.isArray(payload.data)) return payload.data;
  return [];
}

function normalizeRole(roleRaw) {
  const value = String(roleRaw || "").toLowerCase();
  if (value.includes("coord")) return "coordinador";
  if (value.includes("admin")) return "admin";
  return "docente";
}

export async function fetchCarreras() {
  const data = await http("/carreras");
  return unwrap(data);
}

export async function fetchPaos(carrera) {
  const data = await http(`/paos?carrera=${encodeURIComponent(carrera)}`);
  return unwrap(data);
}

export async function fetchAsignaturas(carrera, pao) {
  const data = await http(`/asignaturas?carrera=${encodeURIComponent(carrera)}&pao=${encodeURIComponent(pao)}`);
  return unwrap(data);
}

export async function fetchDocentesPorAsignatura(carrera, pao, asignatura) {
  const data = await http(`/docentes?carrera=${encodeURIComponent(carrera)}&pao=${encodeURIComponent(pao)}&asignatura=${encodeURIComponent(asignatura)}`);
  return unwrap(data)
    .map((row) => ({
      name: row.name || row.docente || row.nombre || "",
      email: row.email || row.correo || "",
      role: normalizeRole(row.role || row.rol || row.perfil),
    }))
    .filter((row) => row.name || row.email);
}

export async function fetchEstudiantesPorAsignatura(carrera, pao, asignatura) {
  const data = await http(`/estudiantes?carrera=${encodeURIComponent(carrera)}&pao=${encodeURIComponent(pao)}&asignatura=${encodeURIComponent(asignatura)}`);
  return unwrap(data)
    .map((row, idx) => ({
      id: `soap_${row.cedula || idx}`,
      cedula: row.cedula || row.identificacion || row.ci || "",
      apellidos: row.apellidos || row.apellido || "",
      nombres: row.nombres || row.nombre || "",
    }))
    .filter((row) => row.cedula || row.apellidos || row.nombres);
}

export async function loginSeguridad(usuario, clave) {
  const data = await http("/login", {
    method: "POST",
    body: JSON.stringify({ usuario, clave }),
  });
  const row = data && data.data ? data.data : data;
  const estado = String(row.estado || "").toLowerCase();
  const ok = ["1", "true", "ok", "si", "válido", "valido"].includes(estado);
  if (!ok && !row.name) return null;
  return {
    name: row.name || usuario,
    role: normalizeRole(row.role),
    email: row.email || usuario,
  };
}
