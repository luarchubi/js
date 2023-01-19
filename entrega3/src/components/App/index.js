//muestras listado de clases al clickear boton "ver clases disponibles"
const showClases = async () => {
  const contenedor = document.getElementById("programacion");
  const clases = await activityController();

  let ocultar = document.createElement("button");
  ocultar.innerText = `ocultar`;
  ocultar.classList.add("ocultar");

  clases.forEach((elemento) => {
    let div = document.createElement("div");
    div.innerHTML = `       
            <section class="row w-25 p-3 d-inline flex justify-content-around ">
              <div class= "card text-dark bg-light  " style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title ">${elemento.clase}</h5>
                    <p class="card-text">Profesor:  ${elemento.profesor}.</p>
                    <p class="card-text"> Horario: ${elemento.horario}.</p>
                  </div>
              </div>
             </section>
  `;
    contenedor.appendChild(div);
    contenedor.appendChild(ocultar);
  });
};

//oculta el listato de clases
const hideClases = () => {
  let screen = document.getElementById("programacion");
  screen.innerText = "";
};

let clickShow = document.getElementById("listadoClases");
clickShow.addEventListener("click", showClases);

let clickHide = document.getElementsByTagName("button");
clickHide, addEventListener("click", hideClases);
