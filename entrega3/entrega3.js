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

// const bookings = document.getElementById("cart");
// bookings.addEventListener("click", listarReservas);
// function listarReservas() {
//   const asd1 = document.getElementById("booking-list");
//   const asd2 = document.createElement("p");
//   asd2.innerText = "hola";
//   asd1.appendChild(asd2);
// }

const showClases = () => {
  const contenedor = document.getElementById("programacion");
  clases.forEach((elemento) => {
    let div = document.createElement("div");
    div.innerText = `
              ${elemento.clase} - ${elemento.horario}
       `;
    contenedor.appendChild(div);
  });
};
showClases();
