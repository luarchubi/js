// let parrafo = "";
// let boton = document.getElementById("reservar");
// boton.addEventListener("click", bookClass);

// function bookClass() {
//   let misReservas = [];
//   let actividad = prompt("Indica qué clase quieres hacer").toLowerCase();
//   let turno = prompt("¿en qué turno?").toLowerCase();
//   let dispoClases = clases.filter(
//     (element) => element.clase === actividad && element.turno === turno
//   );

//   if (dispoClases.length !== 0) {
//     dispoClases.forEach((objeto) => {
//       misReservas.push(objeto);
//     });
//     let listado = document.getElementById("listado-reservas");
//     let parrafo = document.createElement("li");
//     parrafo.innerHTML = "¡Has reservado " + actividad + "!";
//     listado.appendChild(parrafo);
//     listado.className = "nuevo-li";
//     let eliminarBoton = document.getElementById("reservar");
//     eliminarBoton.remove();
//   } else {
//     let listado = document.getElementById("listado-reservas");
//     let parrafo = document.createElement("li");
//     parrafo.innerText =
//       "Lo sentimos, no hay disponibilidad. Prueba en otro turno.";
//     listado.appendChild(parrafo);
//     listado.className = "nuevo-li";
//   }
// }

// pestaña clases
// const showClases = () => {
//   const contenedor = document.getElementById("programacion");
//   clases.forEach((elemento) => {
//     let div = document.createElement("div");
//     div.innerText = `
//               ${elemento.clase} - ${elemento.horario}
//        `;
//     contenedor.appendChild(div);
//   });
// };
// showClases();

let booking = [];
const formulario = document.getElementById("formulario");
const listaReservas = document.getElementById("lista-reservas");

const crearReserva = (actividad1, turno1) => {
  return {
    clase: actividad1,
    turno: turno1,
  };
};

const mostrarReserva = (activity) => {
  const div = document.createElement("div");
  booking.push(activity);
  div.innerHTML += `
${activity.clase}
${activity.turno}
`;
  listaReservas.appendChild(div);
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = new FormData(formulario);
  const actividad1 = form.get("actividad");
  const turno1 = form.get("turno");
  const nuevaReserva = crearReserva(actividad1, turno1);
  mostrarReserva(nuevaReserva);
});

const erase = document.getElementById("reset");
erase.addEventListener("click", limpiar);
function limpiar() {
  document.getElementById("listaReservas");
  listaReservas.remove();
}
