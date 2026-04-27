# backend (Node SOAP bridge)

Arquitectura implementada:

`React -> Node.js (Express) -> SOAP (.asmx)`

## Instalar y correr

```bash
cd backend
npm install
npm start
```

Servidor en: `http://localhost:3000`

## Endpoints

- `GET /api/carreras`
- `GET /api/paos?carrera=...`
- `GET /api/asignaturas?carrera=...&pao=...`
- `GET /api/docentes?carrera=...&pao=...&asignatura=...`
- `GET /api/estudiantes?carrera=...&pao=...&asignatura=...`
- `POST /api/login` body `{ "usuario": "...", "clave": "..." }`
- `GET /api/meta` (inspección del WSDL para depuración)

## Notas

- El backend usa `soap` para invocar métodos `*Async` del cliente generado por WSDL.
- Si los nombres exactos de métodos del OASIS difieren, ajusta `DEFAULT_METHODS` en `index.js`.
- React nunca llama SOAP directamente; solo consume JSON de este backend.
