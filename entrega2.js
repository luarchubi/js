const filtradoTurno = () => {
  let filtrar = prompt(
    "Puedes filtrar por turno mañana, tarde o noche. ¿Qué turno deseas?"
  );
  const respuesta = clases.filter((actividad) => actividad.turno === filtrar);
  alert("estas son las clases disponibles por la " + filtrar + ":" + respuesta);
};

const filtradoProfe = () => {
  let filtrar = prompt("¿Con cual profe querés entrenar?");
  const respuesta = clases.filter(
    (actividad) => actividad.profesor.toLowerCase() === filtrar.toLowerCase()
  );
  alert("estas son las clases disponibles con " + filtrar + ":" + respuesta);
};

let filtro = prompt("Opciones de filtrado: profesor o turno");
if (filtro === "profesor") {
  filtradoProfe();
}
if (filtro === "turno") {
  filtradoTurno();
}
