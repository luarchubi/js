let bookings = [];
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
  bookings.push(activity);
  div.innerHTML += `
<h6> clase: <h6>  ${activity.clase}
<h6> turno: <h6>${activity.turno}
<button name= "delete" id ="${activity.clase}" value= "${activity.clase}" >  borrar </button>
`;
  listaReservas.appendChild(div);
  formulario.reset();
  // guardarReserva(bookings);
};

//ELIMINAR RESERVA

const eliminar = (clase) => {
  bookings.forEach((booking, index) => {
    if (booking.title === clase) {
      bookings.splice(index, 1);
    }
  });
  displayReserva(bookings);
  console.log(clase, bookings);

  // guardarReserva(bookings);
};

const displayReserva = (bookings) => {
  listaReservas.innerHTML = "";
  bookings.forEach((activity) => {
    const div = document.createElement("div");
    div.innerHTML += `
<h6> clase: <h6>  ${activity.clase}  turno: ${activity.turno}
<button name= "delete" id ="${activity.clase}"" value= "${activity.clase}" > borrar </button>
`;
    listaReservas.appendChild(div);
  });
};

//LISTENERS
formulario.addEventListener("click", (e) => eliminar(e.target.value));

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = new FormData(formulario);
  const actividad1 = form.get("actividad");
  const turno1 = form.get("turno");
  const nuevaReserva = crearReserva(actividad1, turno1);
  mostrarReserva(nuevaReserva);
});

//STORAGES
// const guardarReservas = (reservas) => {
//   localStorage.setItem("reservas", JSON.stringify(reservas));
// };

// const getReservas = () => {
//   const reservasGuardadas = JSON.parse(localStorage.getItem("reservas"));
//   return reservasGuardadas;
// };
