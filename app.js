
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const planEntrenamiento = [];
const planAlimentacion = [];


function cargarEntrenamiento(dia, tipoEntrenamiento) {
  planEntrenamiento.push({ dia, tipoEntrenamiento });
}


function sugerirAlimentacion(tipoEntrenamiento) {
  switch (tipoEntrenamiento) {
    case "fondo":
      return "Alto en carbohidratos y proteínas (ej: arroz, pollo, banana)";
    case "pasadas":
      return "Media en carbos, alto en proteína (ej: avena, huevo, batido)";
    case "descanso":
      return "Ligero y balanceado (ej: ensalada, pescado, frutas)";
    default:
      return "Plan estándar (ej: vegetales, legumbres, algo de proteína)";
  }
}


function mostrarPlan(planEntrenamiento) {
  for (const diaEntrenamiento of planEntrenamiento) {
    const sugerencia = sugerirAlimentacion(diaEntrenamiento.tipoEntrenamiento);
    planAlimentacion.push(sugerencia);

    console.log(${diaEntrenamiento.dia}: Entrenamiento - ${diaEntrenamiento.tipoEntrenamiento.toUpperCase()});
    console.log(Plan de alimentación: ${sugerencia});
    console.log("-----------");
  }
  alert("Plan semanal cargado. Ver consola para detalles.");
}



alert("Bienvenido a tu planificador de entrenamiento + nutrición");


let indice = 0;
while (indice < diasSemana.length) {
  const tipoEntrenamiento = prompt(¿Qué tipo de entrenamiento hacés el ${diasSemana[indice]}?\n(opciones: fondo, pasadas, descanso, otro));
  cargarEntrenamiento(diasSemana[indice], tipoEntrenamiento.toLowerCase());
  indice++;
}


mostrarPlan(planEntrenamiento);