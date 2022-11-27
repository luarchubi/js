// ------------
// let nombre = prompt("como te llamas?");
// let reservar = prompt("quieres reservar una clase?");
// if (reservar == "no") {
//   alert(nombre + " no has reservado");
// } else {
//   let fecha = prompt("que día quieres reservar?");
//   function guardar(cliente, dia) {
//     alert(nombre + " has reservado para el día " + fecha);
//   }
// }
// guardar();
// -------------

let reservar = prompt("quieres reservar una clase?").toLowerCase();
let nombre = "";
let fecha = "";
let precio = "700";
let cantidad = 0;
let precioTotal = "";
let agregarClases = false;
let nuevaReserva = false;

function guardarClase(nombre, fecha) {
  switch (fecha) {
    case "lunes":
      alert(nombre + " has reservado clase el día lunes");
      cantidad = cantidad + 1;
      break;
    case "martes":
      alert(nombre + " has reservado clase el día martes");
      cantidad = cantidad + 1;
      break;
    case "miercoles":
      alert(nombre + " has reservado clase el día miercoles");
      cantidad = cantidad + 1;
      break;
    case "jueves":
      alert(nombre + " has reservado clase el día jueves");
      cantidad = cantidad + 1;
      break;
    case "viernes":
      alert(nombre + " has reservado clase el día viernes");
      cantidad = cantidad + 1;
      break;
    case "sabado":
      alert(nombre + " no dictamos clases los fin de semana 😣");
      break;
    case "domingo":
      alert(nombre + " No dictamos clases los fin de semana 😣");
      break;
    default:
      alert(nombre + " No has ingresado un día válido");
      break;
  }
}

if (reservar === "no") {
  alert("Es necesario reservar una clase para garantizarte lugar 😂");
} else {
  let nombre = prompt("como te llamas?").toLowerCase();
  do {
    let fecha = prompt("que día quieres reservar?").toLowerCase();
    guardarClase(nombre, fecha);
    nuevaReserva = confirm("quieres reservar otra clase?");
  } while (nuevaReserva);
}

function total() {
  alert(
    nombre + " el precio total de las clases es " + cantidad * precio + "$"
  );
}
total();
