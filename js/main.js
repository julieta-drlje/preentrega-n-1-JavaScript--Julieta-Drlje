const form = document.getElementById("formulario");
const planContainer = document.getElementById("planSemanal");
const filtroDia = document.getElementById("filtroDia");
const cargarJsonBtn = document.getElementById("cargarJson");
const borrarTodoBtn = document.getElementById("borrarTodo");

let plan = obtenerPlan();

function renderizarPlan(filtro = "") {
  planContainer.innerHTML = "";

  const planFiltrado = filtro
    ? plan.filter((entreno) => entreno.dia === filtro)
    : plan;

  planFiltrado.forEach((entreno, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.classList.add("btnEliminar");
    eliminarBtn.addEventListener("click", () => confirmarEliminacion(index));

    card.innerHTML = `
      <h3>${entreno.dia}</h3>
      <p><strong>Entrenamiento:</strong> ${entreno.tipo}</p>
      <p><strong>Alimentación:</strong> ${sugerirAlimentacion(entreno.tipo)}</p>
    `;

    card.appendChild(eliminarBtn);
    planContainer.appendChild(card);
  });
}

function confirmarEliminacion(index) {
  Swal.fire({
    title: "¿Eliminar este día?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      plan.splice(index, 1);
      guardarPlan(plan);
      renderizarPlan(filtroDia.value);
      Swal.fire("Eliminado", "El día fue eliminado", "success");
    }
  });
}

cargarJsonBtn.addEventListener("click", async () => {
  try {
    const res = await fetch("data/plan.json");
    const datos = await res.json();
    plan = datos;
    guardarPlan(plan);
    renderizarPlan();
    Swal.fire("Plan cargado", "Se cargó el plan desde JSON", "success");
  } catch (error) {
    Swal.fire("Error", "No se pudo cargar el JSON", "error");
  }
});

borrarTodoBtn.addEventListener("click", () => {
  Swal.fire({
    title: "¿Estás segura?",
    text: "Se eliminarán todos los días cargados",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, borrar todo",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      plan = [];
      guardarPlan(plan);
      renderizarPlan();
      Swal.fire("Listo", "El plan fue borrado", "success");
    }
  });
});

filtroDia.addEventListener("change", (e) => {
  renderizarPlan(e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dia = document.getElementById("dia").value;
  const tipo = document.getElementById("tipoEntrenamiento").value;

  const yaExiste = plan.some((entreno) => entreno.dia === dia);
  if (yaExiste) {
    Swal.fire("Error", "Ya cargaste un entrenamiento para ${dia}", "info");
    return;
  }

  plan.push({ dia, tipo });
  guardarPlan(plan);
  renderizarPlan(filtroDia.value);
  form.reset();
  Swal.fire("Guardado", "Entrenamiento del ${dia} agregado", "success");
});

renderizarPlan();