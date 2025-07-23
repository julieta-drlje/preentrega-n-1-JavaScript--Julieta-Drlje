function guardarPlan(plan) {
  localStorage.setItem("plan", JSON.stringify(plan));
}

function obtenerPlan() {
  try {
    const plan = localStorage.getItem("plan");
    return plan ? JSON.parse(plan) : [];
  } catch (error) {
    console.error("Error al obtener el plan del localStorage", error);
    return [];
  }
}

function sugerirAlimentacion(tipo) {
  switch (tipo) {
    case "fondo":
      return "Carbohidratos + proteínas (arroz, pollo, banana)";
    case "pasadas":
      return "Proteínas + avena (huevo, licuado)";
    case "descanso":
      return "Ligero y balanceado (pescado, verduras)";
    default:
      return "Comida estándar saludable";
  }
}