const creditos = {
  prog1: 4,
  so: 4,
  fsi: 4,
  discretas: 3,
  poo: 4,
  aed: 4,
  bd: 4,
  algebra: 3,
  oad: 3,
  dbp: 3,
  abd: 3,
  ads: 3,
  calculo1: 3,
  ada: 4,
  fisw: 3,
  dsi: 3,
  calculo2: 3,
  comunicacion: 2,
  gpn: 4,
  isw: 3,
  mineria: 3,
  estadistica: 3,
  investigacion: 2,
  psc: 2,
  progav: 4,
  bi: 3,
  sig: 3,
  ui: 3,
  ppp1: 2,
  cpd: 4,
  ia: 3,
  redes: 4,
  infra: 2,
  ppp2: 3,
  asd: 3,
  grsti: 3,
  caiti: 2,
  nti: 2,
  proyecto: 2,
  egasi: 3,
  gps: 3,
  rscee: 2,
  emprendimiento: 2,
  computo_sociedad: 2,
  titulacion: 3,
};

const prerequisitos = {
  poo: ["prog1"],
  aed: ["prog1"],
  abd: ["bd"],
  calculo1: ["algebra"],
  oad: ["poo"],
  ada: ["oad"],
  calculo2: ["calculo1"],
  isw: ["fisw"],
  mineria: ["abd"],
  estadistica: ["calculo2"],
  progav: ["ads"],
  bi: ["mineria"],
  cpd: ["progav"],
  asd: ["cpd"],
  proyecto: [],
  titulacion: ["proyecto"],
};

// ... resto del archivo sin cambios (funciones obtenerAprobados, guardarAprobados, etc.) ...

// Funciones para guardar y cargar progreso en localStorage
function obtenerAprobados() {
  const data = localStorage.getItem("mallaAprobados");
  return data ? JSON.parse(data) : [];
}

function guardarAprobados(aprobados) {
  localStorage.setItem("mallaAprobados", JSON.stringify(aprobados));
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
    let puedeDesbloquear = reqs.every((r) => aprobados.includes(r));

    // Reglas especiales con créditos para ciertos módulos
    if (destino === "modulo1") {
      puedeDesbloquear = totalCreditos >= 90;
    }
    if (destino === "modulo2") {
      puedeDesbloquear = aprobados.includes("modulo1") && totalCreditos >= 170;
    }
    if (destino === "internado_electivo" || destino === "internado_electivo1") {
      puedeDesbloquear = totalCreditos >= 240;
    }

    if (!elem.classList.contains("aprobado")) {
      if (puedeDesbloquear) elem.classList.remove("bloqueado");
      else elem.classList.add("bloqueado");
    } else {
      // Si está aprobado, no debe estar bloqueado
      elem.classList.remove("bloqueado");
    }
  }
}

// Maneja el clic para aprobar o desaprobar un ramo (solo si no está bloqueado)
function aprobar(e) {
  const ramo = e.currentTarget;
  if (ramo.classList.contains("bloqueado")) return;

  ramo.classList.toggle("aprobado");

  const aprobados = obtenerAprobados();
  if (ramo.classList.contains("aprobado")) {
    if (!aprobados.includes(ramo.id)) aprobados.push(ramo.id);
  } else {
    const idx = aprobados.indexOf(ramo.id);
    if (idx > -1) aprobados.splice(idx, 1);
  }
  guardarAprobados(aprobados);

  actualizarDesbloqueos();
}

// Al cargar la página, asignar eventos, cargar progreso y actualizar desbloqueos
window.addEventListener("DOMContentLoaded", () => {
  const todosRamos = document.querySelectorAll(".ramo");

  const aprobados = obtenerAprobados();
  todosRamos.forEach((ramo) => {
    if (aprobados.includes(ramo.id)) {
      ramo.classList.add("aprobado");
    }
  });

  todosRamos.forEach((ramo) => {
    ramo.addEventListener("click", aprobar);
  });

  actualizarDesbloqueos();
});
