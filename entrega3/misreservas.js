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
