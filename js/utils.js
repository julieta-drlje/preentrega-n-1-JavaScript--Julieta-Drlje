function guardarPlan(plan) {
  localStorage.setItem("plan", JSON.stringify(plan));
}


function obtenerPlan() {
  return JSON.parse(localStorage.getItem("plan")) || [];
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