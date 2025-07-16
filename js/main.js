const form = document.getElementById("formulario");
const planContainer = document.getElementById("planSemanal");
let plan = JSON.parse(localStorage.getItem("plan")) || [];

function renderizarPlan() {
  planContainer.innerHTML = "";

  plan.forEach((diaObj, index) => {
    const { dia, tipo } = diaObj;
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${dia}</h3>
      <p><strong>Entrenamiento:</strong> ${tipo}</p>
      <p><strong>Alimentación:</strong> ${sugerirAlimentacion(tipo)}</p>
      <button onclick="eliminarDia(${index})">Eliminar</button>
    `;
    planContainer.appendChild(card);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dia = document.getElementById("dia").value;
  const tipo = document.getElementById("tipoEntrenamiento").value;
  plan.push({ dia, tipo });
  localStorage.setItem("plan", JSON.stringify(plan));
  renderizarPlan();
});

function eliminarDia(index) {
  plan.splice(index, 1);
  localStorage.setItem("plan", JSON.stringify(plan));
  renderizarPlan();
}

// Al cargar la página
renderizarPlan();