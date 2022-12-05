let nombre = "Olivel";
let apellido = "Cantorán";
let username = "Ocg1010";
let edad = 23;
let mail = "Ocg101010@gmail.com";
let esMayorDeEdad = true;
let dineroAhorrado = 2000;
let deudas = 100;


function nombreCompleto(name, lastName) {
  return name + " " + lastName;
}

nombreCompleto("Iris", "Alcachofa");



let completeName = "Olivel Cantoran"
let nickname = "Ocg1010"


function nombreCompleto2(completeName, nickname) {
  return "Mi nombre es" + " " + completeName + " " + "pero prefiero que me digas " + nickname + "."
}


const tipoDeSuscripcion2 = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

let tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
   console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
  console.log("Suscribete a Platzi");
}


//For a while e.j. 1
for(let i = 0; i < 5; i++) {
  console.log("El valor de i es:" + i);
}

let i = 0;

while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}

//For a while e.j. 2
for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}

let i = 10;

while (i >= 2) {
  console.log("El valor de i es: " + i);
  i--
}

let respuesta = prompt("Cuanto es 2 + 2");

while (respuesta != "4") {
  let pregunta = prompt("Cuanto es 2 + 2");
  respuesta = pregunta;
}


//Ejercicio con solo if agregando return
function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion == 'Free') {
      console.log('solo puedes tomar los cursos gratis');
      return;
  }

  if (suscripcion == 'Basic') {
    console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
    return;
  }

  if (suscripcion == 'Expert') {
    console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
    return;
  }
  
  if (suscripcion == 'ExpertDuo') {
    console.log('Tu y alguien mas pueden tomar Todos los cursos de Platzi durante un año');
    return;
      }

  console.warn('Ese tipo de suscripcion no existe');
}

//Ejercicio con un solo if

const tiposDeSuscripciones = {
  free: 'Solo puedes tomar los cursos gratis',
  basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
  expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
  expertduo:'Tu y alguien mas pueden tomar Todos los cursos de Platzi durante un año'
}

// tiposDeSuscripciones['free'] tambien asi podemos ingresar

const ejemplosSuscripcion = 'free';

/* 
tiposDeSuscripciones[ejemplosSuscripcion]
'Solo puedes tomar los cursos gratis' 
*/

function conseguirTipoSuscripcion(suscripcion) {
  if (tiposDeSuscripciones[suscripcion]) {
    console.log(tiposDeSuscripciones[suscripcion])
    return; 
  }
    
  console.warn('Ese tipo de suscripcion no existe');
}
