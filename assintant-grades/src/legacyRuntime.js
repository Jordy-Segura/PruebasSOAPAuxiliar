/* eslint-disable no-var */

export function initLegacyRuntime() {
  if (window.__espochLegacyInit) return;
  window.__espochLegacyInit = true;

  var DB_RACS_TI = [
    { id: 'rac1', code: 'RAC1', description: 'Comunica efectivamente en español e inglés en diversos contextos profesionales.' },
    { id: 'rac2', code: 'RAC2', description: 'Aplica métodos y técnicas eficientes en el gobierno, auditoría y gestión de proyectos TI.' },
    { id: 'rac3', code: 'RAC3', description: 'Implementa soluciones basadas en tecnologías web y móvil para estándares corporativos.' },
    { id: 'rac4', code: 'RAC4', description: 'Aplica competencias con liderazgo para construcción de soluciones innovadoras con sostenibilidad ambiental.' },
    { id: 'rac5', code: 'RAC5', description: 'Desarrolla tecnologías de redes para optimización de administración y gestión de grandes volúmenes de datos.' }
  ];

  var DB_ESPOCH = {
    'TECNOLOGÍAS DE LA INFORMACIÓN': {
      maxPao: 8,
      racs: DB_RACS_TI,
      malla: {
        'NIVELACIÓN': ['Introducción a las TIC', 'Matemáticas Básicas'],
        '1': ['INGLÉS I', 'FUNDAMENTOS DE PROGRAMACIÓN', 'EDUCACIÓN FÍSICA', 'SOSTENIBILIDAD AMBIENTAL', 'COMUNICACIÓN ORAL Y ESCRITA', 'QUÍMICA', 'ÁLGEBRA LINEAL'],
        '2': ['FÍSICA MECÁNICA', 'INGLÉS II', 'METODOLOGÍA DE LA INVESTIGACIÓN', 'CÁLCULO DE UNA VARIABLE', 'ADMINISTRACIÓN DE SISTEMAS OPERATIVOS', 'PROGRAMACIÓN'],
        '3': ['INGLÉS III', 'SISTEMAS DE COMUNICACIÓN', 'FUNDAMENTOS DE BASE DE DATOS', 'ECUACIONES DIFERENCIALES', 'CÁLCULO DE VARIAS VARIABLES', 'GESTIÓN DE PROYECTOS TI', 'REALIDAD SOCIOECONÓMICA E INTERCULTURALIDAD'],
        '4': ['INGLÉS IV', 'MATEMÁTICA AVANZADA', 'FUNDAMENTOS DE REDES', 'DISEÑO DE EXPERIENCIA DE USUARIO', 'ADMINISTRACIÓN DE BASE DE DATOS', 'MÉTODOS NUMÉRICOS', 'GESTIÓN ADMINISTRATIVA'],
        '5': ['CONMUTACIÓN Y ENRUTAMIENTO', 'ESTADÍSTICA Y PROBABILIDAD', 'TECNOLOGÍA WEB', 'BIG DATA', 'TECNOLOGÍA Y DISEÑO MULTIMEDIA', 'INFRAESTRUCTURA TI', 'ÉTICA Y RELACIONES HUMANAS'],
        '6': ['ESCALABILIDAD DE REDES', 'COMPUTACIÓN MÓVIL', 'MACHINE LEARNING', 'PRÁCTICAS DE SERVICIOS COMUNITARIO', 'INTEROPERABILIDAD DE PLATAFORMAS', 'EMPRENDIMIENTO'],
        '7': ['ITINERARIO 1', 'BUSINESS INTELLIGENCE', 'SEGURIDAD TI', 'APLICACIONES IoT', 'PRÁCTICAS LABORALES', 'FORMULACIÓN DE TRABAJO DE TITULACIÓN'],
        '8': ['CLOUD COMPUTING', 'AUDITORÍA TI', 'GOBIERNO TI', 'SISTEMAS DE INFORMACIÓN GEOGRÁFICA', 'ITINERARIO 2', 'TRABAJO DE TITULACIÓN']
      },
      asignaturas: {
        'INGLÉS I': { raau: [{ code: 'RAAU1', description: 'Utiliza expresiones de uso común para comunicar ideas sencillas.', racId: 'rac1' }] },
        'FUNDAMENTOS DE PROGRAMACIÓN': { raau: [{ code: 'RAAU1', description: 'Implementa algoritmos estructurados para computadoras eficientes.', racId: 'rac3' }] },
        'SOSTENIBILIDAD AMBIENTAL': { raau: [{ code: 'RAAU1', description: 'Aplica los principios y normas ambientales para la adopción de alternativas.', racId: 'rac4' }] },
        'COMUNICACIÓN ORAL Y ESCRITA': { raau: [{ code: 'RAAU1', description: 'Aplica los conceptos de la comunicación oral y escrita en diversos contextos.', racId: 'rac1' }] },
        'GESTIÓN DE PROYECTOS TI': { raau: [
          { code: 'RAAU1', description: 'Diseña planes de proyecto que garanticen la implementación de soluciones.', racId: 'rac2' },
          { code: 'RAAU2', description: 'Utiliza herramientas tecnológicas para el seguimiento y control.', racId: 'rac2' }
        ]},
        'FUNDAMENTOS DE REDES': { raau: [{ code: 'RAAU1', description: 'Diseña redes de computadoras basados en modelos OSI, TCP/IP.', racId: 'rac5' }] },
        'GOBIERNO TI': { raau: [{ code: 'RAAU1', description: 'Identifica los marcos de referencia y estándares del gobierno TI.', racId: 'rac2' }] },
        'AUDITORÍA TI': { raau: [{ code: 'RAAU1', description: 'Aplica normas de auditoría TI en sistemas de información.', racId: 'rac2' }] },
        'CLOUD COMPUTING': { raau: [{ code: 'RAAU1', description: 'Aplica arquitecturas en la nube para optimización de recursos.', racId: 'rac2' }] },
        'PROGRAMACIÓN': { raau: [{ code: 'RAAU1', description: 'Implementa aplicaciones de escritorio para ambientes colaborativos.', racId: 'rac3' }] },
        'ADMINISTRACIÓN DE SISTEMAS OPERATIVOS': { raau: [{ code: 'RAAU1', description: 'Configura sistemas operativos para solución de problemas.', racId: 'rac2' }] },
        'INGLÉS II': { raau: [{ code: 'RAAU1', description: 'Utiliza vocabulario y frases simples sobre temas de interés.', racId: 'rac1' }] },
        'INGLÉS III': { raau: [{ code: 'RAAU1', description: 'Habla en diversos contextos sobre situaciones reales con claridad.', racId: 'rac1' }] },
        'INGLÉS IV': { raau: [{ code: 'RAAU1', description: 'Construye ideas coherentes con lenguaje claro y preciso.', racId: 'rac1' }] },
        'SISTEMAS DE COMUNICACIÓN': { raau: [{ code: 'RAAU1', description: 'Interpreta técnicas de transmisión, modulación y multiplexación.', racId: 'rac5' }] },
        'FUNDAMENTOS DE BASE DE DATOS': { raau: [{ code: 'RAAU1', description: 'Diseña modelos de bases de datos relacionales.', racId: 'rac5' }] },
        'MACHINE LEARNING': { raau: [{ code: 'RAAU1', description: 'Analiza patrones de datos en implementación de modelos predictivos.', racId: 'rac2' }] },
        'SEGURIDAD TI': { raau: [{ code: 'RAAU1', description: 'Implementa medidas de seguridad efectivas.', racId: 'rac2' }] },
        'COMPUTACIÓN MÓVIL': { raau: [{ code: 'RAAU1', description: 'Desarrolla aplicaciones móviles adaptables.', racId: 'rac3' }] },
        'ADMINISTRACIÓN DE BASE DE DATOS': { raau: [{ code: 'RAAU1', description: 'Diseña bases de datos avanzadas SQL y no SQL.', racId: 'rac5' }] },
        'CONMUTACIÓN Y ENRUTAMIENTO': { raau: [{ code: 'RAAU1', description: 'Diseña topologías de redes para conmutación y enrutamiento.', racId: 'rac5' }] },
        'DISEÑO DE EXPERIENCIA DE USUARIO': { raau: [{ code: 'RAAU1', description: 'Aplica principios de usabilidad y diseño centrado en el usuario.', racId: 'rac3' }] },
        'INFRAESTRUCTURA TI': { raau: [{ code: 'RAAU1', description: 'Implementa infraestructura TI para soluciones escalables.', racId: 'rac2' }] },
        'ESCALABILIDAD DE REDES': { raau: [{ code: 'RAAU1', description: 'Implementa redes escalables con alta disponibilidad.', racId: 'rac5' }] },
        'TECNOLOGÍA WEB': { raau: [{ code: 'RAAU1', description: 'Implementa aplicaciones web para solución de problemas tecnológicos.', racId: 'rac3' }] },
        'BIG DATA': { raau: [{ code: 'RAAU1', description: 'Utiliza aplicaciones del ecosistema Big Data.', racId: 'rac5' }] },
        'MÉTODOS NUMÉRICOS': { raau: [{ code: 'RAAU1', description: 'Aplica métodos numéricos para resolución de problemas en TI.', racId: 'rac2' }] },
        'TECNOLOGÍA Y DISEÑO MULTIMEDIA': { raau: [{ code: 'RAAU1', description: 'Utiliza software multimedia para creación de contenido.', racId: 'rac3' }] },
        'GESTIÓN ADMINISTRATIVA': { raau: [{ code: 'RAAU1', description: 'Identifica riesgos y procesos de control estratégico.', racId: 'rac2' }] },
        'ÉTICA Y RELACIONES HUMANAS': { raau: [{ code: 'RAAU1', description: 'Aplica principios éticos universales.', racId: 'rac4' }] },
        'CÁLCULO DE UNA VARIABLE': { raau: [{ code: 'RAAU1', description: 'Aplica conocimientos del cálculo para resolución de problemas.', racId: 'rac2' }] },
        'ESTADÍSTICA Y PROBABILIDAD': { raau: [{ code: 'RAAU1', description: 'Aplica conceptos estadísticos y probabilísticos.', racId: 'rac2' }] },
        'ECUACIONES DIFERENCIALES': { raau: [{ code: 'RAAU1', description: 'Aplica métodos de ecuaciones diferenciales en problemas reales.', racId: 'rac2' }] },
        'CÁLCULO DE VARIAS VARIABLES': { raau: [{ code: 'RAAU1', description: 'Aplica cálculo diferencial e integral con múltiples variables.', racId: 'rac2' }] },
        'MATEMÁTICA AVANZADA': { raau: [{ code: 'RAAU1', description: 'Integra modelos de matemática avanzada.', racId: 'rac2' }] },
        'ÁLGEBRA LINEAL': { raau: [{ code: 'RAAU1', description: 'Comprende representaciones algebraicas de vectores.', racId: 'rac2' }] },
        'FÍSICA MECÁNICA': { raau: [{ code: 'RAAU1', description: 'Aplica principios de física mecánica.', racId: 'rac2' }] },
        'QUÍMICA': { raau: [{ code: 'RAAU1', description: 'Evalúa reacciones químicas inorgánicas.', racId: 'rac2' }] },
        'METODOLOGÍA DE LA INVESTIGACIÓN': { raau: [{ code: 'RAAU1', description: 'Aplica metodologías de investigación.', racId: 'rac2' }] },
        'REALIDAD SOCIOECONÓMICA E INTERCULTURALIDAD': { raau: [{ code: 'RAAU1', description: 'Relaciona conceptos de economía, cultura y proceso social.', racId: 'rac4' }] },
        'BUSINESS INTELLIGENCE': { raau: [{ code: 'RAAU1', description: 'Implementa entornos de visualización y análisis de negocios.', racId: 'rac2' }] },
        'Introducción a las TIC': { raau: [{ code: 'RAAU1', description: 'Identifica conceptos básicos de TIC.', racId: 'rac1' }] },
        'Matemáticas Básicas': { raau: [{ code: 'RAAU1', description: 'Aplica conceptos matemáticos básicos.', racId: 'rac2' }] }
      }
    },
    'AMBIENTAL': { maxPao: 8, racs: [], malla: { 'NIVELACIÓN': [] }, asignaturas: {} },
    'AGRONOMÍA': { maxPao: 9, racs: [], malla: { 'NIVELACIÓN': [] }, asignaturas: {} },
    'ZOOTECNIA': { maxPao: 8, racs: [], malla: { 'NIVELACIÓN': [] }, asignaturas: {} },
    'TURISMO': { maxPao: 8, racs: [], malla: { 'NIVELACIÓN': [] }, asignaturas: {} },
    'DERECHO': { maxPao: 0, racs: [], malla: { 'NIVELACIÓN': ['Introducción al Derecho'] }, asignaturas: {} }
  };

  var EVAL_PROCEDURES = {
    ACD: [
      { id: 'acd1', name: 'Participación en clase' }, { id: 'acd2', name: 'Investigación Formativa' },
      { id: 'acd3', name: 'Resúmenes' }, { id: 'acd4', name: 'Lectura crítica de textos' },
      { id: 'acd5', name: 'Exposiciones' }, { id: 'acd6', name: 'Proyecto o planes en el aula' },
      { id: 'acd7', name: 'Comunicación oral y escrita' }, { id: 'acd8', name: 'Debates' },
      { id: 'acd9', name: 'Cuestionarios' }, { id: 'acd10', name: 'Ensayos' }, { id: 'acd11', name: 'Panel de discusión' }
    ],
    APEX: [
      { id: 'apex1', name: 'Aplicación de contenidos' }, { id: 'apex2', name: 'Talleres en equipo' },
      { id: 'apex3', name: 'Resolución de problemas' }, { id: 'apex4', name: 'Comprobación' },
      { id: 'apex5', name: 'Experimentación' }, { id: 'apex6', name: 'Replicación de casos' },
      { id: 'apex7', name: 'Práctica de laboratorio' }, { id: 'apex8', name: 'Simulación' }, { id: 'apex9', name: 'Talleres individuales' }
    ],
    AAUT: [
      { id: 'aaut1', name: 'Escritura académica' }, { id: 'aaut2', name: 'Elaboración de informes' },
      { id: 'aaut3', name: 'Preparación para lecciones' }, { id: 'aaut4', name: 'Preparación de exámenes' },
      { id: 'aaut5', name: 'Lecturas complementarias' }, { id: 'aaut6', name: 'Resolución de ejercicios' }
    ]
  };

  var COMPONENT_WEIGHTS = { ACD: 3.5, APEX: 3.5, AAUT: 3.0 };
  var COMPONENT_COLORS = { ACD: '#3b82f6', APEX: '#22c55e', AAUT: '#f59e0b' };
  var COMPONENT_LABELS = { ACD: 'Aprendizaje en Contacto con el Docente', APEX: 'Aprendizaje Práctico Experimental', AAUT: 'Aprendizaje Autónomo' };
  var COMPONENTS = ['ACD', 'APEX', 'AAUT'];
  var USERS = [
    { email: 'admin@uni.edu', password: '1234', role: 'admin', name: 'Administrador General' },
    { email: 'jperez@uni.edu', password: '1234', role: 'docente', name: 'Prof. Juan Pérez' },
    { email: 'agomez@uni.edu', password: '1234', role: 'docente', name: 'Prof. Ana Gómez' },
    { email: 'coordinador@uni.edu', password: '1234', role: 'coordinador', name: 'María Coordinadora' }
  ];
  var ROLE_LABEL = { admin: 'Administrador', docente: 'Docente', coordinador: 'Coordinador' };

  var DEFAULT_STATE = {
    courseConfig: { periodoAcademico: '', facultad: 'SEDE ORELLANA', carrera: '', asignatura: '', docente: '', pao: '', aporte: 'FIN DE CICLO' },
    selectedRACIds: [], raauEntries: [], activities: [],
    configLocked: false, activeConfigId: '',
    savedConfigs: [],
    studentsByConfig: {},
    gradesByConfig: {},
    teacherAssignments: [],
    students: [],
    grades: [],
    recentActivity: [],
    currentUser: null
  };

  var STATE = {};
  var CAREER_RACS = [];
  var STORAGE_KEY = 'espoch_state_session_v1';
  function save() { try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(STATE)); } catch (e) {} }
  function load() {
    try {
      var stored = sessionStorage.getItem(STORAGE_KEY);
      STATE = stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(DEFAULT_STATE));
      if (!Array.isArray(STATE.savedConfigs)) STATE.savedConfigs = [];
      if (typeof STATE.configLocked !== 'boolean') STATE.configLocked = false;
      if (!STATE.activeConfigId) STATE.activeConfigId = '';
      if (!STATE.studentsByConfig) STATE.studentsByConfig = {};
      if (!STATE.gradesByConfig) STATE.gradesByConfig = {};
      if (!Array.isArray(STATE.teacherAssignments)) STATE.teacherAssignments = [];
      if (!Array.isArray(STATE.students)) STATE.students = [];
      if (!Array.isArray(STATE.grades)) STATE.grades = [];
      if (!Array.isArray(STATE.recentActivity)) STATE.recentActivity = [];
      if (!STATE.currentUser) STATE.currentUser = null;
      if (STATE.courseConfig && STATE.courseConfig.carrera && DB_ESPOCH[STATE.courseConfig.carrera]) CAREER_RACS = DB_ESPOCH[STATE.courseConfig.carrera].racs || [];
    } catch (e) { STATE = JSON.parse(JSON.stringify(DEFAULT_STATE)); }
  }
  load();

  function getActiveConfigKey() {
    return STATE.activeConfigId || '';
  }

  function loadActiveConfigData() {
    var key = getActiveConfigKey();
    if (!key) return;
    if (!STATE.studentsByConfig[key]) STATE.studentsByConfig[key] = [];
    if (!STATE.gradesByConfig[key]) STATE.gradesByConfig[key] = [];
    STATE.students = JSON.parse(JSON.stringify(STATE.studentsByConfig[key]));
    STATE.grades = JSON.parse(JSON.stringify(STATE.gradesByConfig[key]));
  }

  function persistActiveConfigData() {
    var key = getActiveConfigKey();
    if (!key) return;
    STATE.studentsByConfig[key] = JSON.parse(JSON.stringify(STATE.students));
    STATE.gradesByConfig[key] = JSON.parse(JSON.stringify(STATE.grades));
  }
  if (STATE.activeConfigId) loadActiveConfigData();

  function showToast(msg, type) {
    var toastEl = document.getElementById('toast');
    var text = document.getElementById('toast-text');
    if (!toastEl || !text) return;
    text.textContent = msg;
    toastEl.style.background = type === 'error' ? 'var(--red)' : 'var(--green)';
    toastEl.classList.add('show');
    setTimeout(function () { toastEl.classList.remove('show'); }, 2800);
  }

  function closeModal(e) {
    if (e && e.target !== document.getElementById('modal-overlay')) return;
    var overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.classList.remove('open');
  }

  function showSuccessModal() {
    launchConfetti();
    var totalActs = STATE.activities.length;
    var asig = STATE.courseConfig.asignatura || 'la asignatura';
    var el = document.getElementById('success-modal-content');
    if (!el) return;
    el.innerHTML =
      '<div class="success-checkmark"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' +
      '<div class="success-title">¡Configuración Guardada!</div>' +
      '<div class="success-text">Se han registrado <strong>' + totalActs + ' actividades</strong> de evaluación para <strong>' + asig + '</strong>.<br><br>Los componentes ACD (' + COMPONENT_WEIGHTS.ACD + ' pts), APEX (' + COMPONENT_WEIGHTS.APEX + ' pts) y AAUT (' + COMPONENT_WEIGHTS.AAUT + ' pts) están configurados correctamente.</div>' +
      '<div style="margin-top:20px"><button class="btn btn-success" onclick="onConfigConfirmContinue()" style="margin:0 auto">Confirmar y Gestionar</button></div>';
    document.getElementById('success-modal-overlay').classList.add('open');
  }

  function closeSuccessModal(e) {
    if (e && e.target !== document.getElementById('success-modal-overlay')) return;
    var overlay = document.getElementById('success-modal-overlay');
    if (overlay) overlay.classList.remove('open');
  }

  function launchConfetti() {
    var canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    canvas.style.display = 'block';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var particles = [];
    var colors = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#7c3aed', '#003366'];
    for (var i = 0; i < 150; i++) {
      particles.push({
        x: canvas.width / 2, y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16, vy: (Math.random() - 0.5) * 16 - 5,
        w: Math.random() * 8 + 3, h: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360, rotSpeed: (Math.random() - 0.5) * 10,
        gravity: 0.15, opacity: 1
      });
    }
    var frame = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var alive = false;
      particles.forEach(function (p) {
        p.x += p.vx; p.vy += p.gravity; p.y += p.vy;
        p.rotation += p.rotSpeed; p.vx *= 0.99;
        if (frame > 60) p.opacity -= 0.01;
        if (p.opacity <= 0) return;
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      frame++;
      if (alive && frame < 200) requestAnimationFrame(animate);
      else canvas.style.display = 'none';
    }
    animate();
  }

  function openModal(title, bodyHtml, actions) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = bodyHtml;
    document.getElementById('modal-actions').innerHTML = actions.map(function (a, i) {
      return '<button class="btn ' + a.cls + '" onclick="_modalAction(' + i + ')">' + a.label + '</button>';
    }).join('');
    window._modalActions = actions;
    document.getElementById('modal-overlay').classList.add('open');
  }

  window._modalAction = function (i) {
    var a = window._modalActions[i];
    if (typeof a.action === 'function') a.action();
    else if (a.action === 'close') closeModal();
  };

  function updateSidebar() {
    var c = STATE.courseConfig;
    var set = function (id, val) { var el = document.getElementById(id); if (el) el.textContent = val; };
    set('sb-asignatura', c.asignatura || '—');
    set('sb-pao', 'PAO ' + (c.pao || '—'));
    set('sb-aporte', c.aporte || '—');
    set('sb-docente', c.docente || ((STATE.currentUser && STATE.currentUser.name) || '—'));
    set('sb-role', ROLE_LABEL[(STATE.currentUser && STATE.currentUser.role) || ''] || 'Invitado');
  }

  function roleCanAccess(page) {
    var role = STATE.currentUser && STATE.currentUser.role;
    if (!role) return false;
    if (page.indexOf('coord-') === 0) return role === 'coordinador' || role === 'admin';
    if (role === 'docente') return page !== 'coordinacion';
    return true;
  }

  function applyRoleUI() {
    var role = STATE.currentUser && STATE.currentUser.role;
    var appShell = document.getElementById('app-shell');
    var auth = document.getElementById('auth-screen');
    if (!role) {
      if (auth) auth.style.display = 'flex';
      if (appShell) appShell.style.display = 'none';
      return;
    }
    if (auth) auth.style.display = 'none';
    if (appShell) appShell.style.display = 'flex';
    var navCoord = document.getElementById('nav-coordinacion');
    if (navCoord) navCoord.style.display = role === 'docente' ? 'none' : '';
    ['nav-coord-asig', 'nav-coord-rac', 'nav-coord-raau', 'nav-coord-docentes'].forEach(function (id) {
      var item = document.getElementById(id);
      if (item) item.style.display = (role === 'coordinador' || role === 'admin') ? '' : 'none';
    });
  }

  function doLogin() {
    var emailEl = document.getElementById('auth-email');
    var passEl = document.getElementById('auth-pass');
    var msgEl = document.getElementById('auth-msg');
    var email = (emailEl && emailEl.value || '').trim().toLowerCase();
    var pass = (passEl && passEl.value || '').trim();
    var found = USERS.find(function (u) { return u.email === email && u.password === pass; });
    if (!found) {
      if (msgEl) msgEl.textContent = 'Credenciales inválidas. Revise correo y clave.';
      return;
    }
    STATE.currentUser = { email: found.email, role: found.role, name: found.name };
    save();
    if (msgEl) msgEl.textContent = '';
    applyRoleUI();
    updateSidebar();
    navigate(found.role === 'coordinador' ? 'coord-docentes' : 'dashboard');
    showToast('Bienvenido, ' + found.name, 'success');
  }

  function fillDemoCredentials(role) {
    var alias = role === 'docente2' ? 'agomez@uni.edu' : null;
    var user = alias ? USERS.find(function (u) { return u.email === alias; }) : USERS.find(function (u) { return u.role === role; });
    if (!user) return;
    var emailEl = document.getElementById('auth-email');
    var passEl = document.getElementById('auth-pass');
    var msgEl = document.getElementById('auth-msg');
    if (emailEl) emailEl.value = user.email;
    if (passEl) passEl.value = user.password;
    if (msgEl) msgEl.textContent = 'Credenciales demo cargadas para ' + ROLE_LABEL[role] + '.';
  }

  function doLogout() {
    STATE.currentUser = null;
    save();
    applyRoleUI();
    var msgEl = document.getElementById('auth-msg');
    if (msgEl) msgEl.textContent = '';
    var passEl = document.getElementById('auth-pass');
    if (passEl) passEl.value = '';
  }

  function onCarreraChange() {
    var carreraValue = document.getElementById('cfg-carrera').value;
    var paoSelect = document.getElementById('cfg-pao');
    var asigSelect = document.getElementById('cfg-asignatura');
    paoSelect.innerHTML = '<option value="">-- Seleccione PAO --</option>';
    asigSelect.innerHTML = '<option value="">-- Seleccione primero Carrera y PAO --</option>';
    paoSelect.disabled = true;
    asigSelect.disabled = true;
    if (!carreraValue) return;
    var carreraData = DB_ESPOCH[carreraValue];
    CAREER_RACS = carreraData.racs || [];
    paoSelect.innerHTML += '<option value="NIVELACIÓN">NIVELACIÓN</option>';
    for (var p = 1; p <= carreraData.maxPao; p++) paoSelect.innerHTML += '<option value="' + p + '">PAO ' + p + '</option>';
    paoSelect.disabled = false;
    STATE.courseConfig.carrera = carreraValue;
    STATE.selectedRACIds = [];
    STATE.raauEntries = [];
    STATE.activities = [];
    save();
  }

  function onPaoChange() {
    var carreraValue = document.getElementById('cfg-carrera').value;
    var paoValue = document.getElementById('cfg-pao').value;
    var asigSelect = document.getElementById('cfg-asignatura');
    asigSelect.innerHTML = '<option value="">-- Seleccione Asignatura --</option>';
    if (!paoValue) { asigSelect.disabled = true; return; }
    var materias = (DB_ESPOCH[carreraValue] && DB_ESPOCH[carreraValue].malla[paoValue]) || [];
    materias.forEach(function (mat) { asigSelect.innerHTML += '<option value="' + mat + '">' + mat + '</option>'; });
    asigSelect.disabled = false;
    STATE.courseConfig.pao = paoValue;
    save();
  }

  function onAsignaturaChange() {
    var carrera = document.getElementById('cfg-carrera').value;
    var asignatura = document.getElementById('cfg-asignatura').value;
    STATE.courseConfig.asignatura = asignatura;
    if (!carrera || !asignatura) return;
    var asignaturaData = DB_ESPOCH[carrera] && DB_ESPOCH[carrera].asignaturas[asignatura];
    if (asignaturaData && asignaturaData.raau && asignaturaData.raau.length > 0) {
      STATE.raauEntries = asignaturaData.raau.map(function (r, index) {
        return { id: 'raau_auto_' + r.racId + '_' + (r.code || index), code: r.code, description: r.description, racId: r.racId };
      });
      STATE.selectedRACIds = [];
      asignaturaData.raau.forEach(function (r) { if (STATE.selectedRACIds.indexOf(r.racId) === -1) STATE.selectedRACIds.push(r.racId); });
      showToast('RAC y RAAU identificados automáticamente para la asignatura seleccionada.', 'success');
    } else {
      STATE.raauEntries = [];
      STATE.selectedRACIds = [];
      showToast('Esta asignatura no tiene mapeo automático de RAC/RAAU.', 'error');
    }
    STATE.activities = [];
    save();
    updateSidebar();
    syncActivitiesWithRAAU();
    renderRAAUList();
    renderSelectedSummary();
  }

  var cfgStep = 0;
  var CFG_STEPS = ['Información', 'RAC de la Carrera', 'RAAU de la Asignatura', 'Actividades'];

  function renderConfig() {
    cfgStep = 0;
    if (!STATE.configLocked) {
      STATE.selectedRACIds = [];
      STATE.raauEntries = [];
      STATE.activities = [];
    }
    renderCfgStep();
  }

  function applyDefaultTemplateIfNeeded() {
    if (!STATE.savedConfigs || STATE.savedConfigs.length === 0) return;
    var template = STATE.savedConfigs[0];
    if (!STATE.courseConfig.periodoAcademico) STATE.courseConfig.periodoAcademico = template.courseConfig.periodoAcademico || 'SEPTIEMBRE 2025 - FEBRERO 2026';
    if (!STATE.courseConfig.docente) STATE.courseConfig.docente = template.courseConfig.docente || '';
    if (!STATE.courseConfig.aporte) STATE.courseConfig.aporte = template.courseConfig.aporte || 'FIN DE CICLO';
  }

  function renderManagedConfigSection() {
    var wizard = document.getElementById('cfg-wizard');
    var managed = document.getElementById('cfg-managed-section');
    if (!wizard || !managed) return;
    if (!STATE.configLocked) {
      wizard.style.display = '';
      managed.style.display = 'none';
      return;
    }
    wizard.style.display = 'none';
    managed.style.display = 'block';
    var c = STATE.courseConfig;
    var racHtml = CAREER_RACS.map(function (rac) {
      var selected = STATE.selectedRACIds.indexOf(rac.id) !== -1;
      return '<div class="item-row"><div style="flex:1"><div class="item-name">' + rac.code + '</div><div class="item-sub">' + rac.description + '</div></div><button class="btn btn-sm ' + (selected ? 'btn-danger' : 'btn-edit') + '" onclick="toggleManagedRAC(\'' + rac.id + '\')">' + (selected ? 'Quitar' : 'Agregar') + '</button></div>';
    }).join('');
    var raauRows = STATE.raauEntries.map(function (r, i) {
      return '<div class="item-row"><div style="flex:1"><div class="item-name">' + r.code + '</div><div class="item-sub">' + r.description + '</div></div><button class="btn btn-edit btn-sm" onclick="editRAAU(' + i + ')">Editar</button><button class="btn btn-danger btn-sm" onclick="deleteRAAU(' + i + ')">Eliminar</button></div>';
    }).join('');
    var actsRows = STATE.activities.map(function (a) {
      return activityItemHTML(a, a.component, COMPONENT_COLORS[a.component]);
    }).join('');
    managed.innerHTML =
      '<div class="card" style="margin-bottom:16px"><div class="card-header"><div class="card-title">Gestión de configuración confirmada</div>' +
      '<button class="btn btn-ghost btn-sm" onclick="unlockInitialConfig()">Reabrir configuración inicial</button></div>' +
      '<div class="card-body"><div class="info-box"><p>Los datos base son de solo lectura. Aquí puede editar RAC, RAAU y actividades.</p></div>' +
      '<div class="form-grid"><div class="form-group"><label class="form-label">Período</label><input class="form-input" value="' + (c.periodoAcademico || '') + '" readonly></div>' +
      '<div class="form-group"><label class="form-label">Docente</label><input class="form-input" value="' + (c.docente || '') + '" readonly></div></div>' +
      '<div class="form-grid-3"><div class="form-group"><label class="form-label">Carrera</label><input class="form-input" value="' + (c.carrera || '') + '" readonly></div>' +
      '<div class="form-group"><label class="form-label">PAO</label><input class="form-input" value="' + (c.pao || '') + '" readonly></div>' +
      '<div class="form-group"><label class="form-label">Asignatura</label><input class="form-input" value="' + (c.asignatura || '') + '" readonly></div></div>' +
      '<div style="margin-top:10px"><div style="font-size:.78rem;font-weight:700;color:var(--navy);margin-bottom:6px">RAC (editar/agregar)</div><div>' + (racHtml || '<span style="font-size:.78rem;color:var(--gray-400)">Sin RAC disponibles</span>') + '</div></div>' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;margin-bottom:6px"><div style="font-size:.78rem;font-weight:700;color:var(--navy)">RAAU</div><button class="btn btn-sm btn-primary" onclick="addRAAU()">Agregar RAAU</button></div>' +
      (raauRows || '<div style="font-size:.78rem;color:var(--gray-400)">Sin RAAU definidos.</div>') +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;margin-bottom:6px"><div style="font-size:.78rem;font-weight:700;color:var(--navy)">Actividades</div><div style="display:flex;gap:6px"><button class="btn btn-sm" style="background:' + COMPONENT_COLORS.ACD + '15;color:' + COMPONENT_COLORS.ACD + '" onclick="addActivity(\'ACD\')">+ ACD</button><button class="btn btn-sm" style="background:' + COMPONENT_COLORS.APEX + '15;color:' + COMPONENT_COLORS.APEX + '" onclick="addActivity(\'APEX\')">+ APEX</button><button class="btn btn-sm" style="background:' + COMPONENT_COLORS.AAUT + '15;color:' + COMPONENT_COLORS.AAUT + '" onclick="addActivity(\'AAUT\')">+ AAUT</button></div></div>' +
      (actsRows || '<div style="font-size:.78rem;color:var(--gray-400)">Sin actividades registradas.</div>') +
      '</div></div>';
  }

  function onConfigConfirmContinue() {
    closeSuccessModal();
    STATE.configLocked = true;
    STATE.activeConfigId = STATE.savedConfigs[0] ? STATE.savedConfigs[0].id : '';
    loadActiveConfigData();
    save();
    renderCfgStep();
    showToast('Ahora puede gestionar la configuración desde la nueva sección.', 'success');
  }

  function renderStepper() {
    document.getElementById('cfg-stepper').innerHTML = CFG_STEPS.map(function (label, i) {
      var isDone = i < cfgStep;
      var isActive = i === cfgStep;
      var cssClass = isDone ? 'done' : isActive ? 'active' : 'pending';
      return '<div class="step-item"><div class="step-dot ' + cssClass + '">' + (isDone ? '✓' : (i + 1)) + '</div><span class="step-label ' + cssClass + '">' + label + '</span>' + (i < CFG_STEPS.length - 1 ? '<div class="step-line' + (isDone ? ' done' : '') + '"></div>' : '') + '</div>';
    }).join('');
  }

  function collectMappedRAAUs() {
    var carrera = STATE.courseConfig.carrera;
    var asignatura = STATE.courseConfig.asignatura;
    var asignaturaData = DB_ESPOCH[carrera] && DB_ESPOCH[carrera].asignaturas[asignatura];
    return (asignaturaData && asignaturaData.raau) ? asignaturaData.raau : [];
  }

  function regenerateRAAUFromSelectedRACs() {
    var previousEntries = STATE.raauEntries.slice();
    var mapped = collectMappedRAAUs();
    var generated = [];
    STATE.selectedRACIds.forEach(function (racId, idx) {
      var mappedByRac = mapped.filter(function (m) { return m.racId === racId; });
      if (mappedByRac.length > 0) {
        mappedByRac.forEach(function (m, i) {
          generated.push({
            id: 'raau_auto_' + racId + '_' + (m.code || ('IDX' + i)),
            code: m.code || ('RAAU' + (generated.length + 1)),
            description: m.description,
            racId: racId
          });
        });
      } else {
        var rac = CAREER_RACS.find(function (r) { return r.id === racId; });
        generated.push({
          id: 'raau_auto_' + racId + '_' + idx,
          code: 'RAAU' + (generated.length + 1),
          description: 'Resultado de aprendizaje asociado a ' + (rac ? rac.code : ('RAC ' + (idx + 1))),
          racId: racId
        });
      }
    });
    STATE.raauEntries = generated;
    STATE.activities.forEach(function (act) {
      var oldRaau = previousEntries.find(function (r) { return r.id === act.raauId; });
      if (!oldRaau) return;
      var replacement = generated.find(function (r) { return r.code === oldRaau.code && r.racId === oldRaau.racId; }) ||
        generated.find(function (r) { return r.racId === oldRaau.racId; });
      if (replacement) {
        act.raauId = replacement.id;
        act.racId = replacement.racId;
      }
    });
  }

  function syncActivitiesWithRAAU() {
    STATE.activities.forEach(function (act) {
      var raau = STATE.raauEntries.find(function (r) { return r.id === act.raauId; });
      if (raau) {
        act.racId = raau.racId;
        return;
      }
      var fallback = STATE.raauEntries.find(function (r) { return r.racId === act.racId; });
      if (fallback) {
        act.raauId = fallback.id;
        act.racId = fallback.racId;
      }
    });
  }

  function renderSelectedSummary() {
    var target = document.getElementById('cfg-selected-summary');
    if (!target) return;
    if (STATE.selectedRACIds.length === 0) {
      target.innerHTML = '<div class="selected-box muted">Seleccione RAC para generar RAAU automáticamente.</div>';
      return;
    }
    var racBadges = STATE.selectedRACIds.map(function (racId) {
      var rac = CAREER_RACS.find(function (r) { return r.id === racId; });
      return '<span class="sel-chip">' + (rac ? rac.code : racId) + '</span>';
    }).join('');
    var raauBadges = STATE.raauEntries.map(function (entry) {
      return '<span class="sel-chip secondary">' + entry.code + '</span>';
    }).join('');
    target.innerHTML =
      '<div class="selected-box"><div><strong>RAC seleccionados:</strong> ' + racBadges + '</div>' +
      '<div style="margin-top:8px"><strong>RAAU generados:</strong> ' + (raauBadges || '<span style="color:var(--gray-400)">—</span>') + '</div></div>';
  }

  function renderRAAUList() {
    var target = document.getElementById('cfg-raau-list');
    if (!target) return;
    if (STATE.raauEntries.length === 0) {
      target.innerHTML = '<p style="font-size:0.8rem;color:var(--gray-500);text-align:center;padding:20px;">No hay RAAU definidos. Seleccione la asignatura correcta en el Paso 1.</p>';
      return;
    }
    target.innerHTML = STATE.raauEntries.map(function (entry, i) {
      var rac = CAREER_RACS.find(function (c) { return c.id === entry.racId; });
      return '<div class="item-row"><div style="font-size:.72rem;font-weight:700;color:var(--navy);min-width:50px">' + entry.code + '</div><div style="flex:1"><div style="font-size:.82rem;font-weight:500;color:var(--gray-700)">' + entry.description + '</div><div style="font-size:.72rem;color:var(--gray-400);margin-top:2px">' + (rac ? rac.code : entry.racId) + '</div></div><button class="btn btn-danger btn-sm" onclick="deleteRAAU(' + i + ')" title="Eliminar">Eliminar</button></div>';
    }).join('');
    renderSelectedSummary();
  }

  function renderActivitiesPanels() {
    var panel = document.getElementById('cfg-activities-panels');
    var summaryDiv = document.getElementById('cfg-activities-summary');
    if (!panel || !summaryDiv) return;
    var hasAny = STATE.activities.length > 0;
    summaryDiv.style.display = hasAny ? 'block' : 'none';
    panel.innerHTML = COMPONENTS.map(function (comp) {
      var acts = STATE.activities.filter(function (a) { return a.component === comp; });
      var color = COMPONENT_COLORS[comp];
      var totalMax = acts.reduce(function (s, a) { return s + a.maxScore; }, 0);
      var maxWeight = COMPONENT_WEIGHTS[comp];
      var remaining = maxWeight - totalMax;
      return '<div style="margin-bottom:20px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><div><span style="font-weight:700;color:' + color + ';font-size:.85rem">' + comp + '</span><span style="font-size:.75rem;color:var(--gray-500);margin-left:8px">' + COMPONENT_LABELS[comp] + '</span></div><div style="display:flex;align-items:center;gap:8px"><span style="font-size:.72rem;color:' + (remaining < 0 ? 'var(--red)' : 'var(--gray-400)') + '">' + remaining.toFixed(1) + ' pts disponibles</span><button class="btn btn-sm" style="background:' + color + '15;color:' + color + '" onclick="addActivity(\'' + comp + '\')">Agregar</button></div></div><div id="acts-' + comp + '">' + acts.map(function (act) { return activityItemHTML(act, comp, color); }).join('') + '</div></div>';
    }).join('');
    renderActivitiesSummary();
  }

  function renderActivitiesSummary() {
    var summaryContent = document.getElementById('cfg-activities-summary-content');
    if (!summaryContent) return;
    if (STATE.activities.length === 0) {
      summaryContent.innerHTML = '<div style="font-size:.78rem;color:var(--gray-400)">Aún no hay actividades registradas.</div>';
      return;
    }
    var lines = COMPONENTS.map(function (comp) {
      var acts = STATE.activities.filter(function (a) { return a.component === comp; });
      var total = acts.reduce(function (sum, a) { return sum + a.maxScore; }, 0);
      var expected = COMPONENT_WEIGHTS[comp];
      var pctComp = Math.round((total / expected) * 100);
      return '<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 10px;background:white;border:1px solid var(--gray-200);border-radius:8px;margin-bottom:6px">' +
        '<span style="font-size:.76rem;color:var(--gray-600)">' + comp + ': ' + acts.length + ' actividades</span>' +
        '<span style="font-size:.75rem;font-weight:700;color:' + COMPONENT_COLORS[comp] + '">' + total.toFixed(1) + '/' + expected + ' pts (' + Math.min(pctComp, 100) + '%)</span>' +
      '</div>';
    }).join('');
    summaryContent.innerHTML = lines;
  }

  function activityItemHTML(act, comp, color) {
    var raauEntry = STATE.raauEntries.find(function (r) { return r.id === act.raauId; });
    var racIdToSearch = (raauEntry && raauEntry.racId) || act.racId;
    var rac = CAREER_RACS.find(function (r) { return r.id === racIdToSearch; });
    var procedure = (EVAL_PROCEDURES[comp] || []).find(function (p) { return p.id === act.procedureId; });
    return '<div class="item-row">' +
      '<span class="comp-pill" style="background:' + color + '15;color:' + color + '">' + comp + '</span>' +
      '<div style="flex:1"><div class="item-name">' + act.name + '</div><div class="item-sub">Max: ' + act.maxScore + ' pts | RAAU: ' + (raauEntry ? raauEntry.code : '—') + ' | RAC: ' + (rac ? rac.code : '—') + ' | Proc: ' + (procedure ? procedure.name : '—') + '</div></div>' +
      '<button class="btn btn-edit btn-sm" onclick="editActivity(\'' + act.id + '\')" title="Editar">Editar</button>' +
      '<button class="btn btn-danger btn-sm" onclick="deleteActivity(\'' + act.id + '\')" title="Eliminar">Eliminar</button>' +
      '</div>';
  }

  function renderCfgStep() {
    renderManagedConfigSection();
    if (STATE.configLocked) {
      renderSavedConfigs();
      return;
    }
    applyDefaultTemplateIfNeeded();
    renderStepper();
    for (var i = 0; i < 4; i++) {
      var stepEl = document.getElementById('cfg-step-' + i);
      if (stepEl) stepEl.style.display = 'none';
    }
    var current = document.getElementById('cfg-step-' + cfgStep);
    if (current) current.style.display = 'block';
    document.getElementById('cfg-prev').style.display = cfgStep > 0 ? '' : 'none';
    document.getElementById('cfg-next').style.display = cfgStep < 3 ? '' : 'none';
    document.getElementById('cfg-save').style.display = cfgStep === 3 ? '' : 'none';

    var config = STATE.courseConfig;
    if (cfgStep === 0) {
      document.getElementById('cfg-periodo').value = config.periodoAcademico || '';
      document.getElementById('cfg-docente').value = config.docente || '';
      document.getElementById('cfg-aporte').value = config.aporte || 'FIN DE CICLO';
      var elCarrera = document.getElementById('cfg-carrera');
      if (config.carrera) {
        elCarrera.value = config.carrera;
        onCarreraChange();
        var elPao = document.getElementById('cfg-pao');
        if (config.pao) {
          elPao.value = config.pao;
          onPaoChange();
          var elAsig = document.getElementById('cfg-asignatura');
          if (config.asignatura) elAsig.value = config.asignatura;
        }
      }
    }
    if (cfgStep === 1) {
      document.getElementById('cfg-rac-title').textContent = 'RAC disponibles — Carrera: ' + (STATE.courseConfig.carrera || '—');
      if (CAREER_RACS.length === 0) {
        document.getElementById('cfg-rac-list').innerHTML = '<div class="info-box" style="background:#fee2e2;border-color:#fca5a5"><p style="color:#991b1b">No hay RACs configurados para la carrera seleccionada.</p></div>';
      } else {
        document.getElementById('cfg-rac-list').innerHTML = CAREER_RACS.map(function (rac) {
          var isSelected = STATE.selectedRACIds.indexOf(rac.id) !== -1;
          return '<div class="rac-card ' + (isSelected ? 'selected' : '') + '" onclick="toggleRAC(\'' + rac.id + '\',this)"><div class="rac-checkbox"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div><div><div class="rac-code">' + rac.code + '</div><div class="rac-desc">' + rac.description + '</div></div></div>';
        }).join('');
      }
    }
    if (cfgStep === 2) { renderRAAUList(); renderSelectedSummary(); }
    if (cfgStep === 3) renderActivitiesPanels();
    renderSavedConfigs();
  }

  function cfgPrev() { if (cfgStep > 0) { cfgStep--; renderCfgStep(); } }
  function cfgNext() {
    if (cfgStep === 0) {
      var periodoVal = document.getElementById('cfg-periodo').value;
      var carreraVal = document.getElementById('cfg-carrera').value;
      var asignaturaVal = document.getElementById('cfg-asignatura').value;
      var docenteVal = document.getElementById('cfg-docente').value;
      if (!carreraVal || !asignaturaVal) { showToast('Seleccione carrera y asignatura antes de continuar.', 'error'); return; }
      if (!periodoVal) { showToast('Ingrese el período académico.', 'error'); return; }
      STATE.courseConfig.periodoAcademico = periodoVal;
      STATE.courseConfig.facultad = document.getElementById('cfg-facultad').value;
      STATE.courseConfig.carrera = carreraVal;
      STATE.courseConfig.asignatura = asignaturaVal;
      STATE.courseConfig.docente = docenteVal;
      STATE.courseConfig.pao = document.getElementById('cfg-pao').value;
      STATE.courseConfig.aporte = document.getElementById('cfg-aporte').value;
      addRecentActivity('Configuración: ' + carreraVal + ' — ' + asignaturaVal, 'config');
    }
    if (cfgStep < 3) { cfgStep++; renderCfgStep(); }
  }
  function cfgSave() {
    var issues = [];
    COMPONENTS.forEach(function (comp) {
      var count = STATE.activities.filter(function (a) { return a.component === comp; }).length;
      if (count < 2) issues.push(comp + ' (' + COMPONENT_LABELS[comp] + '): requiere ≥2 actividades (tiene ' + count + ')');
    });
    if (issues.length > 0) {
      var issuesHtml = issues.map(function (i) {
        return '<li style="padding:6px 10px;background:var(--red-bg);border-radius:var(--radius);font-size:.8rem;color:#991b1b;margin-bottom:4px;display:flex;align-items:center;gap:6px">' + i + '</li>';
      }).join('');
      openModal('⚠️ Configuración Incompleta',
        '<p style="color:var(--gray-600);font-size:.85rem;margin-bottom:12px">Debe tener al menos <strong>2 actividades por componente</strong>:</p>' +
        '<ul style="list-style:none;padding:0">' + issuesHtml + '</ul>',
        [{ label: 'Entendido', cls: 'btn-primary', action: 'close' }]
      );
      return;
    }
    save();
    updateSidebar();
    var snapshot = {
      id: 'cfg_' + Date.now(),
      savedAt: new Date().toLocaleString(),
      ownerEmail: (STATE.currentUser && STATE.currentUser.email) || '',
      courseConfig: JSON.parse(JSON.stringify(STATE.courseConfig)),
      selectedRACIds: STATE.selectedRACIds.slice(),
      raauEntries: JSON.parse(JSON.stringify(STATE.raauEntries)),
      activities: JSON.parse(JSON.stringify(STATE.activities))
    };
    STATE.savedConfigs.unshift(snapshot);
    if (STATE.savedConfigs.length > 8) STATE.savedConfigs = STATE.savedConfigs.slice(0, 8);
    renderSavedConfigs();
    addRecentActivity('Configuración guardada exitosamente', 'config');
    showSuccessModal();
  }

  function applySavedConfig(configId) {
    var found = STATE.savedConfigs.find(function (cfg) { return cfg.id === configId; });
    if (!found) return;
    if (STATE.currentUser && STATE.currentUser.role === 'docente' && (found.ownerEmail || '') !== STATE.currentUser.email) {
      showToast('No puede abrir configuraciones de otros docentes.', 'error');
      return;
    }
    STATE.courseConfig = JSON.parse(JSON.stringify(found.courseConfig));
    STATE.selectedRACIds = found.selectedRACIds.slice();
    STATE.raauEntries = JSON.parse(JSON.stringify(found.raauEntries));
    STATE.activities = JSON.parse(JSON.stringify(found.activities));
    if (STATE.courseConfig.carrera && DB_ESPOCH[STATE.courseConfig.carrera]) {
      CAREER_RACS = DB_ESPOCH[STATE.courseConfig.carrera].racs || [];
    }
    STATE.configLocked = true;
    STATE.activeConfigId = configId;
    loadActiveConfigData();
    save();
    renderCfgStep();
    updateSidebar();
    showToast('Configuración aplicada desde historial', 'success');
  }

  function editSavedConfigName(configId) {
    var found = STATE.savedConfigs.find(function (cfg) { return cfg.id === configId; });
    if (!found) return;
    openModal('Editar configuración guardada',
      '<div class="form-group"><label class="form-label">Asignatura</label><input class="form-input" id="m-edit-asig" value="' + (found.courseConfig.asignatura || '') + '"></div>' +
      '<div class="form-grid"><div class="form-group"><label class="form-label">Docente</label><input class="form-input" id="m-edit-doc" value="' + (found.courseConfig.docente || '') + '"></div><div class="form-group"><label class="form-label">Aporte</label><input class="form-input" id="m-edit-aporte" value="' + (found.courseConfig.aporte || '') + '"></div></div>',
      [
        { label: 'Cancelar', cls: 'btn-ghost', action: 'close' },
        { label: 'Guardar', cls: 'btn-success', action: function () {
          found.courseConfig.asignatura = document.getElementById('m-edit-asig').value;
          found.courseConfig.docente = document.getElementById('m-edit-doc').value;
          found.courseConfig.aporte = document.getElementById('m-edit-aporte').value;
          save();
          renderSavedConfigs();
          closeModal();
          showToast('Configuración guardada actualizada', 'success');
        } }
      ]);
  }

  function renderSavedConfigs() {
    var target = document.getElementById('cfg-saved-configs');
    if (!target) return;
    var visibleConfigs = (STATE.savedConfigs || []).filter(function (cfg) {
      if (!STATE.currentUser || STATE.currentUser.role !== 'docente') return true;
      return (cfg.ownerEmail || '') === STATE.currentUser.email;
    });
    if (!visibleConfigs || visibleConfigs.length === 0) {
      target.innerHTML = '<div style="font-size:.8rem;color:var(--gray-500)">Aún no existen configuraciones guardadas.</div>';
      return;
    }
    target.innerHTML = visibleConfigs.map(function (cfg) {
      var acts = cfg.activities ? cfg.activities.length : 0;
      var raau = cfg.raauEntries ? cfg.raauEntries.length : 0;
      return '<div class="saved-config-item">' +
        '<div><div class="saved-config-title">' + (cfg.courseConfig.asignatura || 'Sin asignatura') + '</div>' +
        '<div class="saved-config-sub">' + (cfg.courseConfig.carrera || '—') + ' · PAO ' + (cfg.courseConfig.pao || '—') + ' · ' + acts + ' actividades · ' + raau + ' RAAU · ' + cfg.savedAt + '</div></div>' +
        '<div style="display:flex;gap:6px"><button class="btn btn-sm btn-edit" onclick="applySavedConfig(\'' + cfg.id + '\')">Usar</button><button class="btn btn-sm btn-ghost" onclick="editSavedConfigName(\'' + cfg.id + '\')">Editar</button><button class="btn btn-sm btn-danger" onclick="deleteSavedConfig(\'' + cfg.id + '\')">Eliminar</button></div>' +
      '</div>';
    }).join('');
  }

  function deleteSavedConfig(configId) {
    var cfg = STATE.savedConfigs.find(function (item) { return item.id === configId; });
    if (!cfg) return;
    openModal('Eliminar configuración',
      '<p style="font-size:.85rem;color:var(--gray-600)">¿Eliminar la configuración <strong>' + (cfg.courseConfig.asignatura || 'sin nombre') + '</strong>?</p>',
      [
        { label: 'Cancelar', cls: 'btn-ghost', action: 'close' },
        { label: 'Eliminar', cls: 'btn-danger', action: function () {
          STATE.savedConfigs = STATE.savedConfigs.filter(function (item) { return item.id !== configId; });
          if (STATE.activeConfigId === configId) {
            STATE.activeConfigId = '';
            STATE.students = [];
            STATE.grades = [];
          }
          delete STATE.studentsByConfig[configId];
          delete STATE.gradesByConfig[configId];
          save();
          renderSavedConfigs();
          closeModal();
          showToast('Configuración eliminada', 'success');
        } }
      ]);
  }

  function unlockInitialConfig() {
    STATE.configLocked = false;
    STATE.activeConfigId = '';
    STATE.courseConfig.periodoAcademico = '';
    STATE.courseConfig.carrera = '';
    STATE.courseConfig.pao = '';
    STATE.courseConfig.asignatura = '';
    STATE.courseConfig.docente = '';
    STATE.courseConfig.aporte = 'FIN DE CICLO';
    STATE.selectedRACIds = [];
    STATE.raauEntries = [];
    STATE.activities = [];
    save();
    updateSidebar();
    renderCfgStep();
    showToast('Configuración inicial reabierta y limpiada para iniciar desde cero.', 'success');
  }

  function saveManagedConfigEdits() {
    STATE.courseConfig.periodoAcademico = document.getElementById('managed-periodo').value;
    STATE.courseConfig.docente = document.getElementById('managed-docente').value;
    STATE.courseConfig.asignatura = document.getElementById('managed-asignatura').value;
    save();
    updateSidebar();
    renderManagedConfigSection();
    showToast('Cambios generales guardados', 'success');
  }

  function openManagedRAAUEditor() {
    STATE.configLocked = false;
    cfgStep = 1;
    renderCfgStep();
    showToast('Puede editar RAC/RAAU. Al guardar volverá a gestión.', 'success');
  }

  function openManagedActivities() {
    STATE.configLocked = false;
    cfgStep = 3;
    renderCfgStep();
    showToast('Puede editar actividades. Al guardar volverá a gestión.', 'success');
  }

  function toggleRAC(id, el) {
    if (STATE.selectedRACIds.indexOf(id) !== -1) {
      STATE.selectedRACIds = STATE.selectedRACIds.filter(function (r) { return r !== id; });
      el.classList.remove('selected');
    } else {
      STATE.selectedRACIds.push(id);
      el.classList.add('selected');
    }
    regenerateRAAUFromSelectedRACs();
    syncActivitiesWithRAAU();
    renderRAAUList();
    renderSelectedSummary();
    save();
  }

  function toggleManagedRAC(id) {
    var current = STATE.selectedRACIds.indexOf(id);
    if (current >= 0) STATE.selectedRACIds.splice(current, 1);
    else STATE.selectedRACIds.push(id);
    regenerateRAAUFromSelectedRACs();
    syncActivitiesWithRAAU();
    save();
    renderManagedConfigSection();
  }

  function deleteRAAU(i) {
    STATE.raauEntries.splice(i, 1);
    syncActivitiesWithRAAU();
    if (STATE.configLocked) renderManagedConfigSection();
    else renderRAAUList();
    save();
  }
  function editRAAU(i) {
    var entry = STATE.raauEntries[i];
    if (!entry) return;
    var racOptions = CAREER_RACS.map(function (r) {
      return '<option value="' + r.id + '"' + (r.id === entry.racId ? ' selected' : '') + '>' + r.code + '</option>';
    }).join('');
    openModal('Editar RAAU',
      '<div class="form-group"><label class="form-label">Código</label><input class="form-input" id="m-raau-code" value="' + entry.code + '"></div>' +
      '<div class="form-group"><label class="form-label">Descripción</label><textarea class="form-input" id="m-raau-desc" rows="3">' + entry.description + '</textarea></div>' +
      '<div class="form-group"><label class="form-label">RAC asociado</label><select class="form-select" id="m-raau-rac">' + racOptions + '</select></div>',
      [
        { label: 'Cancelar', cls: 'btn-ghost', action: 'close' },
        { label: 'Guardar', cls: 'btn-success', action: function () {
          entry.code = document.getElementById('m-raau-code').value;
          entry.description = document.getElementById('m-raau-desc').value;
          entry.racId = document.getElementById('m-raau-rac').value;
          syncActivitiesWithRAAU();
          save();
          if (STATE.configLocked) renderManagedConfigSection();
          else renderRAAUList();
          closeModal();
        } }
      ]);
  }
  function addRAAU() {
    var selectedRacs = STATE.selectedRACIds;
    if (selectedRacs.length === 0) { showToast('Primero seleccione al menos un RAC.', 'error'); return; }
    var newCode = 'RAAU' + (STATE.raauEntries.length + 1);
    var racOptions = CAREER_RACS.filter(function (r) { return selectedRacs.indexOf(r.id) !== -1; }).map(function (r) {
      return '<option value="' + r.id + '">' + r.code + ' — ' + r.description.slice(0, 60) + '…</option>';
    }).join('');
    openModal('Nuevo RAAU',
      '<div class="form-group"><label class="form-label">Código</label><input class="form-input" id="m-code" value="' + newCode + '"></div>' +
      '<div class="form-group"><label class="form-label">Descripción</label><textarea class="form-input" id="m-desc" rows="3" style="resize:vertical"></textarea></div>' +
      '<div class="form-group"><label class="form-label">RAC asociado</label><select class="form-select" id="m-rac">' + racOptions + '</select></div>',
      [
        { label: 'Cancelar', cls: 'btn-ghost', action: 'close' },
        { label: 'Agregar', cls: 'btn-primary', action: function () {
          var codeValue = document.getElementById('m-code').value;
          var descValue = document.getElementById('m-desc').value;
          var racIdValue = document.getElementById('m-rac').value;
          if (!codeValue || !descValue) return;
          STATE.raauEntries.push({ id: 'raau' + Date.now(), code: codeValue, description: descValue, racId: racIdValue });
          syncActivitiesWithRAAU();
          if (STATE.configLocked) renderManagedConfigSection();
          else renderRAAUList();
          save();
          closeModal();
        } }
      ]);
  }

  function deleteActivity(id) {
    STATE.activities = STATE.activities.filter(function (a) { return a.id !== id; });
    if (STATE.configLocked) renderManagedConfigSection();
    else renderActivitiesPanels();
    save();
  }

  function editActivity(actId) {
    var act = STATE.activities.find(function (a) { return a.id === actId; });
    if (!act) return;
    var comp = act.component;
    var raauOptions = STATE.raauEntries.map(function (r) {
      return '<option value="' + r.id + '"' + (r.id === act.raauId ? ' selected' : '') + '>' + r.code + ' — ' + r.description.slice(0, 50) + '…</option>';
    }).join('');
    var procOptions = (EVAL_PROCEDURES[comp] || []).map(function (p) {
      return '<option value="' + p.id + '"' + (p.id === act.procedureId ? ' selected' : '') + '>' + p.name + '</option>';
    }).join('');
    var racOptions = CAREER_RACS.filter(function (r) { return STATE.selectedRACIds.indexOf(r.id) !== -1; }).map(function (r) {
      return '<option value="' + r.id + '"' + (r.id === act.racId ? ' selected' : '') + '>' + r.code + '</option>';
    }).join('');
    var otherTotal = STATE.activities.filter(function (a) { return a.component === comp && a.id !== actId; }).reduce(function (sum, a) { return sum + a.maxScore; }, 0);
    var pesoMaximo = COMPONENT_WEIGHTS[comp];
    openModal('Editar Actividad — ' + act.name,
      '<div class="form-group"><label class="form-label">Nombre</label><input class="form-input" id="m-aname" value="' + act.name + '"></div>' +
      '<div class="form-group"><label class="form-label">Puntaje Máximo</label><input class="form-input" type="number" id="m-amax" step="0.5" min="0.1" max="' + pesoMaximo + '" value="' + act.maxScore + '"></div>' +
      '<div class="info-box" style="margin:8px 0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg><p>Otras: ' + otherTotal.toFixed(1) + ' pts. Disponible: ' + (pesoMaximo - otherTotal).toFixed(1) + ' pts</p></div>' +
      '<div class="form-group"><label class="form-label">RAC asociado</label><select class="form-select" id="m-arac">' + racOptions + '</select></div>' +
      '<div class="form-group"><label class="form-label">RAAU asociado</label><select class="form-select" id="m-araau">' + raauOptions + '</select></div>' +
      '<div class="form-group"><label class="form-label">Procedimiento evaluativo</label><select class="form-select" id="m-aproc">' + procOptions + '</select></div>',
      [
        { label: 'Cancelar', cls: 'btn-ghost', action: 'close' },
        { label: 'Guardar Cambios', cls: 'btn-success', action: function () {
          var nameValue = document.getElementById('m-aname').value;
          var maxValue = parseFloat(document.getElementById('m-amax').value);
          if (!nameValue || isNaN(maxValue)) return;
          var newTotal = otherTotal + maxValue;
          if (newTotal > pesoMaximo) { showToast('Error: ' + comp + ' no puede exceder ' + pesoMaximo + ' pts.', 'error'); return; }
          var raauSelectedId = document.getElementById('m-araau').value;
          var raauEntry = STATE.raauEntries.find(function (r) { return r.id === raauSelectedId; });
          if (!raauEntry || STATE.selectedRACIds.indexOf(raauEntry.racId) === -1) {
            showToast('El RAAU seleccionado no corresponde a los RAC activos.', 'error');
            return;
          }
          act.name = nameValue;
          act.maxScore = maxValue;
          act.racId = raauEntry.racId;
          act.raauId = raauSelectedId;
          act.procedureId = document.getElementById('m-aproc').value;
          if (STATE.configLocked) renderManagedConfigSection();
          else renderActivitiesPanels();
          save();
          closeModal();
          showToast('Actividad "' + nameValue + '" actualizada', 'success');
        } }
      ]);
  }

  function addActivity(comp) {
    if (STATE.raauEntries.length === 0) { showToast('Debe tener al menos un RAAU antes de crear actividades', 'error'); return; }
    if (STATE.selectedRACIds.length === 0) { showToast('Debe seleccionar al menos un RAC antes de crear actividades', 'error'); return; }
    var raauOptions = STATE.raauEntries.map(function (r) {
      return '<option value="' + r.id + '">' + r.code + ' — ' + r.description.slice(0, 50) + '…</option>';
    }).join('');
    var procOptions = (EVAL_PROCEDURES[comp] || []).map(function (p) {
      return '<option value="' + p.id + '">' + p.name + '</option>';
    }).join('');
    var racOptions = CAREER_RACS.filter(function (r) { return STATE.selectedRACIds.indexOf(r.id) !== -1; }).map(function (r) {
      return '<option value="' + r.id + '">' + r.code + '</option>';
    }).join('');
    var currentTotal = STATE.activities.filter(function (a) { return a.component === comp; }).reduce(function (sum, a) { return sum + a.maxScore; }, 0);
    var pesoMaximo = COMPONENT_WEIGHTS[comp];

    openModal('Nueva Actividad — ' + comp,
      '<div class="form-group"><label class="form-label">Nombre</label><input class="form-input" id="m-aname" placeholder="Ej: Tareas en Equipo"></div>' +
      '<div class="form-group"><label class="form-label">Puntaje Máximo</label><input class="form-input" type="number" id="m-amax" step="0.5" min="0.1" max="' + pesoMaximo + '" value="1.0"></div>' +
      '<div class="info-box" style="margin:8px 0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg><p>Asignados: ' + currentTotal.toFixed(1) + ' / ' + pesoMaximo + ' pts. Disponible: ' + (pesoMaximo - currentTotal).toFixed(1) + ' pts</p></div>' +
      '<div class="form-group"><label class="form-label">RAC asociado</label><select class="form-select" id="m-arac">' + racOptions + '</select></div>' +
      '<div class="form-group"><label class="form-label">RAAU asociado</label><select class="form-select" id="m-araau">' + raauOptions + '</select></div>' +
      '<div class="form-group"><label class="form-label">Procedimiento evaluativo</label><select class="form-select" id="m-aproc">' + procOptions + '</select></div>',
      [
        { label: 'Cancelar', cls: 'btn-ghost', action: 'close' },
        { label: 'Agregar', cls: 'btn-primary', action: function () {
          var nameValue = document.getElementById('m-aname').value;
          var maxValue = parseFloat(document.getElementById('m-amax').value);
          if (!nameValue || isNaN(maxValue)) return;
          var newCurrentTotal = currentTotal + maxValue;
          if (newCurrentTotal > pesoMaximo) { showToast('Error: ' + comp + ' no puede exceder ' + pesoMaximo + ' pts.', 'error'); return; }
          var raauChosenId = document.getElementById('m-araau').value;
          var raauChosen = STATE.raauEntries.find(function (r) { return r.id === raauChosenId; });
          if (!raauChosen || STATE.selectedRACIds.indexOf(raauChosen.racId) === -1) {
            showToast('El RAAU seleccionado no corresponde a los RAC activos.', 'error');
            return;
          }
          var newAct = {
            id: 'act' + Date.now(), name: nameValue, component: comp, maxScore: maxValue,
            racId: raauChosen.racId,
            raauId: raauChosenId,
            procedureId: document.getElementById('m-aproc').value
          };
          STATE.activities.push(newAct);
          addRecentActivity('Actividad "' + nameValue + '" agregada a ' + comp, 'config');
          if (STATE.configLocked) renderManagedConfigSection();
          else renderActivitiesPanels();
          save();
          closeModal();
        } }
      ]);
  }

  function getGrade(sid, aid) {
    var g = STATE.grades.find(function (x) { return x.studentId === sid && x.activityId === aid; });
    return g ? g.score : null;
  }
  function setGrade(sid, aid, score) {
    var idx = STATE.grades.findIndex(function (x) { return x.studentId === sid && x.activityId === aid; });
    if (idx >= 0) STATE.grades[idx].score = score;
    else STATE.grades.push({ studentId: sid, activityId: aid, score: score });
    persistActiveConfigData();
  }
  function studentTotal(sid) {
    return STATE.activities.reduce(function (sum, act) {
      var g = getGrade(sid, act.id);
      return sum + (g != null ? g : 0);
    }, 0);
  }
  function fmt(n) { return Number(n || 0).toFixed(2); }
  function pct(a, b) { return b > 0 ? Math.round(a / b * 100) : 0; }
  function addRecentActivity(text, type) {
    var now = new Date();
    var timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    STATE.recentActivity.unshift({ text: text, type: type, time: timeStr, date: now.toLocaleDateString() });
    if (STATE.recentActivity.length > 20) STATE.recentActivity.pop();
  }

  var chartDistribution = null;
  var chartStudents = null;
  var chartPie = null;
  var chartCoordDocentes = null;
  var chartCoordConfigs = null;
  function getIconSVG(name, color) {
    var icons = {
      users: '<svg viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      'check-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      'x-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
      'trending-up': '<svg viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>'
    };
    return icons[name] || icons.users;
  }

  function renderDashboard() {
    var config = STATE.courseConfig;
    var students = STATE.students;
    var activities = STATE.activities;
    document.getElementById('dash-sub').textContent = (config.asignatura || 'Sin Asignatura') + ' — ' + config.periodoAcademico;
    document.getElementById('dash-banner').innerHTML = '<div class="course-banner-fields"><div class="banner-field"><div class="lbl">Carrera</div><div class="val">' + (config.carrera || '—') + '</div></div><div class="banner-field"><div class="lbl">PAO</div><div class="val">' + (config.pao || '—') + '</div></div><div class="banner-field"><div class="lbl">Aporte</div><div class="val">' + (config.aporte || '—') + '</div></div><div class="banner-field"><div class="lbl">Docente</div><div class="val">' + (config.docente || '—') + '</div></div></div>';

    var allTotals = students.map(function (s) { return studentTotal(s.id); });
    var approvedCount = allTotals.filter(function (t) { return t >= 7; }).length;
    var failedCount = allTotals.filter(function (t) { return t > 0 && t < 7; }).length;
    var noGradeCount = allTotals.filter(function (t) { return t === 0; }).length;
    var classAverage = allTotals.length > 0 ? allTotals.reduce(function (a, b) { return a + b; }, 0) / allTotals.length : 0;
    var maxTotal = activities.reduce(function (s, a) { return s + a.maxScore; }, 0);
    var statItems = [
      { title: 'Estudiantes', value: students.length, sub: 'Matriculados', color: 'var(--navy)', icon: 'users' },
      { title: 'Aprobados', value: approvedCount, sub: 'Nota ≥ 7.0', color: 'var(--green)', icon: 'check-circle' },
      { title: 'Reprobados', value: failedCount, sub: 'Nota < 7.0', color: 'var(--red)', icon: 'x-circle' },
      { title: 'Promedio', value: classAverage.toFixed(2), sub: 'de ' + maxTotal.toFixed(1) + ' pts', color: 'var(--amber)', icon: 'trending-up' }
    ];
    document.getElementById('dash-stats').innerHTML = statItems.map(function (item) {
      return '<div class="stat-card animate-in"><div class="stat-row"><div><div class="stat-label">' + item.title + '</div><div class="stat-val" style="color:' + item.color + '">' + item.value + '</div><div class="stat-sub">' + item.sub + '</div></div><div class="stat-icon" style="background:' + item.color + '18">' + getIconSVG(item.icon, item.color) + '</div></div></div>';
    }).join('');

    renderDistributionChart(allTotals);
    renderStudentsChart(students, allTotals);
    renderPieChart(approvedCount, failedCount, noGradeCount);
    renderComponentProgress();
    renderRecentActivity();

    var raSummaryHtml = '<div style="display:flex;flex-direction:column;gap:8px">';
    [['RAC seleccionados', STATE.selectedRACIds.length, 'var(--blue)'], ['RAAU definidos', STATE.raauEntries.length, 'var(--green)'], ['Actividades', activities.length, 'var(--amber)']].forEach(function (pair) {
      raSummaryHtml += '<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:var(--gray-50);border-radius:var(--radius)"><span style="font-size:.78rem;color:var(--gray-600)">' + pair[0] + '</span><span style="font-size:1rem;font-weight:700;color:' + pair[2] + '">' + pair[1] + '</span></div>';
    });
    raSummaryHtml += '</div>';
    var raTarget = document.getElementById('dash-ra-summary');
    if (raTarget) raTarget.innerHTML = raSummaryHtml;

    var previewStudents = students.slice(0, 10);
    var tbodyHtml = previewStudents.map(function (student, idx) {
      var tot = studentTotal(student.id);
      var passed = tot >= 7;
      var studentPct = pct(tot, maxTotal);
      return '<tr><td style="color:var(--gray-400)">' + (idx + 1) + '</td><td><div style="font-weight:500;font-size:.83rem">' + student.apellidos + ' ' + student.nombres + '</div><div style="font-size:.72rem;color:var(--gray-400);font-family:var(--mono)">' + student.cedula + '</div></td><td><div style="display:flex;align-items:center;gap:8px"><div class="progress-bar" style="width:60px"><div class="progress-fill" style="width:' + Math.min(studentPct, 100) + '%;background:' + (passed ? 'var(--green)' : 'var(--red)') + '"></div></div><span style="font-weight:700;color:' + (passed ? 'var(--green)' : 'var(--red)') + ';font-size:.83rem">' + fmt(tot) + '</span></div></td><td><span class="badge ' + (passed ? 'badge-green' : 'badge-red') + '">' + (passed ? '✓ Aprobado' : '✗ Reprobado') + '</span></td></tr>';
    }).join('');
    var dashBody = document.getElementById('dash-student-body');
    if (dashBody) dashBody.innerHTML = tbodyHtml;
  }

  function renderDistributionChart(totals) {
    if (typeof window.Chart === 'undefined') return;
    var ctx = document.getElementById('dash-chart-distribution');
    if (!ctx) return;
    if (chartDistribution) chartDistribution.destroy();
    var ranges = ['0-4', '5-6', '7-8', '9-10'];
    var counts = [0, 0, 0, 0];
    totals.forEach(function (t) { if (t < 5) counts[0]++; else if (t < 7) counts[1]++; else if (t < 9) counts[2]++; else counts[3]++; });
    chartDistribution = new window.Chart(ctx, { type: 'bar', data: { labels: ranges, datasets: [{ data: counts, backgroundColor: ['#ef4444', '#f59e0b', '#22c55e', '#3b82f6'], borderRadius: 6 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } } });
  }

  function renderStudentsChart(students, totals) {
    if (typeof window.Chart === 'undefined') return;
    var ctx = document.getElementById('dash-chart-students');
    if (!ctx) return;
    if (chartStudents) chartStudents.destroy();
    var shortNames = students.map(function (s) { var parts = s.apellidos.split(' '); return parts[0] + ' ' + (parts[1] ? parts[1][0] + '.' : ''); });
    chartStudents = new window.Chart(ctx, { type: 'bar', data: { labels: shortNames, datasets: [{ data: totals, backgroundColor: totals.map(function (t) { return t >= 7 ? '#22c55e' : '#ef4444'; }), borderRadius: 4 }] }, options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } } });
  }

  function renderPieChart(approved, failed, noGrade) {
    if (typeof window.Chart === 'undefined') return;
    var ctx = document.getElementById('dash-chart-pie');
    if (!ctx) return;
    if (chartPie) chartPie.destroy();
    chartPie = new window.Chart(ctx, { type: 'doughnut', data: { labels: ['Aprobados', 'Reprobados', 'Sin nota'], datasets: [{ data: [approved, failed, noGrade], backgroundColor: ['#22c55e', '#ef4444', '#9ca3af'], borderWidth: 0 }] }, options: { responsive: false, cutout: '65%', plugins: { legend: { display: false } } } });
    var total = approved + failed + noGrade;
    document.getElementById('dash-pie-label').textContent = total + ' estudiantes evaluados';
  }

  function renderComponentProgress() {
    var activities = STATE.activities;
    var container = document.getElementById('dash-comp-progress');
    if (!container) return;
    container.innerHTML = COMPONENTS.map(function (comp) {
      var compActs = activities.filter(function (a) { return a.component === comp; });
      var maxPts = compActs.reduce(function (s, a) { return s + a.maxScore; }, 0);
      var color = COMPONENT_COLORS[comp];
      var weight = COMPONENT_WEIGHTS[comp];
      var pctVal = (maxPts / weight * 100).toFixed(0);
      return '<div class="comp-progress-item">' +
        '<div class="comp-progress-header"><span class="comp-progress-label" style="color:' + color + '">' + comp + '</span><span class="comp-progress-value">' + maxPts.toFixed(1) + ' / ' + weight + ' pts (' + pctVal + '%)</span></div>' +
        '<div class="progress-bar"><div class="progress-fill" style="width:' + Math.min(pctVal, 100) + '%;background:' + color + '"></div></div>' +
        '<div style="font-size:.7rem;color:var(--gray-400);margin-top:3px">' + compActs.length + ' actividad' + (compActs.length !== 1 ? 'es' : '') + '</div>' +
      '</div>';
    }).join('');
  }

  function renderRecentActivity() {
    var container = document.getElementById('dash-recent-activity');
    if (!container) return;
    var activities = STATE.recentActivity.slice(0, 8);
    if (activities.length === 0) {
      container.innerHTML = '<div style="text-align:center;padding:20px;color:var(--gray-400);font-size:.82rem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:32px;height:32px;margin:0 auto 8px;display:block;opacity:.3"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Aún no hay actividad reciente</div>';
      return;
    }
    var typeIcons = {
      grade: { color: 'var(--green)', bg: '#f0fdf4', icon: 'check-circle' },
      config: { color: 'var(--blue)', bg: '#eff6ff', icon: 'users' },
      student: { color: 'var(--purple)', bg: '#f5f3ff', icon: 'users' }
    };
    container.innerHTML = activities.map(function (act) {
      var style = typeIcons[act.type] || typeIcons.config;
      return '<div class="activity-item animate-in"><div class="activity-icon" style="background:' + style.bg + ';color:' + style.color + '">' + getIconSVG(style.icon, style.color) + '</div><div class="activity-text">' + act.text + '</div><div class="activity-time">' + act.time + '</div></div>';
    }).join('');
  }

  function renderEstudiantes() {
    if (!STATE.configLocked || !STATE.activeConfigId) {
      document.getElementById('est-sub').textContent = 'Complete y confirme la configuración para gestionar estudiantes';
      document.getElementById('est-stats').innerHTML = '';
      document.getElementById('est-body').innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--gray-500);padding:20px">Primero confirme la configuración de la asignatura/PAO para cargar estudiantes específicos.</td></tr>';
      document.getElementById('est-table-title').textContent = 'Nómina (0)';
      setImportStatus('Importación deshabilitada hasta confirmar configuración.', true);
      return;
    }
    var students = STATE.students;
    document.getElementById('est-sub').textContent = students.length + ' estudiantes matriculados';
    var allTotals = students.map(function (s) { return studentTotal(s.id); });
    var approvedCount = allTotals.filter(function (t) { return t >= 7; }).length;
    var classAverage = allTotals.length > 0 ? allTotals.reduce(function (a, b) { return a + b; }, 0) / allTotals.length : 0;
    document.getElementById('est-stats').innerHTML = [
      { label: 'Total', val: students.length, color: 'var(--navy)' },
      { label: 'Aprobados', val: approvedCount, color: 'var(--green)' },
      { label: 'Promedio', val: classAverage.toFixed(2), color: 'var(--amber)' }
    ].map(function (s) {
      return '<div class="card" style="padding:14px 18px"><div style="font-size:.75rem;color:var(--gray-400)">' + s.label + '</div><div style="font-size:1.4rem;font-weight:700;color:' + s.color + ';margin-top:3px">' + s.val + '</div></div>';
    }).join('');
    renderStudentTable();
  }

  function renderStudentTable() {
    var query = (document.getElementById('est-search') ? document.getElementById('est-search').value : '').toLowerCase();
    var filtered = STATE.students.filter(function (s) {
      return (s.apellidos + ' ' + s.nombres + ' ' + s.cedula).toLowerCase().indexOf(query) !== -1;
    });
    document.getElementById('est-table-title').textContent = 'Nómina (' + filtered.length + ')';
    document.getElementById('est-body').innerHTML = filtered.map(function (s, i) {
      var tot = studentTotal(s.id);
      var passed = tot >= 7;
      return '<tr><td style="color:var(--gray-400)">' + (i + 1) + '</td><td style="font-family:var(--mono);font-size:.78rem">' + s.cedula + '</td><td style="font-weight:500">' + s.apellidos + '</td><td>' + s.nombres + '</td><td style="text-align:center;font-weight:700;font-family:var(--mono);color:' + (passed ? 'var(--green)' : 'var(--red)') + '">' + fmt(tot) + '</td><td style="text-align:center"><span class="badge ' + (passed ? 'badge-green' : 'badge-red') + '">' + (passed ? 'Aprobado' : 'Reprobado') + '</span></td><td style="text-align:center"><div style="display:flex;gap:5px;justify-content:center"><button class="btn btn-ghost btn-sm" onclick="editStudent(\'' + s.id + '\')" title="Editar">Editar</button><button class="btn btn-danger btn-sm" onclick="confirmDelete(\'' + s.id + '\')" title="Eliminar">Eliminar</button></div></td></tr>';
    }).join('');
  }

  function triggerStudentPDFUpload() {
    if (!STATE.configLocked || !STATE.activeConfigId) {
      showToast('Primero confirme la configuración antes de importar estudiantes.', 'error');
      return;
    }
    var input = document.getElementById('est-pdf-input');
    if (input) input.click();
  }

  function onStudentDropzoneOver() {
    var zone = document.getElementById('est-dropzone');
    if (zone) zone.classList.add('dragover');
  }

  function onStudentDropzoneLeave() {
    var zone = document.getElementById('est-dropzone');
    if (zone) zone.classList.remove('dragover');
  }

  function handleStudentDrop(e) {
    if (!STATE.configLocked || !STATE.activeConfigId) {
      showToast('Primero confirme la configuración antes de importar estudiantes.', 'error');
      return;
    }
    var zone = document.getElementById('est-dropzone');
    if (zone) zone.classList.remove('dragover');
    var files = e.dataTransfer && e.dataTransfer.files ? e.dataTransfer.files : null;
    if (!files || !files[0]) return;
    handleStudentPDFUpload(files);
  }

  function setImportStatus(msg, isError) {
    var status = document.getElementById('est-import-status');
    if (!status) return;
    status.textContent = msg || '';
    status.style.color = isError ? 'var(--red)' : 'var(--gray-500)';
  }

  function normalizeNameParts(raw) {
    var clean = raw.replace(/\s+/g, ' ').trim().toUpperCase();
    var words = clean.split(' ').filter(Boolean);
    if (words.length <= 2) {
      return { apellidos: words[0] || 'SIN APELLIDO', nombres: words.slice(1).join(' ') || 'SIN NOMBRE' };
    }
    var splitIndex = Math.ceil(words.length / 2);
    return {
      apellidos: words.slice(0, splitIndex).join(' '),
      nombres: words.slice(splitIndex).join(' ')
    };
  }

  function parseStudentsFromPDFText(text) {
    var lines = text.split('\n').map(function (l) { return l.trim(); }).filter(Boolean);
    var parsed = [];
    lines.forEach(function (line) {
      var compact = line.replace(/\s+/g, ' ').trim().toUpperCase();
      var cedMatch = compact.match(/(\d{9,10}-\d|\d{10})/);
      if (!cedMatch) return;
      var cedula = cedMatch[1];
      var tail = compact.slice(compact.indexOf(cedula) + cedula.length).trim();
      if (!tail) return;
      var tokens = tail.split(' ').filter(Boolean);
      var nameTokens = [];
      for (var idx = 0; idx < tokens.length; idx++) {
        var t = tokens[idx];
        if (/^\d+[.,]\d+$/.test(t) || /^\d+$/.test(t)) break;
        if (/^(RAC|RAAU|ACD|APEX|AAUT|SUMATORIA|NOTA)$/i.test(t)) break;
        nameTokens.push(t);
      }
      if (nameTokens.length < 2) return;
      var normalized = normalizeNameParts(nameTokens.join(' '));
      parsed.push({
        id: 's' + Date.now() + '_' + Math.floor(Math.random() * 10000),
        cedula: cedula,
        apellidos: normalized.apellidos,
        nombres: normalized.nombres
      });
    });
    return parsed;
  }

  var pdfjsLibPromise = null;
  function loadPDFJSLib() {
    if (!pdfjsLibPromise) {
      pdfjsLibPromise = import('https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/build/pdf.min.mjs');
    }
    return pdfjsLibPromise;
  }

  function extractTextFromPDFBuffer(arrayBuffer) {
    var raw = new TextDecoder('latin1').decode(new Uint8Array(arrayBuffer));
    var chunks = [];
    var literalMatches = raw.match(/\((?:\\.|[^\\])*?\)\s*Tj/g) || [];
    literalMatches.forEach(function (item) {
      var cleaned = item.replace(/\)\s*Tj$/, '').replace(/^\(/, '').replace(/\\\)/g, ')').replace(/\\\(/g, '(');
      chunks.push(cleaned);
    });
    var arrayMatches = raw.match(/\[(.*?)\]\s*TJ/g) || [];
    arrayMatches.forEach(function (item) {
      var inner = item.replace(/\]\s*TJ$/, '').replace(/^\[/, '');
      var textItems = inner.match(/\((?:\\.|[^\\])*?\)/g) || [];
      textItems.forEach(function (txt) {
        chunks.push(txt.slice(1, -1).replace(/\\\)/g, ')').replace(/\\\(/g, '('));
      });
    });
    return chunks.join('\n');
  }

  async function handleStudentPDFUpload(files) {
    var file = files && files[0];
    if (!file) return;
    var input = document.getElementById('est-pdf-input');
    setImportStatus('Procesando PDF y extrayendo estudiantes...', false);
    try {
      var buffer = await file.arrayBuffer();
      var fullText = '';
      try {
        var pdfjs = await loadPDFJSLib();
        pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/build/pdf.worker.min.mjs';
        var pdf = await pdfjs.getDocument({ data: buffer }).promise;
        for (var pageIndex = 1; pageIndex <= pdf.numPages; pageIndex++) {
          var page = await pdf.getPage(pageIndex);
          var textContent = await page.getTextContent();
          var pageRows = {};
          textContent.items.forEach(function (item) {
            var yKey = Math.round(item.transform[5]);
            if (!pageRows[yKey]) pageRows[yKey] = [];
            pageRows[yKey].push({ x: item.transform[4], str: item.str });
          });
          Object.keys(pageRows).sort(function (a, b) { return Number(b) - Number(a); }).forEach(function (rowKey) {
            var rowText = pageRows[rowKey].sort(function (a, b) { return a.x - b.x; }).map(function (entry) { return entry.str; }).join(' ');
            fullText += rowText + '\n';
          });
        }
      } catch (e) {
        fullText = extractTextFromPDFBuffer(buffer);
      }
      var extracted = parseStudentsFromPDFText(fullText);
      var normalizeCed = function (value) { return String(value || '').replace(/[^0-9]/g, ''); };
      var existingCedulas = STATE.students.map(function (s) { return normalizeCed(s.cedula); });
      var newOnes = extracted.filter(function (s) { return existingCedulas.indexOf(normalizeCed(s.cedula)) === -1; });
      if (newOnes.length === 0) {
        setImportStatus('No se detectaron estudiantes nuevos en el PDF.', true);
        return;
      }
      STATE.students = STATE.students.concat(newOnes);
      persistActiveConfigData();
      save();
      renderEstudiantes();
      addRecentActivity('Importación PDF: ' + newOnes.length + ' estudiantes agregados', 'student');
      setImportStatus('Importación completada: ' + newOnes.length + ' estudiantes agregados.', false);
      showToast('Importación PDF completada', 'success');
      if (input) input.value = '';
    } catch {
      setImportStatus('No se pudo leer el PDF. Verifique el formato del archivo.', true);
      showToast('Error al importar PDF', 'error');
      if (input) input.value = '';
    }
  }

  function showAddStudent() {
    if (!STATE.configLocked || !STATE.activeConfigId) {
      showToast('Primero confirme la configuración antes de agregar estudiantes.', 'error');
      return;
    }
    var formEl = document.getElementById('est-add-form');
    formEl.style.display = 'block';
    formEl.innerHTML = '<div class="inline-form"><div class="inline-form-title">Nuevo Estudiante</div>' +
      '<div class="form-grid-3">' +
      '<div class="form-group"><label class="form-label">Cédula</label><input class="form-input" id="add-cedula" placeholder="Ej: 220027839-4"></div>' +
      '<div class="form-group"><label class="form-label">Apellidos</label><input class="form-input" id="add-apellidos" placeholder="Ej: GARCIA LOPEZ"></div>' +
      '<div class="form-group"><label class="form-label">Nombres</label><input class="form-input" id="add-nombres" placeholder="Ej: JUAN CARLOS"></div>' +
      '</div>' +
      '<div style="display:flex;gap:8px;margin-top:8px">' +
      '<button class="btn btn-success btn-sm" onclick="saveAddStudent()">✓ Guardar</button>' +
      '<button class="btn btn-ghost btn-sm" onclick="document.getElementById(\'est-add-form\').style.display=\'none\'">✕ Cancelar</button>' +
      '</div></div>';
  }

  function saveAddStudent() {
    var cedulaVal = document.getElementById('add-cedula').value.trim();
    var apellidosVal = document.getElementById('add-apellidos').value.trim().toUpperCase();
    var nombresVal = document.getElementById('add-nombres').value.trim().toUpperCase();
    if (!cedulaVal || !apellidosVal || !nombresVal) return;
    STATE.students.push({ id: 's' + Date.now(), cedula: cedulaVal, apellidos: apellidosVal, nombres: nombresVal });
    persistActiveConfigData();
    save();
    document.getElementById('est-add-form').style.display = 'none';
    addRecentActivity('Estudiante ' + nombresVal + ' ' + apellidosVal + ' agregado', 'student');
    renderEstudiantes();
    showToast('Estudiante agregado', 'success');
  }

  function editStudent(id) {
    var student = STATE.students.find(function (x) { return x.id === id; });
    if (!student) return;
    openModal('Editar Estudiante',
      '<div class="form-group"><label class="form-label">Cédula</label><input class="form-input" id="m-ced" value="' + student.cedula + '"></div>' +
      '<div class="form-group"><label class="form-label">Apellidos</label><input class="form-input" id="m-ape" value="' + student.apellidos + '"></div>' +
      '<div class="form-group"><label class="form-label">Nombres</label><input class="form-input" id="m-nom" value="' + student.nombres + '"></div>',
      [
        { label: 'Cancelar', cls: 'btn-ghost', action: 'close' },
        { label: 'Guardar', cls: 'btn-success', action: function () {
          student.cedula = document.getElementById('m-ced').value;
          student.apellidos = document.getElementById('m-ape').value.toUpperCase();
          student.nombres = document.getElementById('m-nom').value.toUpperCase();
          persistActiveConfigData();
          save(); renderEstudiantes(); closeModal();
          showToast('Estudiante actualizado', 'success');
        } }
      ]);
  }

  function confirmDelete(id) {
    var student = STATE.students.find(function (x) { return x.id === id; });
    openModal('Eliminar Estudiante',
      '<p style="color:var(--gray-600);font-size:.85rem">¿Desea eliminar a <strong>' + student.apellidos + ' ' + student.nombres + '</strong>? Se eliminarán sus calificaciones.</p>',
      [
        { label: 'Cancelar', cls: 'btn-ghost', action: 'close' },
        { label: 'Eliminar', cls: 'btn-danger', action: function () {
          STATE.students = STATE.students.filter(function (x) { return x.id !== id; });
          STATE.grades = STATE.grades.filter(function (g) { return g.studentId !== id; });
          persistActiveConfigData();
          save(); renderEstudiantes(); closeModal();
          showToast('Estudiante eliminado', 'success');
        } }
      ]);
  }

  function renderCalificaciones() {
    var config = STATE.courseConfig;
    document.getElementById('cal-sub').textContent = (config.asignatura || 'Sin Asignatura') + ' — ' + config.aporte + ' — PAO ' + config.pao;
    document.getElementById('cal-legend').innerHTML = COMPONENTS.map(function (comp) {
      return '<div class="comp-legend"><div class="comp-dot" style="background:' + COMPONENT_COLORS[comp] + '"></div>' + comp + ' (' + COMPONENT_WEIGHTS[comp] + ' pts)</div>';
    }).join('') + '<div class="comp-legend" style="margin-left:12px"><div style="width:11px;height:11px;border-radius:3px;background:#f0fdf4;border:1px solid #bbf7d0"></div> Con nota</div><div class="comp-legend"><div style="width:11px;height:11px;border-radius:3px;background:var(--gray-100);border:1px solid var(--gray-200)"></div> Sin nota</div>';
    updateReportAvailability();
    renderGradeTable();
  }

  function isGradesComplete() {
    var totalExpected = STATE.students.length * STATE.activities.length;
    if (totalExpected === 0) return false;
    var totalEntered = 0;
    STATE.students.forEach(function (student) {
      STATE.activities.forEach(function (act) {
        var grade = getGrade(student.id, act.id);
        if (grade != null) totalEntered++;
      });
    });
    return totalEntered === totalExpected;
  }

  function updateReportAvailability() {
    var reportNav = document.querySelector('.nav-item[data-page="reporte"]');
    if (!reportNav) return;
    var enabled = isGradesComplete();
    reportNav.style.opacity = enabled ? '1' : '0.55';
    reportNav.style.pointerEvents = 'auto';
    reportNav.dataset.locked = enabled ? '0' : '1';
  }

  function renderGradeTable() {
    syncActivitiesWithRAAU();
    var query = (document.getElementById('cal-search') ? document.getElementById('cal-search').value : '').toLowerCase();
    var filtered = STATE.students.filter(function (s) {
      return (s.apellidos + ' ' + s.nombres + ' ' + s.cedula).toLowerCase().indexOf(query) !== -1;
    });
    var activities = STATE.activities;
    if (activities.length === 0) {
      document.getElementById('cal-progress-label').textContent = '0/0 notas';
      document.getElementById('cal-progress-fill').style.width = '0%';
      document.getElementById('cal-progress-pct').textContent = '0%';
      document.getElementById('cal-table-wrap').innerHTML =
        '<div style="padding:18px;color:var(--gray-600);font-size:.85rem">No hay actividades configuradas todavía. Vaya a Configuración y registre actividades por componente para habilitar la tabla completa de calificaciones.</div>';
      updateReportAvailability();
      return;
    }
    var totalExpected = STATE.students.length * activities.length;
    var totalEntered = 0;
    STATE.students.forEach(function (student) {
      activities.forEach(function (act) {
        var grade = getGrade(student.id, act.id);
        if (grade != null) totalEntered++;
      });
    });
    var progressPct = pct(totalEntered, totalExpected);
    document.getElementById('cal-progress-label').textContent = totalEntered + '/' + totalExpected + ' notas';
    document.getElementById('cal-progress-fill').style.width = Math.min(progressPct, 100) + '%';
    document.getElementById('cal-progress-fill').style.background = progressPct < 40 ? 'var(--red)' : (progressPct < 80 ? 'var(--amber)' : 'var(--green)');
    document.getElementById('cal-progress-pct').textContent = Math.min(progressPct, 100) + '%';

    var grouped = COMPONENTS.map(function (comp) {
      return { comp: comp, acts: activities.filter(function (a) { return a.component === comp; }) };
    });

    var html = '<table class="grade-table results-table"><thead>';
    html += '<tr><th colspan="4" style="text-align:left">Resultado de aprendizaje de la carrera alcanzado</th>';
    grouped.forEach(function (grp) {
      if (grp.acts.length === 0) html += '<th style="font-size:.62rem">—</th>';
      grp.acts.forEach(function (act) {
        var linkedRaau = STATE.raauEntries.find(function (r) { return r.id === act.raauId; });
        var rac = CAREER_RACS.find(function (r) { return r.id === (linkedRaau ? linkedRaau.racId : act.racId); });
        html += '<th style="font-size:.62rem">' + (rac ? rac.code : 'RAC') + '</th>';
      });
    });
    html += '<th rowspan="4">SUMA</th><th rowspan="4">NOTA<br>FINAL</th></tr>';

    html += '<tr><th colspan="4" style="text-align:left">Resultado de aprendizaje de la asignatura alcanzado</th>';
    grouped.forEach(function (grp) {
      if (grp.acts.length === 0) html += '<th style="font-size:.62rem">—</th>';
      grp.acts.forEach(function (act) {
        var raau = STATE.raauEntries.find(function (r) { return r.id === act.raauId; });
        html += '<th style="font-size:.62rem">' + (raau ? raau.code : 'RAAU') + '</th>';
      });
    });
    html += '</tr>';

    html += '<tr><th rowspan="2" style="min-width:35px">No.</th><th rowspan="2">Cédula</th><th rowspan="2">Apellidos</th><th rowspan="2">Nombres</th>';
    grouped.forEach(function (grp) {
      var bg = grp.comp === 'ACD' ? '#8bc34a' : grp.comp === 'APEX' ? '#7cb342' : '#689f38';
      var colSpan = Math.max(grp.acts.length, 1);
      html += '<th colspan="' + colSpan + '" style="background:' + bg + ';color:#111">' + grp.comp + ' (' + COMPONENT_WEIGHTS[grp.comp] + ')</th>';
    });
    html += '</tr><tr>';
    grouped.forEach(function (grp) {
      if (grp.acts.length === 0) html += '<th style="font-size:.62rem;color:var(--gray-400)">Sin actividades</th>';
      else grp.acts.forEach(function (act) { html += '<th style="font-size:.62rem">' + act.name + '<br><span style="font-size:.6rem;color:var(--gray-400)">/' + act.maxScore + '</span></th>'; });
    });
    html += '</tr></thead><tbody>';

    filtered.forEach(function (student, idx) {
      var tot = studentTotal(student.id);
      var passed = tot >= 7;
      html += '<tr><td>' + (idx + 1) + '</td><td style="font-family:var(--mono)">' + student.cedula + '</td><td class="cell-name">' + student.apellidos + '</td><td class="cell-name">' + student.nombres + '</td>';

      grouped.forEach(function (grp) {
        if (grp.acts.length === 0) { html += '<td style="text-align:center;color:var(--gray-400)">—</td>'; return; }
        grp.acts.forEach(function (act) {
          var gradeVal = getGrade(student.id, act.id);
          var hasValue = gradeVal != null;
          var isOver = hasValue && gradeVal > act.maxScore;
          html += '<td><input class="grade-input ' + (hasValue ? 'has-val' : '') + (isOver ? ' over' : '') + '" type="number" step="0.01" min="0" max="' + act.maxScore + '" data-sid="' + student.id + '" data-aid="' + act.id + '" data-max="' + act.maxScore + '" value="' + (hasValue ? gradeVal : '') + '" oninput="onGradeInput(this)" onchange="onGradeChange(this)" placeholder="—"></td>';
        });
      });

      html += '<td><input class="grade-readonly" type="text" readonly value="' + fmt(tot) + '" title="Suma total"></td>';
      html += '<td><input class="grade-total-input ' + (passed ? 'pass' : 'fail') + '" type="text" readonly value="' + fmt(tot) + '" title="Nota Final"></td>';
      html += '</tr>';
    });
    html += '</tbody></table>';
    document.getElementById('cal-table-wrap').innerHTML = html;
    updateReportAvailability();
  }

  function onGradeInput(el) {
    var maxVal = parseFloat(el.dataset.max);
    var currentVal = parseFloat(el.value);
    el.classList.remove('has-val', 'over');
    if (!isNaN(currentVal)) el.classList.add(currentVal > maxVal ? 'over' : 'has-val');
  }

  function onGradeChange(el) {
    var sid = el.dataset.sid;
    var aid = el.dataset.aid;
    var maxVal = parseFloat(el.dataset.max);
    var raw = parseFloat(el.value);
    var score = null;
    if (!isNaN(raw)) score = Math.round(Math.max(0, Math.min(maxVal, raw)) * 100) / 100;
    setGrade(sid, aid, score);
    if (score != null) el.value = score;
    if (score != null) {
      el.classList.remove('has-val', 'over');
      el.classList.add(score > maxVal ? 'over' : 'has-val');
    } else el.classList.remove('has-val', 'over');
    renderGradeTable();
  }

  function calSave() {
    persistActiveConfigData();
    save();
    addRecentActivity('Calificaciones guardadas manualmente', 'grade');
    var btn = document.getElementById('cal-save-btn');
    if (btn) {
      btn.style.background = 'var(--green)';
      btn.innerHTML = '✓ Guardado';
      setTimeout(function () { btn.style.background = ''; btn.innerHTML = '💾 Guardar'; }, 2000);
    }
    showToast('Calificaciones guardadas', 'success');
  }

  function renderReporte() {
    syncActivitiesWithRAAU();
    var config = STATE.courseConfig;
    var activities = STATE.activities;
    var students = STATE.students;
    var allTotals = students.map(function (s) { return studentTotal(s.id); });
    var classAverage = allTotals.length > 0 ? allTotals.reduce(function (a, b) { return a + b; }, 0) / allTotals.length : 0;
    var maxNote = allTotals.length > 0 ? Math.max.apply(null, allTotals) : 0;
    var minNote = allTotals.filter(function (t) { return t > 0; }).length > 0 ? Math.min.apply(null, allTotals.filter(function (t) { return t > 0; })) : 0;
    var approvedCount = allTotals.filter(function (t) { return t >= 7; }).length;
    document.getElementById('rep-stats').innerHTML = [
      { label: 'Promedio', val: classAverage.toFixed(2), color: 'var(--navy)' },
      { label: 'Aprobados', val: approvedCount + '/' + students.length, color: 'var(--green)' },
      { label: 'Nota Máx.', val: maxNote.toFixed(2), color: 'var(--purple)' },
      { label: 'Nota Mín.', val: minNote.toFixed(2), color: 'var(--amber)' }
    ].map(function (s) {
      return '<div class="stat-card"><div class="stat-row"><div><div class="stat-label">' + s.label + '</div><div class="stat-val" style="color:' + s.color + '">' + s.val + '</div></div></div></div>';
    }).join('');

    var distribution = [
      { label: '9-10', min: 9, max: 10.01, color: 'var(--green)' },
      { label: '8-9', min: 8, max: 9, color: 'var(--blue)' },
      { label: '7-8', min: 7, max: 8, color: 'var(--amber)' },
      { label: '6-7', min: 6, max: 7, color: '#f97316' },
      { label: '<6', min: 0, max: 6, color: 'var(--red)' }
    ].map(function (d) {
      return { label: d.label, min: d.min, max: d.max, color: d.color, count: allTotals.filter(function (t) { return t >= d.min && t < d.max; }).length };
    });
    var maxDist = Math.max.apply(null, distribution.map(function (d) { return d.count; }).concat([1]));
    document.getElementById('rep-dist').innerHTML = distribution.map(function (d) {
      return '<div class="dist-bar-wrap"><span class="dist-count" style="color:' + d.color + '">' + d.count + '</span><div class="dist-bar" style="height:' + (d.count / maxDist * 100) + '%;background:' + d.color + '"></div><span class="dist-label">' + d.label + '</span></div>';
    }).join('');

    var grouped = COMPONENTS.map(function (comp) {
      return { comp: comp, acts: activities.filter(function (a) { return a.component === comp; }) };
    });
    var reportHtml = '<div class="report-header"><div class="report-institution">ESCUELA SUPERIOR POLITÉCNICA DE CHIMBORAZO</div><div class="report-subtitle">Sede Orellana — Evaluación formativa y sumativa para alcanzar los resultados de aprendizaje</div></div>' +
      '<div class="report-info-grid">' +
      '<div class="report-info-cell"><span class="report-info-label">Período académico: </span><span class="report-info-val">' + config.periodoAcademico + '</span></div>' +
      '<div class="report-info-cell"><span class="report-info-label">Asignatura: </span><span class="report-info-val">' + config.asignatura + '</span></div>' +
      '<div class="report-info-cell"><span class="report-info-label">Facultad: </span><span class="report-info-val">' + config.facultad + '</span></div>' +
      '<div class="report-info-cell"><span class="report-info-label">PAO: </span><span class="report-info-val">' + (config.pao || '—') + '</span></div>' +
      '<div class="report-info-cell"><span class="report-info-label">Carrera: </span><span class="report-info-val">' + config.carrera + '</span></div>' +
      '<div class="report-info-cell"><span class="report-info-label">Aporte: </span><span class="report-info-val">' + config.aporte + '</span></div>' +
      '<div class="report-info-cell"><span class="report-info-label">Docente: </span><span class="report-info-val">' + (config.docente || '—') + '</span></div>' +
      '<div class="report-info-cell"><span class="report-info-label">Total estudiantes: </span><span class="report-info-val">' + students.length + '</span></div>' +
      '</div>';
    reportHtml += '<div class="report-table-wrap"><table class="report-table results-table"><thead><tr>' +
      '<th colspan="4" style="text-align:left">Resultado de aprendizaje de la carrera alcanzado</th>';
    grouped.forEach(function (grp) {
      grp.acts.forEach(function (act) {
        var linkedRaau = STATE.raauEntries.find(function (r) { return r.id === act.raauId; });
        var rac = CAREER_RACS.find(function (r) { return r.id === (linkedRaau ? linkedRaau.racId : act.racId); });
        reportHtml += '<th style="font-size:.62rem">' + (rac ? rac.code : 'RAC') + '</th>';
      });
    });
    reportHtml += '<th rowspan="4">Sumatoria</th><th rowspan="4">Nota final</th></tr>';
    reportHtml += '<tr><th colspan="4" style="text-align:left">Resultado de aprendizaje de la asignatura alcanzado</th>';
    grouped.forEach(function (grp) {
      grp.acts.forEach(function (act) {
        var raauEntry = STATE.raauEntries.find(function (r) { return r.id === act.raauId; });
        reportHtml += '<th style="font-size:.62rem">' + (raauEntry ? raauEntry.code : 'RAAU') + '</th>';
      });
    });
    reportHtml += '</tr>';
    reportHtml += '<tr><th rowspan="2" style="min-width:35px">No.</th><th rowspan="2">Cédula</th><th rowspan="2">Apellidos</th><th rowspan="2">Nombres</th>';
    grouped.forEach(function (grp) {
      var bg = grp.comp === 'ACD' ? '#8bc34a' : grp.comp === 'APEX' ? '#7cb342' : '#689f38';
      reportHtml += '<th colspan="' + grp.acts.length + '" style="background:' + bg + ';color:#111">' + grp.comp + ' (' + COMPONENT_WEIGHTS[grp.comp] + ')</th>';
    });
    reportHtml += '</tr>';
    reportHtml += '<tr>';
    grouped.forEach(function (grp) {
      grp.acts.forEach(function (act) {
        reportHtml += '<th style="font-size:.62rem">' + act.name + '</th>';
      });
    });
    reportHtml += '</tr></thead><tbody>';
    students.forEach(function (s, idx) {
      var tot = studentTotal(s.id);
      reportHtml += '<tr><td>' + (idx + 1) + '</td><td style="font-family:var(--mono)">' + s.cedula + '</td><td class="cell-name">' + s.apellidos + '</td><td class="cell-name">' + s.nombres + '</td>';
      grouped.forEach(function (grp) {
        grp.acts.forEach(function (act) {
          var grade = getGrade(s.id, act.id);
          reportHtml += '<td>' + (grade != null ? fmt(grade) : '—') + '</td>';
        });
      });
      reportHtml += '<td class="cell-grade">' + fmt(tot) + '</td><td class="cell-grade cell-nota ' + (tot >= 7 ? 'pass' : 'fail') + '">' + fmt(tot) + '</td></tr>';
    });
    reportHtml += '</tbody></table></div>';
    document.getElementById('rep-printable').innerHTML = reportHtml;
  }

  function renderCoordinacion(section) {
    var target = document.getElementById('coord-content');
    if (!target) return;
    var titleEl = document.querySelector('#page-coordinacion .page-title');
    var subEl = document.querySelector('#page-coordinacion .page-sub');
    var labels = {
      overview: ['Panel de Coordinación', 'Monitoreo de aplicación RAC/RAAU y mapeo curricular'],
      asignaturas: ['Asignaturas', 'Asignación docente y seguimiento por asignatura'],
      rac: ['RAC', 'Gestión de resultados de aprendizaje de carrera'],
      raau: ['RAAU', 'Gestión de resultados de aprendizaje de asignatura'],
      docentes: ['Docentes por Asignatura', 'Monitoreo y matriz docente/asignaturas']
    };
    var selected = labels[section || 'overview'] || labels.overview;
    if (titleEl) titleEl.textContent = selected[0];
    if (subEl) subEl.textContent = selected[1];
    var totalConfigs = STATE.savedConfigs.length;
    var totalStudents = Object.keys(STATE.studentsByConfig || {}).reduce(function (sum, key) { return sum + (STATE.studentsByConfig[key] || []).length; }, 0);
    var completion = STATE.savedConfigs.map(function (cfg) {
      var sid = cfg.id;
      var students = (STATE.studentsByConfig[sid] || []);
      var grades = (STATE.gradesByConfig[sid] || []);
      var acts = (cfg.activities || []);
      var expected = students.length * acts.length;
      var entered = grades.filter(function (g) { return g.score != null; }).length;
      return { cfg: cfg, pct: expected > 0 ? Math.round(entered / expected * 100) : 0 };
    });
    var avgCompletion = completion.length ? Math.round(completion.reduce(function (s, c) { return s + c.pct; }, 0) / completion.length) : 0;
    var docentes = {};
    completion.forEach(function (item) {
      var doc = (item.cfg.courseConfig && item.cfg.courseConfig.docente) || 'Sin docente';
      if (!docentes[doc]) docentes[doc] = { count: 0, total: 0 };
      docentes[doc].count++;
      docentes[doc].total += item.pct;
    });
    var docenteRows = Object.keys(docentes).map(function (doc) {
      var d = docentes[doc];
      return '<tr><td>' + doc + '</td><td>' + d.count + '</td><td>' + Math.round(d.total / d.count) + '%</td></tr>';
    }).join('');
    var cfgRows = completion.map(function (item) {
      var cfg = item.cfg.courseConfig || {};
      return '<tr><td>' + (cfg.asignatura || '—') + '</td><td>' + (cfg.docente || '—') + '</td><td>' + (cfg.pao || '—') + '</td><td>' + item.pct + '%</td><td><button class="btn btn-edit btn-sm" onclick="coordOpenConfig(\'' + item.cfg.id + '\')">Gestionar</button></td></tr>';
    }).join('');
    var assignmentRows = (STATE.teacherAssignments || []).map(function (a) {
      return '<tr><td>' + a.docenteNombre + '<div style="font-size:.68rem;color:var(--gray-400)">' + a.docenteEmail + '</div></td><td>' + a.carrera + '</td><td>' + a.pao + '</td><td>' + a.asignatura + '</td><td>' + ((a.racs || []).length) + ' / ' + ((a.raau || []).length) + '</td></tr>';
    }).join('');
    var careerOptions = Object.keys(DB_ESPOCH).map(function (c) { return '<option value="' + c + '">' + c + '</option>'; }).join('');
    var docenteOptions = USERS.filter(function (u) { return u.role === 'docente'; }).map(function (u) { return '<option value="' + u.email + '">' + u.name + ' (' + u.email + ')</option>'; }).join('');
    section = section || 'overview';
    var showOverview = section === 'overview';
    var showAsignaturas = section === 'asignaturas';
    var showDocentes = section === 'docentes';
    var showRAC = section === 'rac';
    var showRAAU = section === 'raau';
    target.innerHTML =
      '<div class="coord-layout">' +
      '<div class="stat-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:0"><div class="stat-card"><div class="stat-label">Configuraciones activas</div><div class="stat-val" style="color:var(--navy)">' + totalConfigs + '</div><div class="stat-sub">Histórico guardado</div></div><div class="stat-card"><div class="stat-label">Estudiantes monitoreados</div><div class="stat-val" style="color:var(--green)">' + totalStudents + '</div><div class="stat-sub">Suma de todas las configuraciones</div></div><div class="stat-card"><div class="stat-label">Avance promedio</div><div class="stat-val" style="color:var(--amber)">' + avgCompletion + '%</div><div class="stat-sub">Carga global de notas</div></div></div>' +
      ((showOverview || showDocentes) ? '<div class="coord-chart-grid"><div class="card"><div class="card-header"><div class="card-title">Avance por docente</div></div><div class="card-body"><canvas id="coord-chart-docentes" height="180"></canvas></div></div><div class="card"><div class="card-header"><div class="card-title">Estado de configuraciones</div></div><div class="card-body"><canvas id="coord-chart-configs" height="180"></canvas></div></div></div>' : '') +
      (showDocentes ? '<div class="card" style="margin-bottom:16px"><div class="card-header"><div class="card-title">Monitoreo docente</div></div><div class="card-body"><table class="data"><thead><tr><th>Docente</th><th>Asignaturas</th><th>Avance</th></tr></thead><tbody>' + (docenteRows || '<tr><td colspan="3">Sin datos</td></tr>') + '</tbody></table></div></div>' : '') +
      (showAsignaturas ? '<div class="card" style="margin-bottom:16px"><div class="card-header"><div class="card-title">Control por asignatura</div><button class="btn btn-primary btn-sm" onclick="coordCreateConfig()">Nueva configuración</button></div><div class="card-body"><table class="data"><thead><tr><th>Asignatura</th><th>Docente</th><th>PAO</th><th>Progreso</th><th></th></tr></thead><tbody>' + (cfgRows || '<tr><td colspan="5">Sin configuraciones guardadas</td></tr>') + '</tbody></table></div></div>' : '') +
      (showAsignaturas ? '<div class="card"><div class="card-header"><div class="card-title">Asignación Docente + Asignaturas</div></div><div class="card-body"><div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px"><button class="btn btn-primary btn-sm" onclick="coordAddDocente()">+ Nuevo Docente</button><button class="btn btn-edit btn-sm" onclick="coordAddAsignatura()">+ Nueva Asignatura</button></div><div class="form-grid"><div class="form-group"><label class="form-label">Docente</label><select class="form-select" id="coord-doc-email"><option value=\"\">Seleccione docente</option>' + docenteOptions + '</select></div><div class="form-group"><label class="form-label">Carrera</label><select class="form-select" id="coord-career-assignment" onchange="coordLoadSubjectsAssignment()"><option value=\"\">Seleccione carrera</option>' + careerOptions + '</select></div></div><div class="form-grid"><div class="form-group"><label class="form-label">PAO</label><select class="form-select" id="coord-pao-assignment"><option value=\"\">Seleccione PAO</option></select></div><div class="form-group"><label class="form-label">Asignatura</label><select class="form-select" id="coord-subject-assignment"><option value=\"\">Seleccione asignatura</option></select></div></div><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-primary btn-sm" onclick="coordCreateAssignment()">Asignar docente</button><button class="btn btn-edit btn-sm" onclick="coordManualRAC()">Agregar RAC manual</button><button class="btn btn-edit btn-sm" onclick="coordManualRAAU()">Agregar RAAU manual</button><button class="btn btn-ghost btn-sm" onclick="coordTriggerExcel()">Importar Excel RAC/RAAU</button><input type="file" id="coord-excel-input" accept=\".xlsx,.xls,.csv\" style=\"display:none\" onchange=\"coordImportExcel(this.files)\"></div><table class="data" style="margin-top:12px"><thead><tr><th>Docente</th><th>Carrera</th><th>PAO</th><th>Asignatura</th><th>RAC/RAAU</th></tr></thead><tbody>' + (assignmentRows || '<tr><td colspan=\"5\">Sin asignaciones creadas</td></tr>') + '</tbody></table><div id="coord-docentes-list" style="margin-top:10px"></div></div></div>' : '') +
      (showRAC ? '<div class="card"><div class="card-header"><div class="card-title">Gestión de RAC</div></div><div class="card-body"><div class="form-grid"><div class="form-group"><label class="form-label">Carrera</label><select class="form-select" id="coord-career-rac" onchange="coordRenderRACList()"><option value=\"\">Seleccione carrera</option>' + careerOptions + '</select></div><div class="form-group" style="display:flex;align-items:flex-end"><button class="btn btn-edit btn-sm" onclick="coordManualRAC()">Agregar RAC manual</button></div></div><div id="coord-rac-list" style="margin-top:10px;font-size:.8rem;color:var(--gray-600)">Seleccione carrera para listar RAC.</div></div></div>' : '') +
      (showRAAU ? '<div class="card"><div class="card-header"><div class="card-title">Gestión global RAAU por asignatura</div></div><div class="card-body"><div class="form-grid"><div class="form-group"><label class="form-label">Carrera</label><select class="form-select" id="coord-career" onchange="coordLoadSubjects()"><option value="">Seleccione carrera</option>' + careerOptions + '</select></div><div class="form-group"><label class="form-label">Asignatura</label><select class="form-select" id="coord-subject" onchange="coordRenderRAAUList()"><option value=\"\">Seleccione asignatura</option></select></div></div><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn btn-edit btn-sm" onclick="coordEditMapping()">Editar mapeo RAC/RAAU</button><button class="btn btn-edit btn-sm" onclick="coordManualRAAU()">Agregar RAAU manual</button><button class="btn btn-ghost btn-sm" onclick="coordTriggerExcel()">Importar Excel RAC/RAAU</button><input type="file" id="coord-excel-input" accept=\".xlsx,.xls,.csv\" style=\"display:none\" onchange=\"coordImportExcel(this.files)\"></div><div id="coord-raau-list" style="margin-top:10px"></div></div></div>' : '') +
      (showDocentes ? '<div class="card"><div class="card-header"><div class="card-title">Docentes por Asignatura (Matriz)</div></div><div class="card-body"><table class="data"><thead><tr><th>Docente</th><th>Asignaturas asignadas</th><th>Total</th></tr></thead><tbody>' + coordDocenteMatrixRows() + '</tbody></table></div></div>' : '') +
      '</div>';
    if (showOverview || showDocentes) renderCoordCharts(docentes, completion);
    if (showRAC) coordRenderRACList();
    if (showRAAU) coordRenderRAAUList();
    if (showAsignaturas) coordRenderDocentesList();
  }

  function coordDocenteMatrixRows() {
    var grouped = {};
    (STATE.teacherAssignments || []).forEach(function (a) {
      if (!grouped[a.docenteNombre]) grouped[a.docenteNombre] = [];
      grouped[a.docenteNombre].push(a.asignatura + ' (PAO ' + a.pao + ')');
    });
    var names = Object.keys(grouped);
    if (names.length === 0) return '<tr><td colspan="3">Sin asignaciones</td></tr>';
    return names.map(function (name) {
      return '<tr><td>' + name + '</td><td>' + grouped[name].join(', ') + '</td><td>' + grouped[name].length + '</td></tr>';
    }).join('');
  }

  function renderCoordCharts(docentesMap, completion) {
    if (typeof window.Chart === 'undefined') return;
    var docentesLabels = Object.keys(docentesMap);
    var docentesValues = docentesLabels.map(function (k) {
      var d = docentesMap[k];
      return Math.round(d.total / d.count);
    });
    var ctxDoc = document.getElementById('coord-chart-docentes');
    if (ctxDoc) {
      if (chartCoordDocentes) chartCoordDocentes.destroy();
      chartCoordDocentes = new window.Chart(ctxDoc, {
        type: 'bar',
        data: { labels: docentesLabels.length ? docentesLabels : ['Sin datos'], datasets: [{ label: 'Avance %', data: docentesLabels.length ? docentesValues : [0], backgroundColor: '#3b82f6', borderRadius: 8 }] },
        options: { plugins: { legend: { display: false } }, scales: { y: { min: 0, max: 100 } } }
      });
    }
    var estados = { Completas: 0, 'En progreso': 0, Iniciales: 0 };
    completion.forEach(function (item) {
      if (item.pct >= 100) estados.Completas++;
      else if (item.pct > 0) estados['En progreso']++;
      else estados.Iniciales++;
    });
    var ctxCfg = document.getElementById('coord-chart-configs');
    if (ctxCfg) {
      if (chartCoordConfigs) chartCoordConfigs.destroy();
      chartCoordConfigs = new window.Chart(ctxCfg, {
        type: 'doughnut',
        data: { labels: Object.keys(estados), datasets: [{ data: Object.keys(estados).map(function (k) { return estados[k]; }), backgroundColor: ['#22c55e', '#f59e0b', '#9ca3af'] }] },
        options: { plugins: { legend: { position: 'bottom' } }, cutout: '62%' }
      });
    }
  }

  function coordLoadSubjects() {
    var career = document.getElementById('coord-career').value;
    var subject = document.getElementById('coord-subject');
    if (!subject) return;
    subject.innerHTML = '<option value="">Seleccione asignatura</option>';
    if (!career || !DB_ESPOCH[career]) return;
    Object.keys(DB_ESPOCH[career].malla || {}).forEach(function (paoKey) {
      (DB_ESPOCH[career].malla[paoKey] || []).forEach(function (mat) {
        subject.innerHTML += '<option value="' + mat + '">' + paoKey + ' · ' + mat + '</option>';
      });
    });
  }

  function coordLoadSubjectsAssignment() {
    var career = document.getElementById('coord-career-assignment').value;
    var paoSelect = document.getElementById('coord-pao-assignment');
    var subject = document.getElementById('coord-subject-assignment');
    if (!paoSelect || !subject) return;
    paoSelect.innerHTML = '<option value="">Seleccione PAO</option>';
    subject.innerHTML = '<option value="">Seleccione asignatura</option>';
    if (!career || !DB_ESPOCH[career]) return;
    Object.keys(DB_ESPOCH[career].malla || {}).forEach(function (paoKey) {
      paoSelect.innerHTML += '<option value="' + paoKey + '">' + paoKey + '</option>';
    });
    paoSelect.onchange = function () {
      subject.innerHTML = '<option value="">Seleccione asignatura</option>';
      (DB_ESPOCH[career].malla[paoSelect.value] || []).forEach(function (mat) {
        subject.innerHTML += '<option value="' + mat + '">' + mat + '</option>';
      });
    };
  }

  function coordCreateAssignment() {
    var docEmail = document.getElementById('coord-doc-email').value;
    var career = document.getElementById('coord-career-assignment').value;
    var pao = document.getElementById('coord-pao-assignment').value;
    var subject = document.getElementById('coord-subject-assignment').value;
    if (!docEmail || !career || !pao || !subject) {
      showToast('Complete docente, carrera, PAO y asignatura.', 'error');
      return;
    }
    var docente = USERS.find(function (u) { return u.email === docEmail; });
    var mapped = (DB_ESPOCH[career].asignaturas[subject] && DB_ESPOCH[career].asignaturas[subject].raau) || [];
    var racIds = [];
    mapped.forEach(function (m) { if (racIds.indexOf(m.racId) === -1) racIds.push(m.racId); });
    STATE.teacherAssignments.unshift({
      id: 'asg_' + Date.now(),
      docenteEmail: docEmail,
      docenteNombre: docente ? docente.name : docEmail,
      carrera: career,
      pao: pao,
      asignatura: subject,
      racs: racIds.slice(),
      raau: JSON.parse(JSON.stringify(mapped))
    });
    var snapshot = {
      id: 'cfg_' + Date.now(),
      savedAt: new Date().toLocaleString(),
      ownerEmail: docEmail,
      courseConfig: { periodoAcademico: '', facultad: 'SEDE ORELLANA', carrera: career, asignatura: subject, docente: docente ? docente.name : docEmail, pao: pao, aporte: 'FIN DE CICLO' },
      selectedRACIds: racIds.slice(),
      raauEntries: mapped.map(function (r, i) { return { id: 'raau_auto_' + i + '_' + Date.now(), code: r.code, description: r.description, racId: r.racId }; }),
      activities: []
    };
    STATE.savedConfigs.unshift(snapshot);
    save();
    renderCoordinacion();
    showToast('Docente asignado con configuración propia.', 'success');
  }

  function coordAddDocente() {
    openModal('Nuevo Docente', '<div class="form-grid"><div class="form-group"><label class="form-label">Nombre</label><input class="form-input" id="coord-new-doc-name" placeholder="Ej: Prof. Luis Ramos"></div><div class="form-group"><label class="form-label">Correo</label><input class="form-input" id="coord-new-doc-email" placeholder="lramos@uni.edu"></div></div><div class="form-group"><label class="form-label">Contraseña</label><input class="form-input" id="coord-new-doc-pass" value="1234"></div>',
      [{ label: 'Cancelar', cls: 'btn-ghost', action: 'close' }, { label: 'Crear', cls: 'btn-success', action: function () {
        var name = document.getElementById('coord-new-doc-name').value.trim();
        var email = document.getElementById('coord-new-doc-email').value.trim().toLowerCase();
        var pass = document.getElementById('coord-new-doc-pass').value.trim();
        if (!name || !email || !pass) return;
        if (USERS.find(function (u) { return u.email === email; })) { showToast('Ya existe un usuario con ese correo.', 'error'); return; }
        USERS.push({ email: email, password: pass, role: 'docente', name: name });
        closeModal();
        renderCoordinacion('asignaturas');
        showToast('Docente creado correctamente.', 'success');
      }}]);
  }

  function coordAddAsignatura() {
    var careerOptions = Object.keys(DB_ESPOCH).map(function (c) { return '<option value="' + c + '">' + c + '</option>'; }).join('');
    openModal('Nueva Asignatura', '<div class="form-grid"><div class="form-group"><label class="form-label">Carrera</label><select class="form-select" id="coord-new-sub-career"><option value="">Seleccione carrera</option>' + careerOptions + '</select></div><div class="form-group"><label class="form-label">PAO</label><input class="form-input" id="coord-new-sub-pao" placeholder="Ej: 5 o NIVELACIÓN"></div></div><div class="form-group"><label class="form-label">Nombre Asignatura</label><input class="form-input" id="coord-new-sub-name" placeholder="Ej: ARQUITECTURA DE SOFTWARE"></div>',
      [{ label: 'Cancelar', cls: 'btn-ghost', action: 'close' }, { label: 'Crear', cls: 'btn-success', action: function () {
        var career = document.getElementById('coord-new-sub-career').value;
        var pao = document.getElementById('coord-new-sub-pao').value.trim();
        var name = document.getElementById('coord-new-sub-name').value.trim();
        if (!career || !pao || !name) return;
        if (!DB_ESPOCH[career].malla[pao]) DB_ESPOCH[career].malla[pao] = [];
        if (DB_ESPOCH[career].malla[pao].indexOf(name) === -1) DB_ESPOCH[career].malla[pao].push(name);
        if (!DB_ESPOCH[career].asignaturas[name]) DB_ESPOCH[career].asignaturas[name] = { raau: [] };
        closeModal();
        renderCoordinacion('asignaturas');
        showToast('Asignatura creada en la malla.', 'success');
      }}]);
  }

  function coordRenderDocentesList() {
    var target = document.getElementById('coord-docentes-list');
    if (!target) return;
    var docentes = USERS.filter(function (u) { return u.role === 'docente'; });
    target.innerHTML = '<div style="font-size:.78rem;font-weight:700;color:var(--navy);margin:8px 0">Docentes registrados</div>' +
      (docentes.map(function (d) {
        return '<div class="item-row"><div style="font-size:.8rem;flex:1"><strong>' + d.name + '</strong><div style="font-size:.7rem;color:var(--gray-500)">' + d.email + '</div></div></div>';
      }).join('') || '<div style="font-size:.78rem;color:var(--gray-500)">Sin docentes registrados.</div>');
  }

  function coordManualRAC() {
    var careerEl = document.getElementById('coord-career-assignment') || document.getElementById('coord-career-rac');
    var career = careerEl ? careerEl.value : '';
    if (!career) { showToast('Seleccione carrera.', 'error'); return; }
    openModal('Agregar RAC manual', '<div class="form-grid"><div class="form-group"><label class="form-label">Código</label><input class="form-input" id="coord-rac-code" placeholder="RAC6"></div><div class="form-group"><label class="form-label">Descripción</label><input class="form-input" id="coord-rac-desc" placeholder="Descripción del RAC"></div></div>',
      [{ label: 'Cancelar', cls: 'btn-ghost', action: 'close' }, { label: 'Agregar', cls: 'btn-success', action: function () {
        var code = document.getElementById('coord-rac-code').value.trim();
        var desc = document.getElementById('coord-rac-desc').value.trim();
        if (!code || !desc) return;
        DB_ESPOCH[career].racs.push({ id: 'rac_manual_' + Date.now(), code: code, description: desc });
        coordRenderRACList();
        closeModal(); showToast('RAC agregado.', 'success');
      }}]);
  }

  function coordRenderRACList() {
    var careerEl = document.getElementById('coord-career-rac');
    var target = document.getElementById('coord-rac-list');
    if (!careerEl || !target) return;
    var career = careerEl.value;
    if (!career || !DB_ESPOCH[career]) {
      target.innerHTML = 'Seleccione carrera para listar RAC.';
      return;
    }
    var racs = DB_ESPOCH[career].racs || [];
    if (racs.length === 0) {
      target.innerHTML = 'No existen RAC para esta carrera.';
      return;
    }
    target.innerHTML = racs.map(function (r) {
      return '<div class="item-row"><div style="min-width:70px;font-weight:700;color:var(--navy)">' + r.code + '</div><div style="font-size:.8rem;color:var(--gray-600);flex:1">' + r.description + '</div><button class="btn btn-sm btn-ghost" onclick="coordEditRAC(\'' + career + '\',\'' + r.id + '\')">Editar</button><button class="btn btn-sm btn-danger" onclick="coordDeleteRAC(\'' + career + '\',\'' + r.id + '\')">Eliminar</button></div>';
    }).join('');
  }

  function coordEditRAC(career, racId) {
    var rac = (DB_ESPOCH[career].racs || []).find(function (r) { return r.id === racId; });
    if (!rac) return;
    openModal('Editar RAC', '<div class="form-grid"><div class="form-group"><label class="form-label">Código</label><input class="form-input" id="coord-edit-rac-code" value="' + rac.code + '"></div><div class="form-group"><label class="form-label">Descripción</label><input class="form-input" id="coord-edit-rac-desc" value="' + rac.description + '"></div></div>',
      [{ label: 'Cancelar', cls: 'btn-ghost', action: 'close' }, { label: 'Guardar', cls: 'btn-success', action: function () {
        rac.code = document.getElementById('coord-edit-rac-code').value.trim();
        rac.description = document.getElementById('coord-edit-rac-desc').value.trim();
        coordRenderRACList(); closeModal();
      }}]);
  }

  function coordDeleteRAC(career, racId) {
    DB_ESPOCH[career].racs = (DB_ESPOCH[career].racs || []).filter(function (r) { return r.id !== racId; });
    Object.keys(DB_ESPOCH[career].asignaturas || {}).forEach(function (subject) {
      var arr = DB_ESPOCH[career].asignaturas[subject].raau || [];
      DB_ESPOCH[career].asignaturas[subject].raau = arr.filter(function (r) { return r.racId !== racId; });
    });
    coordRenderRACList();
  }

  function coordManualRAAU() {
    var careerEl = document.getElementById('coord-career-assignment') || document.getElementById('coord-career');
    var subjectEl = document.getElementById('coord-subject-assignment') || document.getElementById('coord-subject');
    var career = careerEl ? careerEl.value : '';
    var subject = subjectEl ? subjectEl.value : '';
    if (!career || !subject) { showToast('Seleccione carrera y asignatura.', 'error'); return; }
    var racOptions = (DB_ESPOCH[career].racs || []).map(function (r) { return '<option value="' + r.id + '">' + r.code + '</option>'; }).join('');
    openModal('Agregar RAAU manual', '<div class="form-grid"><div class="form-group"><label class="form-label">Código</label><input class="form-input" id="coord-raau-code" placeholder="RAAU1"></div><div class="form-group"><label class="form-label">RAC</label><select class="form-select" id="coord-raau-rac">' + racOptions + '</select></div></div><div class="form-group"><label class="form-label">Descripción</label><textarea class="form-input" id="coord-raau-desc"></textarea></div>',
      [{ label: 'Cancelar', cls: 'btn-ghost', action: 'close' }, { label: 'Agregar', cls: 'btn-success', action: function () {
        var code = document.getElementById('coord-raau-code').value.trim();
        var desc = document.getElementById('coord-raau-desc').value.trim();
        var racId = document.getElementById('coord-raau-rac').value;
        if (!code || !desc || !racId) return;
        if (!DB_ESPOCH[career].asignaturas[subject]) DB_ESPOCH[career].asignaturas[subject] = { raau: [] };
        DB_ESPOCH[career].asignaturas[subject].raau.push({ code: code, description: desc, racId: racId });
        coordRenderRAAUList();
        closeModal(); showToast('RAAU agregado.', 'success');
      }}]);
  }

  function coordRenderRAAUList() {
    var careerEl = document.getElementById('coord-career');
    var subjectEl = document.getElementById('coord-subject');
    var target = document.getElementById('coord-raau-list');
    if (!careerEl || !subjectEl || !target) return;
    var career = careerEl.value;
    var subject = subjectEl.value;
    if (!career || !subject || !DB_ESPOCH[career] || !DB_ESPOCH[career].asignaturas[subject]) {
      target.innerHTML = '<div style="font-size:.8rem;color:var(--gray-500)">Seleccione carrera y asignatura.</div>';
      return;
    }
    var raauArr = DB_ESPOCH[career].asignaturas[subject].raau || [];
    if (raauArr.length === 0) {
      target.innerHTML = '<div style="font-size:.8rem;color:var(--gray-500)">No hay RAAU cargados.</div>';
      return;
    }
    target.innerHTML = raauArr.map(function (r, idx) {
      var rac = (DB_ESPOCH[career].racs || []).find(function (x) { return x.id === r.racId; });
      return '<div class="item-row"><div style="min-width:70px;font-weight:700;color:var(--navy)">' + r.code + '</div><div style="flex:1"><div style="font-size:.8rem;color:var(--gray-700)">' + r.description + '</div><div style="font-size:.68rem;color:var(--gray-400)">' + (rac ? rac.code : r.racId) + '</div></div><button class="btn btn-sm btn-ghost" onclick="coordEditRAAUItem(\'' + career + '\',\'' + subject + '\',' + idx + ')">Editar</button><button class="btn btn-sm btn-danger" onclick="coordDeleteRAAUItem(\'' + career + '\',\'' + subject + '\',' + idx + ')">Eliminar</button></div>';
    }).join('');
  }

  function coordEditRAAUItem(career, subject, index) {
    var item = (DB_ESPOCH[career].asignaturas[subject].raau || [])[index];
    if (!item) return;
    var racOptions = (DB_ESPOCH[career].racs || []).map(function (r) { return '<option value="' + r.id + '"' + (r.id === item.racId ? ' selected' : '') + '>' + r.code + '</option>'; }).join('');
    openModal('Editar RAAU', '<div class="form-grid"><div class="form-group"><label class="form-label">Código</label><input class="form-input" id="coord-edit-raau-code" value="' + item.code + '"></div><div class="form-group"><label class="form-label">RAC</label><select class="form-select" id="coord-edit-raau-rac">' + racOptions + '</select></div></div><div class="form-group"><label class="form-label">Descripción</label><textarea class="form-input" id="coord-edit-raau-desc">' + item.description + '</textarea></div>',
      [{ label: 'Cancelar', cls: 'btn-ghost', action: 'close' }, { label: 'Guardar', cls: 'btn-success', action: function () {
        item.code = document.getElementById('coord-edit-raau-code').value.trim();
        item.description = document.getElementById('coord-edit-raau-desc').value.trim();
        item.racId = document.getElementById('coord-edit-raau-rac').value;
        coordRenderRAAUList();
        closeModal();
      }}]);
  }

  function coordDeleteRAAUItem(career, subject, index) {
    DB_ESPOCH[career].asignaturas[subject].raau.splice(index, 1);
    coordRenderRAAUList();
  }

  function coordTriggerExcel() {
    var input = document.getElementById('coord-excel-input');
    if (input) input.click();
  }

  async function coordImportExcel(files) {
    var file = files && files[0];
    var careerEl = document.getElementById('coord-career-assignment') || document.getElementById('coord-career');
    var subjectEl = document.getElementById('coord-subject-assignment') || document.getElementById('coord-subject');
    var career = careerEl ? careerEl.value : '';
    var subject = subjectEl ? subjectEl.value : '';
    if (!file || !career || !subject) { showToast('Seleccione carrera/asignatura y archivo.', 'error'); return; }
    try {
      var XLSX = await import('https://cdn.jsdelivr.net/npm/xlsx@0.18.5/+esm');
      var data = await file.arrayBuffer();
      var workbook = XLSX.read(data, { type: 'array' });
      var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      var rows = XLSX.utils.sheet_to_json(firstSheet, { defval: '' });
      var racByCode = {};
      (DB_ESPOCH[career].racs || []).forEach(function (r) { racByCode[String(r.code).trim().toUpperCase()] = r; });
      var importedRaaus = [];
      rows.forEach(function (row) {
        var racCode = String(row.RAC_CODE || row.RAC || '').trim().toUpperCase();
        var racDesc = String(row.RAC_DESC || row.RAC_DESCRIPCION || '').trim();
        var raauCode = String(row.RAAU_CODE || row.RAAU || '').trim();
        var raauDesc = String(row.RAAU_DESC || row.RAAU_DESCRIPCION || '').trim();
        if (!racCode || !raauCode || !raauDesc) return;
        if (!racByCode[racCode]) {
          var newRac = { id: 'rac_excel_' + Date.now() + '_' + racCode, code: racCode, description: racDesc || ('RAC ' + racCode) };
          DB_ESPOCH[career].racs.push(newRac);
          racByCode[racCode] = newRac;
        }
        importedRaaus.push({ code: raauCode, description: raauDesc, racId: racByCode[racCode].id });
      });
      if (!DB_ESPOCH[career].asignaturas[subject]) DB_ESPOCH[career].asignaturas[subject] = { raau: [] };
      DB_ESPOCH[career].asignaturas[subject].raau = importedRaaus;
      save();
      coordRenderRAAUList();
      showToast('Importación Excel completada: ' + importedRaaus.length + ' RAAU.', 'success');
    } catch (e) {
      showToast('No se pudo procesar el Excel.', 'error');
    }
  }

  function coordEditMapping() {
    var career = document.getElementById('coord-career').value;
    var subject = document.getElementById('coord-subject').value;
    if (!career || !subject) { showToast('Seleccione carrera y asignatura.', 'error'); return; }
    var racs = DB_ESPOCH[career].racs || [];
    var existing = (DB_ESPOCH[career].asignaturas[subject] && DB_ESPOCH[career].asignaturas[subject].raau) || [];
    var options = racs.map(function (r) { return '<option value="' + r.id + '">' + r.code + '</option>'; }).join('');
    var rows = existing.map(function (r) {
      return '<div class="item-row"><input class="form-input" value="' + (r.code || 'RAAU') + '" data-k="code"><input class="form-input" value="' + (r.description || '') + '" data-k="desc"><select class="form-select" data-k="rac">' + options.replace('value="' + r.racId + '"', 'value="' + r.racId + '" selected') + '</select></div>';
    }).join('');
    openModal('Editar mapeo de ' + subject, '<div id="coord-map-rows">' + (rows || '<div class="item-row"><input class="form-input" value="RAAU1" data-k="code"><input class="form-input" placeholder="Descripción" data-k="desc"><select class="form-select" data-k="rac">' + options + '</select></div>') + '</div><button class="btn btn-ghost btn-sm" onclick="coordAddMapRow()">+ Fila</button>',
      [{ label: 'Cancelar', cls: 'btn-ghost', action: 'close' }, { label: 'Guardar', cls: 'btn-success', action: function () { coordSaveMapping(career, subject); } }]);
  }

  function coordAddMapRow() {
    var holder = document.getElementById('coord-map-rows');
    if (!holder) return;
    var career = document.getElementById('coord-career').value;
    var options = ((DB_ESPOCH[career] && DB_ESPOCH[career].racs) || []).map(function (r) { return '<option value="' + r.id + '">' + r.code + '</option>'; }).join('');
    holder.innerHTML += '<div class="item-row"><input class="form-input" value="RAAU' + (holder.children.length + 1) + '" data-k="code"><input class="form-input" placeholder="Descripción" data-k="desc"><select class="form-select" data-k="rac">' + options + '</select></div>';
  }

  function coordSaveMapping(career, subject) {
    var rows = Array.prototype.slice.call(document.querySelectorAll('#coord-map-rows .item-row'));
    var mapped = rows.map(function (row) {
      return {
        code: row.querySelector('[data-k="code"]').value.trim(),
        description: row.querySelector('[data-k="desc"]').value.trim(),
        racId: row.querySelector('[data-k="rac"]').value
      };
    }).filter(function (x) { return x.code && x.description && x.racId; });
    if (!DB_ESPOCH[career].asignaturas[subject]) DB_ESPOCH[career].asignaturas[subject] = { raau: [] };
    DB_ESPOCH[career].asignaturas[subject].raau = mapped;
    closeModal();
    showToast('Mapeo RAC/RAAU actualizado para ' + subject, 'success');
  }

  function coordOpenConfig(configId) { applySavedConfig(configId); navigate('configuracion'); }
  function coordCreateConfig() { unlockInitialConfig(); navigate('configuracion'); }
  function coordGoConfig() { navigate('configuracion'); }

  function renderPage(page) {
    if (page === 'dashboard') renderDashboard();
    else if (page === 'configuracion') renderConfig();
    else if (page === 'estudiantes') renderEstudiantes();
    else if (page === 'calificaciones') renderCalificaciones();
    else if (page === 'reporte') renderReporte();
    else if (page === 'coordinacion') renderCoordinacion();
    else if (page === 'coord-asignaturas') renderCoordinacion('asignaturas');
    else if (page === 'coord-rac') renderCoordinacion('rac');
    else if (page === 'coord-raau') renderCoordinacion('raau');
    else if (page === 'coord-docentes') renderCoordinacion('docentes');
    updateReportAvailability();
  }

  function navigate(page) {
    if (!roleCanAccess(page)) {
      showToast('No tiene permisos para esta sección.', 'error');
      return;
    }
    if (page === 'reporte' && !isGradesComplete()) {
      showToast('Debe completar todas las calificaciones antes de abrir Reporte Final.', 'error');
      return;
    }
    document.querySelectorAll('.page').forEach(function (p) { p.classList.remove('active'); });
    document.querySelectorAll('.nav-item').forEach(function (n) { n.classList.remove('active'); });
    var normalizedPage = page.indexOf('coord-') === 0 ? 'coordinacion' : page;
    var pageEl = document.getElementById('page-' + normalizedPage);
    if (pageEl) pageEl.classList.add('active');
    var navEl = document.querySelector('.nav-item[data-page="' + page + '"]');
    if (navEl) navEl.classList.add('active');
    renderPage(page);
  }

  window.closeModal = closeModal;
  window.closeSuccessModal = closeSuccessModal;
  window.onCarreraChange = onCarreraChange;
  window.onPaoChange = onPaoChange;
  window.onAsignaturaChange = onAsignaturaChange;
  window.cfgPrev = cfgPrev;
  window.cfgNext = cfgNext;
  window.cfgSave = cfgSave;
  window.toggleRAC = toggleRAC;
  window.toggleManagedRAC = toggleManagedRAC;
  window.addRAAU = addRAAU;
  window.deleteRAAU = deleteRAAU;
  window.editRAAU = editRAAU;
  window.addActivity = addActivity;
  window.deleteActivity = deleteActivity;
  window.editActivity = editActivity;
  window.renderStudentTable = renderStudentTable;
  window.renderGradeTable = renderGradeTable;
  window.showAddStudent = showAddStudent;
  window.saveAddStudent = saveAddStudent;
  window.editStudent = editStudent;
  window.confirmDelete = confirmDelete;
  window.onGradeInput = onGradeInput;
  window.onGradeChange = onGradeChange;
  window.calSave = calSave;
  window.applySavedConfig = applySavedConfig;
  window.editSavedConfigName = editSavedConfigName;
  window.deleteSavedConfig = deleteSavedConfig;
  window.onConfigConfirmContinue = onConfigConfirmContinue;
  window.unlockInitialConfig = unlockInitialConfig;
  window.saveManagedConfigEdits = saveManagedConfigEdits;
  window.openManagedRAAUEditor = openManagedRAAUEditor;
  window.openManagedActivities = openManagedActivities;
  window.triggerStudentPDFUpload = triggerStudentPDFUpload;
  window.handleStudentPDFUpload = handleStudentPDFUpload;
  window.onStudentDropzoneOver = onStudentDropzoneOver;
  window.onStudentDropzoneLeave = onStudentDropzoneLeave;
  window.handleStudentDrop = handleStudentDrop;
  window.doLogin = doLogin;
  window.doLogout = doLogout;
  window.fillDemoCredentials = fillDemoCredentials;
  window.coordLoadSubjects = coordLoadSubjects;
  window.coordEditMapping = coordEditMapping;
  window.coordAddMapRow = coordAddMapRow;
  window.coordSaveMapping = coordSaveMapping;
  window.coordOpenConfig = coordOpenConfig;
  window.coordCreateConfig = coordCreateConfig;
  window.coordGoConfig = coordGoConfig;
  window.coordLoadSubjectsAssignment = coordLoadSubjectsAssignment;
  window.coordCreateAssignment = coordCreateAssignment;
  window.coordAddDocente = coordAddDocente;
  window.coordAddAsignatura = coordAddAsignatura;
  window.coordManualRAC = coordManualRAC;
  window.coordRenderRACList = coordRenderRACList;
  window.coordEditRAC = coordEditRAC;
  window.coordDeleteRAC = coordDeleteRAC;
  window.coordManualRAAU = coordManualRAAU;
  window.coordRenderRAAUList = coordRenderRAAUList;
  window.coordEditRAAUItem = coordEditRAAUItem;
  window.coordDeleteRAAUItem = coordDeleteRAAUItem;
  window.coordTriggerExcel = coordTriggerExcel;
  window.coordImportExcel = coordImportExcel;

  var carrera = document.getElementById('cfg-carrera');
  var pao = document.getElementById('cfg-pao');
  var asig = document.getElementById('cfg-asignatura');
  if (carrera) carrera.addEventListener('change', onCarreraChange);
  if (pao) pao.addEventListener('change', onPaoChange);
  if (asig) asig.addEventListener('change', onAsignaturaChange);

  // Los botones del wizard ya están conectados desde React (App.jsx) para evitar doble ejecución.

  document.querySelectorAll('.nav-item').forEach(function (el) {
    el.addEventListener('click', function () { navigate(el.dataset.page); });
  });

  ['auth-email', 'auth-pass'].forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') doLogin();
    });
  });

  applyRoleUI();
  updateSidebar();
  if (STATE.currentUser) renderDashboard();
}
