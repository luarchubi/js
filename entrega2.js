// //creo 2 filtrados: por profesor o por turno para que el usuario sepa que disponibilidad hay.

const filtradoTurno = () => {
  let filtrar = prompt(
    "Puedes filtrar por turno mañana, tarde o noche. ¿Qué turno deseas?"
  );
  const respuesta = clases.filter(
    (actividad) => actividad.turno.toLowerCase() === filtrar.toLowerCase()
  );
  const confirmacion = respuesta.map((actividad) => {
    return actividad.clase;
  });
  alert(
    "estas son las clases disponibles por la " +
      filtrar +
      ": " +
      `\n` +
      confirmacion.join(`\n`)
  );
  console.log(confirmacion);
};

const filtradoProfe = () => {
  let filtrar = prompt("¿Con cual profe querés entrenar?");
  const respuesta = clases.filter(
    (actividad) => actividad.profesor.toLowerCase() === filtrar.toLowerCase()
  );
  const confirmacion = respuesta.map((actividad) => {
    return actividad.clase;
  });
  alert(
    "estas son las clases disponibles con " +
      filtrar +
      ": " +
      `\n` +
      confirmacion.join(`\n`)
  );
};

// consulto al usuario qué filtrado quiere usar

let filtro = prompt("Elige tu opción de filtrado: profesor o turno");
if (filtro === "profesor") {
  filtradoProfe();
}
if (filtro === "turno") {
  filtradoTurno();
}

// funcion eleccion que va a filtrar el array de objetos y verificar si existe un objeto con las condiciones que elige el usuario -clase- y -turno de clase-. Si devuelve un array vacio es que no hay disponibilidad de esa clase en el turno elegido. Caso contrario se agrega la clase a las reservas del usuario.

let misReservas = [];
const eleccion = () => {
  let actividad = prompt("Indica qué clase quieres hacer").toLowerCase();
  let turno = prompt("¿en qué turno?").toLowerCase();
  let dispoClases = clases.filter(
    (element) => element.clase === actividad && element.turno === turno
  );

  if (dispoClases.length !== 0) {
    dispoClases.forEach((objeto) => {
      misReservas.push(objeto);
    });

    alert("has reservado " + actividad);
  } else {
    alert("Lo sentimos, no hay disponibilidad. Prueba en otro turno");
    eleccion();
  }
};
eleccion();

//se ofrece al usuario la lista de clases con descuento. Creo un condicional para mostrar los objetos que tienen descuento

let promociones = confirm(
  "Reservando una clase, tienes otra bonificada. Acepta para conocer las clases de prueba gratis"
);
if (promociones) {
  clases.forEach((element) => {
    if (element.tieneDescuento === true) {
      alert(
        element.clase + ` a las ` + element.horario + ` con ` + element.profesor
      );
    }
  });

  let agregarClase = prompt("¿qué clase deseas agregar a tu reserva?");
  let clasesPromo = clases.filter((element) => element.clase === agregarClase);
  clasesPromo.forEach((objeto) => {
    misReservas.push(objeto);
  });
  console.log(misReservas);
  alert("has agregado " + agregarClase + " a tus reservas");
} else {
  alert("no has agregado la clase bonificación");
}
