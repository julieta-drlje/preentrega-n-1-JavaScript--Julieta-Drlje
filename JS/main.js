//  CONST + ARRAYS
const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]; 
const entrenamientos = []; 
const alimentacion = [];  

//funcion con parametro
function cargarEntrenamiento(dia, tipoEntrenamiento) {
  entrenamientos.push({ dia, tipoEntrenamiento }); 
}

//funcion con parametro y condicional
function sugerirAlimentacion(tipo) {
  
  if (tipo === "fondo") {
    return "Alto en carbohidratos y proteínas (ej: arroz, pollo, banana)";
  } else if (tipo === "pasadas") {
    return "Media en carbos, alto en proteína (ej: avena, huevo, batido)";
  } else if (tipo === "descanso") {
    return "Ligero y balanceado (ej: ensalada, pescado, frutas)";
  } else {
    return "Plan estándar (ej: vegetales, legumbres, algo de proteína)";
  }
}

//funcion con parametro y ciclo for
function mostrarPlan(entrenamientos) {
  for (let i = 0; i < entrenamientos.length; i++) { 
    const e = entrenamientos[i];
    const comida = sugerirAlimentacion(e.tipoEntrenamiento);
    alimentacion.push(comida);

    console.log(`${e.dia}: Entrenamiento - ${e.tipoEntrenamiento.toUpperCase()}`);
    console.log(`Plan de alimentación: ${comida}`);
    console.log("-----------");
  }
  alert("Plan semanal cargado. Ver consola para detalles");
}



alert("Bienvenido a tu organizador de entrenamiento + nutrición");


let i = 0;

//ciclo while
while (i < dias.length) { 
  const tipo = prompt(`¿Qué tipo de entrenamiento hacés el ${dias[i]}?\n(opciones: fondo, pasadas, descanso, gym)`); 
  cargarEntrenamiento(dias[i], tipo.toLowerCase()); 
  i++; 
}


mostrarPlan(entrenamientos);

