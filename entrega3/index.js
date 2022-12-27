let parrafo = "";
let boton = document.getElementById("reservar");
boton.addEventListener("click", bookClass);

function bookClass() {
  let misReservas = [];
  let actividad = prompt("Indica qué clase quieres hacer").toLowerCase();
  let turno = prompt("¿en qué turno?").toLowerCase();
  let dispoClases = clases.filter(
    (element) => element.clase === actividad && element.turno === turno
  );

  if (dispoClases.length !== 0) {
    dispoClases.forEach((objeto) => {
      misReservas.push(objeto);
    });
    let listado = document.getElementById("listado-reservas");
    let parrafo = document.createElement("li");
    parrafo.innerHTML = "¡Has reservado " + actividad + "!";
    listado.appendChild(parrafo);
    listado.className = "nuevo-li";
    let eliminarBoton = document.getElementById("reservar");
    eliminarBoton.remove();
  } else {
    let listado = document.getElementById("listado-reservas");
    let parrafo = document.createElement("li");
    parrafo.innerText =
      "Lo sentimos, no hay disponibilidad. Prueba en otro turno.";
    listado.appendChild(parrafo);
    listado.className = "nuevo-li";
  }
}
