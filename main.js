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
let cantidad = 1;
let precioTotal = "";
let agregarClases = false;

if (reservar == "no") {
  alert("Es necesario reservar una clase para garantizarte lugar 😂");
} else {
  let fecha = prompt("que día quieres reservar?");
  let nombre = prompt("como te llamas?").toLowerCase();

  function guardarClase() {
    switch (fecha) {
      case "lunes":
        alert(nombre + " has reservado clase el día lunes");
        break;
      case "martes":
        alert(nombre + " has reservado clase el día martes");
        break;
      case "miércoles":
        alert(nombre + " has reservado clase el día miércoles");
        break;
      case "jueves":
        alert(nombre + " has reservado clase el día jueves");
        break;
      case "viernes":
        alert(nombre + " has reservado clase el día viernes");
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
}

do {
  let reserva = prompt("quieres reservar más clases?");
} while (reserva == "si");

function total() {
  alert(
    nombre + " el precio total de las clases es " + cantidad * precio + "$"
  );
}
guardarClase();
total();
