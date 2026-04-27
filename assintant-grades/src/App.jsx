import React, { useEffect } from "react";
import { initLegacyRuntime } from "./legacyRuntime";
import "./App.css";

const noop = () => {};
const callGlobal = (name, ...args) => {
  if (typeof window !== "undefined" && typeof window[name] === "function") {
    return window[name](...args);
  }
  return undefined;
};


export default function App() {
  useEffect(() => {
    initLegacyRuntime();
  }, []);
  return (
    <>
      <div id="auth-screen">
        <div className="auth-centered">
          <div className="auth-header-icon">🎓</div>
          <div className="auth-title-main">Sistema de Calificaciones</div>
          <div className="auth-sub-main">Gestión Académica Institucional</div>
          <div className="auth-card">
            <div className="page-title" style={{marginBottom:"14px"}}>Iniciar Sesión</div>
            <div className="form-group"><label className="form-label">Correo Institucional</label><input id="auth-email" className="form-input" placeholder="usuario@uni.edu" /></div>
            <div className="form-group"><label className="form-label">Contraseña</label><input id="auth-pass" type="password" className="form-input" placeholder="••••••••" /></div>
            <button className="btn btn-primary auth-main-btn" onClick={() => callGlobal("doLogin")}>Ingresar</button>
            <div className="auth-demo-box">
              <div style={{fontWeight:600,marginBottom:"6px"}}>Usuarios de demostración (contraseña: 1234)</div>
              <div className="auth-demo-row">
                <button className="btn btn-ghost btn-sm" onClick={() => callGlobal("fillDemoCredentials", "coordinador")}>COORD</button>
                <button className="btn btn-ghost btn-sm" onClick={() => callGlobal("fillDemoCredentials", "docente")}>DOC 1</button>
                <button className="btn btn-ghost btn-sm" onClick={() => callGlobal("fillDemoCredentials", "docente2")}>DOC 2</button>
              </div>
            </div>
            <div id="auth-msg" className="auth-msg"></div>
          </div>
        </div>
      </div>
      <div id="app-shell">
      <aside id="sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-brand-row">
            <div className="brand-logo">
              <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div className="brand-text">
              <div className="title">ESPOCH</div>
              <div className="sub">Auxiliar de Calificaciones</div>
            </div>
          </div>
        </div>

        <div className="sidebar-course">
          <div className="course-label">Asignatura</div>
          <div className="course-name" id="sb-asignatura">—</div>
          <div className="course-tags">
            <span className="tag-pao" id="sb-pao">—</span>
            <span className="tag-aporte" id="sb-aporte">—</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <a className="nav-item active" data-page="dashboard" href="#dashboard" onClick={(e) => e.preventDefault()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            Dashboard
            <svg className="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </a>
          <a className="nav-item" data-page="configuracion" href="#configuracion" onClick={(e) => e.preventDefault()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
            Configuración
          </a>
          <a className="nav-item" data-page="estudiantes" href="#estudiantes" onClick={(e) => e.preventDefault()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Estudiantes
          </a>
          <a className="nav-item" data-page="calificaciones" href="#calificaciones" onClick={(e) => e.preventDefault()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            Calificaciones
          </a>
          <a className="nav-item" data-page="reporte" href="#reporte" onClick={(e) => e.preventDefault()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <line x1="10" y1="9" x2="8" y2="9"/>
            </svg>
            Reporte Final
          </a>
          <a className="nav-item" data-page="coordinacion" id="nav-coordinacion" href="#coordinacion" onClick={(e) => e.preventDefault()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            Coordinación
          </a>
          <a className="nav-item" data-page="coord-asignaturas" id="nav-coord-asig" href="#coord-asignaturas" onClick={(e) => e.preventDefault()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4v15.5"/><path d="M20 22V4"/><path d="M8 6h8"/></svg>
            Asignaturas
          </a>
          <a className="nav-item" data-page="coord-rac" id="nav-coord-rac" href="#coord-rac" onClick={(e) => e.preventDefault()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>
            RAC
          </a>
          <a className="nav-item" data-page="coord-raau" id="nav-coord-raau" href="#coord-raau" onClick={(e) => e.preventDefault()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg>
            RAAU
          </a>
          <a className="nav-item" data-page="coord-docentes" id="nav-coord-docentes" href="#coord-docentes" onClick={(e) => e.preventDefault()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6"/><path d="M23 11h-6"/></svg>
            Docentes por Asignatura
          </a>
        </nav>

        <div className="sidebar-footer">
          <div className="footer-avatar">
            <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div>
            <div className="footer-name" id="sb-docente">—</div>
            <div className="footer-role" id="sb-role">—</div>
          </div>
          <button className="btn btn-ghost btn-sm" style={{marginLeft:"auto"}} onClick={() => callGlobal("doLogout")}>Salir</button>
        </div>
      </aside>

      <div id="main">
        <div className="page active" id="page-dashboard">
          <div className="page-header">
            <div className="page-title">Panel Principal</div>
            <div className="page-sub" id="dash-sub">—</div>
          </div>
          <div className="course-banner" id="dash-banner"></div>
          <div className="stat-grid" id="dash-stats"></div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 320px",gap:"18px",marginBottom:"18px"}}>
            <div className="card"><div className="card-header"><div className="card-title">Distribución de Calificaciones</div></div><div className="card-body"><canvas id="dash-chart-distribution" height="220"></canvas></div></div>
            <div className="card"><div className="card-header"><div className="card-title">Notas por Estudiante</div></div><div className="card-body"><canvas id="dash-chart-students" height="220"></canvas></div></div>
            <div className="card"><div className="card-header"><div className="card-title">Resumen</div></div><div className="card-body" style={{display:"flex",flexDirection:"column",gap:"14px"}}><div style={{textAlign:"center"}}><canvas id="dash-chart-pie" width="160" height="160"></canvas><div id="dash-pie-label" style={{fontSize:".8rem",color:"var(--gray-500)",marginTop:"8px"}}></div></div><div id="dash-ra-summary"></div></div></div>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"18px",marginBottom:"18px"}}>
            <div className="card"><div className="card-header"><div className="card-title">Progreso por Componente</div></div><div className="card-body" id="dash-comp-progress"></div></div>
            <div className="card"><div className="card-header"><div className="card-title">Actividad Reciente</div></div><div className="card-body" id="dash-recent-activity"></div></div>
          </div>

          <div className="card">
            <div className="card-header"><div className="card-title">Nómina de Estudiantes</div></div>
            <div style={{overflowX:"auto"}}>
              <table className="data"><thead><tr><th style={{width:"40px"}}>#</th><th>Estudiante</th><th>Nota</th><th>Estado</th></tr></thead><tbody id="dash-student-body"></tbody></table>
            </div>
          </div>
        </div>

        <div className="page" id="page-configuracion"><div className="page-header"><div className="page-title">Configuración</div><div className="page-sub">Configure los parámetros de la asignatura, RAC, RAAU y actividades</div></div><div id="cfg-wizard"><div className="stepper" id="cfg-stepper"></div>
        <div id="cfg-step-0"><div className="card"><div className="card-header"><div className="card-title">Información de la Asignatura</div></div><div className="card-body">
        <div className="form-grid"><div className="form-group"><label className="form-label">Período Académico</label><input className="form-input" id="cfg-periodo" placeholder="Ej: SEPTIEMBRE 2025 - FEBRERO 2026"/></div><div className="form-group"><label className="form-label">Facultad / Sede</label><input className="form-input" id="cfg-facultad" defaultValue="SEDE ORELLANA" readOnly/></div></div>
        <div className="form-grid-3"><div className="form-group"><label className="form-label">Carrera</label><select className="form-select" id="cfg-carrera" onChange={() => callGlobal("onCarreraChange")}><option value="">-- Seleccione la carrera --</option><option value="TECNOLOGÍAS DE LA INFORMACIÓN">Tecnologías de la Información</option><option value="AMBIENTAL">Ambiental</option><option value="AGRONOMÍA">Agronomía</option><option value="ZOOTECNIA">Zootecnia</option><option value="TURISMO">Turismo</option><option value="DERECHO">Derecho</option></select></div><div className="form-group"><label className="form-label">PAO (Semestre)</label><select className="form-select" id="cfg-pao" onChange={() => callGlobal("onPaoChange")} disabled><option value="">-- Seleccione PAO --</option></select></div><div className="form-group"><label className="form-label">Asignatura</label><select className="form-select" id="cfg-asignatura" disabled onChange={() => callGlobal("onAsignaturaChange")}><option value="">-- Seleccione primero Carrera y PAO --</option></select></div></div>
        <div className="form-grid"><div className="form-group"><label className="form-label">Docente</label><input className="form-input" id="cfg-docente" placeholder="Nombre del docente"/></div><div className="form-group"><label className="form-label">Aporte / Corte</label><select className="form-select" id="cfg-aporte" defaultValue="FIN DE CICLO"><option value="MEDIO CICLO">MEDIO CICLO</option><option value="FIN DE CICLO">FIN DE CICLO</option><option value="RECUPERACIÓN">RECUPERACIÓN</option></select></div></div>
        </div></div></div>
        <div id="cfg-step-1" style={{display:"none"}}><div className="card"><div className="card-header"><div className="card-title">Resultados de Aprendizaje de la Carrera (RAC)</div></div><div className="card-body"><div className="info-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg><p>Seleccione los RAC que se trabajarán en esta asignatura. Se seleccionan automáticamente según el mapeo.</p></div><div id="cfg-rac-title" style={{fontSize:".85rem",fontWeight:600,color:"var(--navy)",marginBottom:"12px"}}></div><div id="cfg-rac-list"></div></div></div></div>
        <div id="cfg-step-2" style={{display:"none"}}><div className="card"><div className="card-header"><div className="card-title">Resultados de Aprendizaje de la Asignatura (RAAU)</div></div><div className="card-body"><div className="info-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg><p>Los RAAU se cargan automáticamente desde RAC. Puede editarlos o agregar más.</p></div><div id="cfg-selected-summary" style={{marginBottom:"12px"}}></div><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"}}><span style={{fontSize:".85rem",fontWeight:600,color:"var(--navy)"}}>RAAU definidos</span><button className="btn btn-sm btn-primary" onClick={() => callGlobal("addRAAU")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:"13px",height:"13px"}}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Agregar RAAU</button></div><div id="cfg-raau-list"></div></div></div></div>
        <div id="cfg-step-3" style={{display:"none"}}><div className="card"><div className="card-header"><div className="card-title">Actividades de Evaluación</div></div><div className="card-body"><div className="info-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg><p>Nota sobre 10: ACD (3.5 pts) + APEX (3.5 pts) + AAUT (3.0 pts). Se requieren al menos 2 actividades por componente.</p></div><div id="cfg-activities-panels"></div><div id="cfg-activities-summary" style={{marginTop:"16px",padding:"14px",background:"var(--gray-50)",borderRadius:"var(--radius)",display:"none"}}><div style={{fontSize:".82rem",fontWeight:600,color:"var(--gray-700)",marginBottom:"8px"}}>Resumen de Actividades</div><div id="cfg-activities-summary-content"></div></div></div></div></div>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}><button className="btn btn-ghost" id="cfg-prev" onClick={() => callGlobal("cfgPrev")} style={{display:"none"}}>← Anterior</button><div></div><div style={{display:"flex",gap:"8px"}}><button className="btn btn-primary" id="cfg-next" onClick={() => callGlobal("cfgNext")}>Siguiente →</button><button className="btn btn-success" id="cfg-save" onClick={() => callGlobal("cfgSave")} style={{display:"none"}}>✓ Guardar Configuración</button></div></div>
        <div className="card" style={{marginTop:"18px"}}>
          <div className="card-header"><div className="card-title">Configuraciones guardadas</div></div>
          <div className="card-body" id="cfg-saved-configs"></div>
        </div>
        </div>
        <div id="cfg-managed-section" style={{display:"none"}}></div>
        </div>

        <div className="page" id="page-estudiantes"><div className="page-header"><div className="page-title">Estudiantes</div><div className="page-sub" id="est-sub">0 estudiantes matriculados</div></div><div className="stat-grid" id="est-stats" style={{gridTemplateColumns:"repeat(3,1fr)",marginBottom:"18px"}}></div><div className="card"><div className="card-header"><div className="card-title" id="est-table-title">Nómina</div><div style={{display:"flex",gap:"8px",alignItems:"center"}}><div className="search-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input className="search-input" id="est-search" placeholder="Buscar estudiante..." onInput={() => callGlobal("renderStudentTable")}/></div><button className="btn btn-primary btn-sm" onClick={() => callGlobal("triggerStudentPDFUpload")}>Importar PDF</button><button className="btn btn-success btn-sm" onClick={() => callGlobal("showAddStudent")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:"13px",height:"13px"}}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Agregar</button><input id="est-pdf-input" type="file" accept="application/pdf" style={{display:"none"}} onChange={(e) => callGlobal("handleStudentPDFUpload", e.target.files)} /></div></div><div id="est-add-form" style={{display:"none",padding:"16px"}}></div><div id="est-dropzone" className="pdf-dropzone" onDragOver={(e) => { e.preventDefault(); callGlobal("onStudentDropzoneOver", e); }} onDragLeave={(e) => { e.preventDefault(); callGlobal("onStudentDropzoneLeave", e); }} onDrop={(e) => { e.preventDefault(); callGlobal("handleStudentDrop", e); }}>Arrastra y suelta aquí el PDF de estudiantes o usa el botón “Importar PDF”.</div><div id="est-import-status" style={{padding:"0 16px 12px",fontSize:".78rem",color:"var(--gray-500)"}}></div><div style={{overflowX:"auto"}}><table className="data"><thead><tr><th style={{width:"40px"}}>#</th><th>Cédula</th><th>Apellidos</th><th>Nombres</th><th>Nota</th><th>Estado</th><th style={{width:"100px"}}>Acciones</th></tr></thead><tbody id="est-body"></tbody></table></div></div></div>

        <div className="page" id="page-calificaciones"><div className="page-header"><div className="page-title">Registro de Calificaciones</div><div className="page-sub" id="cal-sub">—</div></div><div className="comp-bar" id="cal-legend"></div><div className="card" style={{marginBottom:"18px"}}><div className="card-header"><div className="card-title">Progreso</div><div style={{display:"flex",alignItems:"center",gap:"12px",flex:1,marginLeft:"20px"}}><div className="progress-bar" style={{flex:1}}><div className="progress-fill" id="cal-progress-fill" style={{width:"0%",background:"var(--green)"}}></div></div><span id="cal-progress-pct" style={{fontSize:".75rem",fontWeight:600,color:"var(--gray-600)"}}>0%</span><span id="cal-progress-label" style={{fontSize:".72rem",color:"var(--gray-400)"}}>0/0 notas</span></div><button className="btn btn-success btn-sm" id="cal-save-btn" onClick={() => callGlobal("calSave")}>💾 Guardar</button></div></div><div className="card"><div className="card-header"><div className="card-title">Tabla de Calificaciones</div><div className="search-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input className="search-input" id="cal-search" placeholder="Buscar..." onInput={() => callGlobal("renderGradeTable")}/></div></div><div className="grade-table-wrap" id="cal-table-wrap"></div></div></div>

        <div className="page" id="page-reporte"><div className="page-header"><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><div className="page-title">Reporte Final</div><div className="page-sub">Evaluación formativa y sumativa para alcanzar los resultados de aprendizaje</div></div><div style={{display:"flex",gap:"8px"}}><button className="btn btn-primary" onClick={() => window.print()}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:"14px",height:"14px"}}><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg> Imprimir</button></div></div></div><div className="stat-grid" id="rep-stats" style={{gridTemplateColumns:"repeat(4,1fr)",marginBottom:"18px"}}></div><div style={{display:"grid",gridTemplateColumns:"1fr 300px",gap:"18px",marginBottom:"18px"}}><div className="card"><div className="card-header"><div className="card-title">Reporte Detallado</div></div><div className="card-body" style={{padding:0}} id="rep-printable"></div></div><div><div className="card" style={{marginBottom:"18px"}}><div className="card-header"><div className="card-title">Distribución</div></div><div className="card-body"><div className="dist-chart" id="rep-dist"></div></div></div></div></div></div>

        <div className="page" id="page-coordinacion"><div className="page-header"><div className="page-title">Panel de Coordinación</div><div className="page-sub">Monitoreo de aplicación RAC/RAAU y mapeo curricular</div></div><div id="coord-content"></div></div>
        <div className="page" id="page-coord-asignaturas"><div className="page-header"><div className="page-title">Asignaturas</div><div className="page-sub">Asignación docente y seguimiento por asignatura</div></div><div id="coord-content-asignaturas"></div></div>
        <div className="page" id="page-coord-rac"><div className="page-header"><div className="page-title">RAC</div><div className="page-sub">Gestión de resultados de aprendizaje de carrera</div></div><div id="coord-content-rac"></div></div>
        <div className="page" id="page-coord-raau"><div className="page-header"><div className="page-title">RAAU</div><div className="page-sub">Gestión de resultados de aprendizaje de asignatura</div></div><div id="coord-content-raau"></div></div>
        <div className="page" id="page-coord-docentes"><div className="page-header"><div className="page-title">Docentes por Asignatura</div><div className="page-sub">Monitoreo y matriz docente/asignaturas</div></div><div id="coord-content-docentes"></div></div>
      </div>
      </div>

      <div id="toast"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01" fill="none" stroke="white" strokeWidth="2"/></svg><span id="toast-text"></span></div>

      <div className="modal-overlay" id="modal-overlay">
        <div className="modal"><div className="modal-title" id="modal-title"></div><div id="modal-body"></div><div className="modal-actions" id="modal-actions"></div></div>
      </div>

      <div className="modal-overlay" id="success-modal-overlay">
        <div className="modal" style={{textAlign:"center",maxWidth:"420px"}} id="success-modal"><div id="success-modal-content"></div></div>
      </div>

      <canvas id="confetti-canvas" style={{position:"fixed",inset:0,zIndex:9999,pointerEvents:"none",display:"none"}}></canvas>
    </>
  );
}
