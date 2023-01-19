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
<h6> Has reservado:  ${activity.clase}</h6>
<h6> Turno: ${activity.turno}</h6>
<button class = "boton2" name= "delete" id ="${activity.clase}" value= "${activity.clase}" >  borrar </button>
`;
  listaReservas.appendChild(div);
  formulario.reset();
  guardarReservas(bookings);
};

//ELIMINAR RESERVA

const eliminar = (clase) => {
  bookings.forEach((booking, index) => {
    if (booking.clase === clase) {
      bookings.splice(index, 1);
    }
    Swal.fire("La reserva se ha eliminado");
  });
  displayReserva(bookings);

  guardarReservas(bookings);
};

const displayReserva = (bookings) => {
  listaReservas.innerHTML = "";
  bookings.forEach((activity) => {
    const div = document.createElement("div");
    div.innerHTML += `
          <div>
          <h6> Clase: ${activity.clase}</h6>
          <h6> Turno: ${activity.turno}</h6>
          <button class ="boton2" type= "button" name= "delete" id ="${activity.clase}"" value= "${activity.clase}" > borrar </button>
          </div>
          `;
    listaReservas.appendChild(div);
  });
};

//LISTENERS
listaReservas.addEventListener("click", (e) => eliminar(e.target.value));
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = new FormData(formulario);
  const actividad1 = form.get("actividad");
  const turno1 = form.get("turno");
  const nuevaReserva = crearReserva(actividad1, turno1);
  mostrarReserva(nuevaReserva);
});

const btnSend = document.getElementById("send");
btnSend.addEventListener("click", () => {
  Swal.fire({
    icon: "success",
    text: "La reserva fue realizada correctamente!",
  });
});

//STORAGES
const guardarReservas = (reservas) => {
  localStorage.setItem("reservas", JSON.stringify(reservas));
};

const getReservas = () => {
  const reservasGuardadas = JSON.parse(localStorage.getItem("reservas"));
  return reservasGuardadas;
};

const getStorageReservas = () => {
  if (localStorage.getItem("reservas")) bookings = getReservas();
  displayReserva(bookings);
};

getStorageReservas();
