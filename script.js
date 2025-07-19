// Créditos oficiales de cada ramo
const creditos = {
  'fundamentos1': 3,
  'quimica': 3,
  'biologia': 6,
  'mate': 2,
  'fisica': 2,
  'educacion1': 4,
  'cs_sociales1': 6,
  'cfg1': 2,
  'ingles1': 3,
  'saludcom1': 4,
  'bioquimica': 3,
  'biodesarrollo': 4,
  'fisiologia': 4,
  'anatomia': 5,
  'histologia': 3,
  'integracion1': 2,
  'cfg2': 2,
  'ingles2': 3,
  'fundamentos2': 4,
  'obstetricia1': 4,
  'neonatologia1': 4,
  'fisiologia_sis': 5,
  'inmunologia': 3,
  'agentes': 3,
  'cs_sociales2': 5,
  'ingles3': 3,
  'neonatologia2': 3,
  'obstetricia2': 3,
  'gineco1': 5,
  'fisiopato': 5,
  'infectologia': 3,
  'farmacologia': 4,
  'integracion2': 3,
  'investigacion1': 3,
  'clinica_neonatal1': 5,
  'clinica_partos1': 5,
  'clinica_ap1': 5,
  'clinica_puerperio': 5,
  'clinica_saludcom': 4,
  'modulo1': 4,
  'neonatologia3': 4,
  'saludcom2': 6,
  'obstetricia_pat': 4,
  'gestion1': 4,
  'educacion2': 3,
  'investigacion2': 5,
  'cs_sociales3': 4,
  'cfg3': 2,
  'enfermeria_mq': 6,
  'reproduccion': 2,
  'gineco_pat': 5,
  'gestion2': 5,
  'investigacion3': 6,
  'cs_sociales4': 4,
  'clinica_neonatal2': 5,
  'clinica_partos2': 4,
  'clinica_ap2': 5,
  'alto_riesgo': 4,
  'clinica_mq': 4,
  'modulo2': 5,
  'seminario1': 2,
  'internado_neonatologia': 10,
  'internado_obstetricia': 10,
  'internado_ap': 10,
  'internado_gineco': 10,
  'internado_electivo': 15,
  'seminario2': 3,
  'ingles4': 3,
  'internado_electivo1': 15
};

// Prerrequisitos de cada ramo (ramos que deben estar aprobados para desbloquear este)
const prerequisitos = {
  'integracion1': ['fundamentos1'],
  'bioquimica': ['quimica', 'biologia'],
  'anatomia': ['biologia'],
  'fisiologia': ['biologia', 'fisica'],
  'biodesarrollo': ['biologia'],
  'histologia': ['biologia'],
  'investigacion1': ['mate', 'fisica'],
  'educacion2': ['educacion1'],
  'inmunologia': ['fisiologia'],
  'cs_sociales2': ['cs_sociales1'],
  'ingles2': ['ingles1'],
  'saludcom1': [],
  'fundamentos2': ['fisiologia', 'anatomia', 'histologia', 'integracion1'],
  'obstetricia1': ['fisiologia', 'anatomia', 'histologia', 'biodesarrollo', 'integracion1'],
  'neonatologia1': ['fisiologia', 'anatomia', 'histologia', 'biodesarrollo', 'integracion1'],
  'fisiologia_sis': ['fisiologia'],
  'agentes': ['fisiologia', 'anatomia', 'histologia'],
  'cs_sociales3': ['cs_sociales2'],
  'ingles3': ['ingles2'],
  'neonatologia2': ['neonatologia1', 'fisiologia_sis', 'agentes'],
  'obstetricia2': ['obstetricia1', 'fisiologia_sis'],
  'gineco1': ['histologia', 'fisiologia_sis'],
  'fisiopato': ['fisiologia_sis'],
  'infectologia': ['agentes'],
  'farmacologia': ['fisiologia_sis', 'bioquimica'],
  'integracion2': ['fisiologia_sis','fundamentos2'],
  'clinica_neonatal1': ['neonatologia2', 'fisiopato', 'infectologia', 'farmacologia', 'integracion2'],
  'clinica_partos1': ['obstetricia2', 'fisiopato', 'infectologia', 'farmacologia', 'integracion2'],
  'clinica_ap1': ['obstetricia2', 'gineco1', 'fisiopato', 'infectologia', 'farmacologia', 'integracion2'],
  'clinica_puerperio': ['obstetricia2', 'fisiopato', 'infectologia', 'farmacologia', 'integracion2'],
  'clinica_saludcom': ['integracion2'],
  'modulo1': [],
  'neonatologia3': ['farmacologia', 'fisiopato', 'obstetricia2'],
  'saludcom2': ['saludcom1'],
  'obstetricia_pat': ['obstetricia2', 'farmacologia', 'fisiopato'],
  'gestion1': ['investigacion1'],
  'investigacion2': ['investigacion1'],
  'enfermeria_mq': ['neonatologia3', 'obstetricia_pat'],
  'reproduccion': ['fisiologia_sis'],
  'gineco_pat': ['clinica_ap1'],
  'gestion2': ['gestion1'],
  'investigacion3': ['investigacion2'],
  'cs_sociales4': ['cs_sociales3'],
  'clinica_neonatal2': ['neonatologia3', 'enfermeria_mq'],
  'clinica_partos2': ['obstetricia_pat', 'enfermeria_mq'],
  'clinica_ap2': ['obstetricia_pat', 'gineco_pat', 'saludcom2'],
  'alto_riesgo': ['obstetricia_pat', 'enfermeria_mq'],
  'clinica_mq': ['gineco_pat', 'enfermeria_mq'],
  'modulo2': ['modulo1'],
  'seminario1': ['investigacion3'],
  'internado_neonatologia': ['clinica_neonatal2'],
  'internado_obstetricia': ['clinica_partos2', 'alto_riesgo'],
  'internado_ap': ['clinica_ap2'],
  'internado_gineco': ['clinica_mq'],
  'internado_neonatologia1': ['clinica_neonatal2'],
  'internado_obstetricia1': ['clinica_partos2', 'alto_riesgo'],
  'internado_ap1': ['clinica_ap2'],
  'internado_gineco1': ['clinica_mq'],
  'internado_electivo': [],
  'internado_electivo1': [],
  'seminario2': ['seminario1'],
  'ingles4': ['ingles3']
};

// Funciones para guardar y cargar progreso en localStorage
function obtenerAprobados() {
  const data = localStorage.getItem('mallaAprobados');
  return data ? JSON.parse(data) : [];
}

function guardarAprobados(aprobados) {
  localStorage.setItem('mallaAprobados', JSON.stringify(aprobados));
}

// Calcula el total de créditos de ramos aprobados
function calcularCreditosAprobados() {
  const aprobados = obtenerAprobados();
  return aprobados.reduce((sum, ramo) => sum + (creditos[ramo] || 0), 0);
}

// Actualiza qué ramos están desbloqueados o bloqueados según prerrequisitos y créditos especiales
function actualizarDesbloqueos() {
  const aprobados = obtenerAprobados();
  const totalCreditos = calcularCreditosAprobados();

  for (const [destino, reqs] of Object.entries(prerequisitos)) {
    const elem = document.getElementById(destino);
    if (!elem) continue;

    // Verificar si se cumplen prerrequisitos normales
    let puedeDesbloquear = reqs.every(r => aprobados.includes(r));

    // Reglas especiales con créditos para ciertos módulos
    if (destino === 'modulo1') {
      puedeDesbloquear = totalCreditos >= 90;
    }
    if (destino === 'modulo2') {
      puedeDesbloquear = aprobados.includes('modulo1') && totalCreditos >= 170;
    }
    if (destino === 'internado_electivo' || destino === 'internado_electivo1') {
      puedeDesbloquear = totalCreditos >= 240;
    }

    if (!elem.classList.contains('aprobado')) {
      if (puedeDesbloquear) elem.classList.remove('bloqueado');
      else elem.classList.add('bloqueado');
    } else {
      // Si está aprobado, no debe estar bloqueado
      elem.classList.remove('bloqueado');
    }
  }
}

// Maneja el clic para aprobar o desaprobar un ramo (solo si no está bloqueado)
function aprobar(e) {
  const ramo = e.currentTarget;
  if (ramo.classList.contains('bloqueado')) return;

  ramo.classList.toggle('aprobado');

  const aprobados = obtenerAprobados();
  if (ramo.classList.contains('aprobado')) {
    if (!aprobados.includes(ramo.id)) aprobados.push(ramo.id);
  } else {
    const idx = aprobados.indexOf(ramo.id);
    if (idx > -1) aprobados.splice(idx, 1);
  }
  guardarAprobados(aprobados);

  actualizarDesbloqueos();
}

// Al cargar la página, asignar eventos, cargar progreso y actualizar desbloqueos
window.addEventListener('DOMContentLoaded', () => {
  const todosRamos = document.querySelectorAll('.ramo');

  const aprobados = obtenerAprobados();
  todosRamos.forEach(ramo => {
    if (aprobados.includes(ramo.id)) {
      ramo.classList.add('aprobado');
    }
  });

  todosRamos.forEach(ramo => {
    ramo.addEventListener('click', aprobar);
  });

  actualizarDesbloqueos();
});
