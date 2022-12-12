//creo 2 filtrados: por profesor o por turno para que el usuario sepa que disponibilidad hay.

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

let filtro = prompt("Elige tu opción de filtrado: profesor o turno");
if (filtro === "profesor") {
  filtradoProfe();
}
if (filtro === "turno") {
  filtradoTurno();
}

const eleccion = () => {
  let misReservas = [];
  let actividad = prompt("Indica qué clase quieres hacer");
  let turno = prompt("¿en qué turno?");
  let dispoClases = clases.filter(
    (element) => element.clase === actividad && element.turno === turno
  );

  if (dispoClases.length === 0) {
    alert("Lo sentimos, no hay disponibilidad. Prueba en otro turno");
  } else {
    alert("has reservado con éxito: " + actividad + " ¤ " + turno);
    misReservas.push(actividad);
    console.log(misReservas);
  }
};
eleccion();

let promociones = confirm("Quieres saber la lista de clases con descuentos?");
if (promociones) {
  clases.map((element) => {
    if (element.tieneDescuento === true) {
      alert(
        element.clase + ` a las ` + element.horario + ` con ` + element.profesor
      );
    }
  });
  let agregarClase = confirm("¿deseas agregar otra clase?");
  eleccion();
}
