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
