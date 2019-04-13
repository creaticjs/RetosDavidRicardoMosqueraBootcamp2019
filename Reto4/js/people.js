let datosTabla = [];
let filmsData = [];
let speciesData = [];
let vehiclesData = [];
let starshipsData = [];
let tabla = document.getElementById("tablaDatos");
let tablaFilms = document.getElementById("tablaFilms");
let tablaSpecies = document.getElementById("tablaSpecies");
let tablaVehicles = document.getElementById("tablaVehicles");
let tablaStarships = document.getElementById("tablaStarships");
let titulo = document.getElementById("titulo");

let paginaActual = "1";
let allCharacters = [];
let characteresPag1 = [];
let loading = true;

// var app = new Vue({
//   el: "#app",
//   data: {
//     cargando: false,
//     personajesStar: []
//   },
//   methods: {
//     setData: person => {
//       this.personajesStar = person;
//       console.log("this personajes", this.personajesStar);
//     }
//   }
// });

function cargarDatos(url) {
  return new Promise(function(resolve, reject) {
    let req = new XMLHttpRequest();
    req.onload = function() {
      //console.log(this.responseText);
      resolve(JSON.parse(this.responseText));
    };
    req.onerror = function() {
      reject(Error("Error 🤮"));
    };
    req.open("GET", url, true);
    req.send();
  });
}

async function cargarDatosTablaHtml(array, tablaOpcion) {
  let arrayPromesas = array.map(element => cargarDatos(element));
  let data = await Promise.all(arrayPromesas);
  switch (tablaOpcion) {
    case "films":
      console.log("entre a films");
      $("#paginador").hide();
      $("#buttonsChecked").hide();
      $("#tituloPagina").hide();
      borrarFilas(tablaFilms);
      cargarDatosTablaFilms(data);
      tabla.style.display = "none";
      tablaFilms.style.display = "inline";
      tablaSpecies.style.display = "none";
      tablaVehicles.style.display = "none";
      tablaStarships.style.display = "none";
      console.log(data);
      break;
    case "species":
      $("#paginador").hide();
      $("#buttonsChecked").hide();
      $("#tituloPagina").hide();
      borrarFilas(tablaSpecies);
      cargarDatosTablaSpecies(data);
      tabla.style.display = "none";
      tablaFilms.style.display = "none";
      tablaSpecies.style.display = "inline";
      tablaVehicles.style.display = "none";
      tablaStarships.style.display = "none";
      console.log(data);
      break;
    case "vehicles":
      $("#paginador").hide();
      $("#buttonsChecked").hide();
      $("#tituloPagina").hide();
      borrarFilas(tablaVehicles);
      cargarDatosTablaVehicles(data);
      tabla.style.display = "none";
      tablaFilms.style.display = "none";
      tablaSpecies.style.display = "none";
      tablaVehicles.style.display = "inline";
      tablaStarships.style.display = "none";
      //console.log('estoy en async')
      console.log("estoy en async", data);
      break;
    case "starships":
      $("#paginador").hide();
      $("#buttonsChecked").hide();
      $("#tituloPagina").hide();
      borrarFilas(tablaStarships);
      cargarDatosTablaStarships(data);
      tabla.style.display = "none";
      tablaFilms.style.display = "none";
      tablaSpecies.style.display = "none";
      tablaVehicles.style.display = "none";
      tablaStarships.style.display = "inline";
      console.log(data);
      break;
    default:
      break;
  }
}

const films = (array, name) => {
  titulo.innerHTML = name + ": Films";
  console.log(array);
  cargarDatosTablaHtml(array, "films");
};

const species = (array, name) => {
  titulo.innerHTML = name + ": Species";
  console.log(array);
  cargarDatosTablaHtml(array, "species");
};

const vehicles = (array, name) => {
  titulo.innerHTML = name + ": Vehicles";
  console.log("estoy en vehicles", array);
  cargarDatosTablaHtml(array, "vehicles");
};

const starships = (array, name) => {
  titulo.innerHTML = name + ": Starships";
  console.log(array);
  cargarDatosTablaHtml(array, "starships");
};

const detallePlaneta = planeta => {
  console.log(planeta);
};

const detalle = detalle => {
  console.log(detalle);
};

function cargarDatosTabla(data) {
  console.log(data);
  data.forEach((item, index) => {
    // item.urlImage = 'https://cdn3.iconfinder.com/data/icons/halloween-avatar-01/348/halloween_avatar-20-512.png'
    item.urlImage = `https://robohash.org/${item.name}?set=set2`;
    let row = tabla.insertRow(index + 1);
    let cont = 0;
    for (const key in item) {
      // if (index === 0) {
      //   console.log(key)
      // }
      if (item.hasOwnProperty(key)) {
        let cell = row.insertCell(cont);
        switch (key) {
          case "films":
            addButtonToCells(item, key, cell, films);
            break;
          case "species":
            addButtonToCells(item, key, cell, species);
            break;
          case "vehicles":
            addButtonToCells(item, key, cell, vehicles);
            break;
          case "starships":
            addButtonToCells(item, key, cell, starships);
            break;

          case "homeworld":
            let buttonUrl = document.createElement("a");
            buttonUrl.role = "button";
            buttonUrl.className = "btn btn-outline-warning";
            buttonUrl.href = item[key];
            // buttonUrl.onclick = function () {
            //   let url = item[key];
            //   detalle(url);
            // };
            let contenidoUrl = document.createTextNode("homeworld");
            buttonUrl.appendChild(contenidoUrl);
            cell.appendChild(buttonUrl);
            break;

          case "url":
            crearBotonHref(item, key, cell);
            break;

          case "created":
            break;

          case "edited":
            break;

          case "urlImage":
            let imageUrl = document.createElement("img");
            imageUrl.src = item[key];
            imageUrl.style.width = "35px";
            imageUrl.style.height = "35px";
            cell.appendChild(imageUrl);
            break;
          default:
            cell.innerHTML = item[key];
            break;
        }
      }
      cont++;
    }
  });
}

function cargarDatosTablaFilms(data) {
  console.log(data);
  data.forEach((item, index) => {
    let row = tablaFilms.insertRow(index + 1);
    let cont = 0;
    for (const key in item) {
      // if (index === 0) {
      //   console.log(key)
      // }
      if (item.hasOwnProperty(key)) {
        let cell = row.insertCell(cont);
        switch (key) {
          case "films":
            addButtonToCells(item, key, cell, films);
            break;
          case "species":
            addButtonToCells(item, key, cell, species);
            break;
          case "vehicles":
            addButtonToCells(item, key, cell, vehicles);
            break;
          case "starships":
            addButtonToCells(item, key, cell, starships);
            break;

          case "planets":
            addButtonToCells(item, key, cell, detallePlaneta);
            break;

          case "characters":
            addButtonToCells(item, key, cell, detallePlaneta);
            break;

          case "url":
            crearBotonHref(item, key, cell);
            break;

          case "created":
            break;

          case "edited":
            break;

          case "opening_crawl":
            cell.innerHTML = "Ver Detalle";
            break;

          // case 'urlImage':
          //   let imageUrl = document.createElement("img");
          //   imageUrl.src = item[key]
          //   imageUrl.style.width = '35px'
          //   imageUrl.style.height = '35px'
          //   cell.appendChild(imageUrl);
          // break;
          default:
            cell.innerHTML = item[key];
            break;
        }
      }
      cont++;
    }
  });
}

function cargarDatosTablaSpecies(data) {
  console.log(data);
  data.forEach((item, index) => {
    let row = tablaSpecies.insertRow(index + 1);
    let cont = 0;
    for (const key in item) {
      // if (index === 0) {
      //   console.log(key)
      // }
      if (item.hasOwnProperty(key)) {
        let cell = row.insertCell(cont);
        switch (key) {
          case "films":
            addButtonToCells(item, key, cell, films);
            break;
          case "people":
            addButtonToCells(item, key, cell, detallePlaneta);
            break;

          case "url":
            crearBotonHref(item, key, cell);
            break;

          case "created":
            break;

          case "edited":
            break;

          case "homeworld":
            cell.innerHTML = "Ver Detalle";
            break;

          // case 'urlImage':
          //   let imageUrl = document.createElement("img");
          //   imageUrl.src = item[key]
          //   imageUrl.style.width = '35px'
          //   imageUrl.style.height = '35px'
          //   cell.appendChild(imageUrl);
          // break;
          default:
            cell.innerHTML = item[key];
            break;
        }
      }
      cont++;
    }
  });
}

function cargarDatosTablaVehicles(data) {
  console.log(data);
  data.forEach((item, index) => {
    let row = tablaVehicles.insertRow(index + 1);
    let cont = 0;
    for (const key in item) {
      if (index === 0) {
        //console.log(key)
        console.log(item);
      }
      if (item.hasOwnProperty(key)) {
        let cell = row.insertCell(cont);
        switch (key) {
          case "films":
            addButtonToCells(item, key, cell, films);
            break;
          case "pilots":
            addButtonToCells(item, key, cell, detallePlaneta);
            break;

          case "url":
            crearBotonHref(item, key, cell);
            break;

          case "created":
            break;

          case "edited":
            break;

          // case 'urlImage':
          //   let imageUrl = document.createElement("img");
          //   imageUrl.src = item[key]
          //   imageUrl.style.width = '35px'
          //   imageUrl.style.height = '35px'
          //   cell.appendChild(imageUrl);
          // break;
          default:
            cell.innerHTML = item[key];
            break;
        }
      }
      cont++;
    }
  });
}

function cargarDatosTablaStarships(data) {
  console.log(data);
  data.forEach((item, index) => {
    let row = tablaStarships.insertRow(index + 1);
    let cont = 0;
    for (const key in item) {
      // if (index === 0) {
      //   console.log(key)
      // }
      if (item.hasOwnProperty(key)) {
        let cell = row.insertCell(cont);
        switch (key) {
          case "films":
            addButtonToCells(item, key, cell, films);
            break;
          case "pilots":
            addButtonToCells(item, key, cell, detallePlaneta);
            break;

          case "url":
            crearBotonHref(item, key, cell);
            break;

          case "created":
            break;

          case "edited":
            break;

          // case 'urlImage':
          //   let imageUrl = document.createElement("img");
          //   imageUrl.src = item[key]
          //   imageUrl.style.width = '35px'
          //   imageUrl.style.height = '35px'
          //   cell.appendChild(imageUrl);
          // break;
          default:
            cell.innerHTML = item[key];
            break;
        }
      }
      cont++;
    }
  });
}

function crearBotonHref(item, key, cell) {
  let buttonUrl = document.createElement("a");
  buttonUrl.role = "button";
  buttonUrl.className = "btn btn-outline-warning";
  buttonUrl.href = item[key];
  // buttonUrl.onclick = function () {
  //   let url = item[key];
  //   detalle(url);
  // };
  let contenidoUrl = document.createTextNode("detalle");
  buttonUrl.appendChild(contenidoUrl);
  cell.appendChild(buttonUrl);
}

function addButtonToCells(item, key, cell, funcion) {
  let button = document.createElement("button");
  button.className = "btn btn-warning";
  button.onclick = function() {
    let array = item[key];
    funcion(array, item.name);
  };
  let contenido = document.createTextNode(key);
  button.appendChild(contenido);
  cell.appendChild(button);
}

function borrarFilas(tablaParametros) {
  let tableHeaderRowCount = 1;
  let rowCount = tablaParametros.rows.length;
  for (let i = tableHeaderRowCount; i < rowCount; i++) {
    tablaParametros.deleteRow(tableHeaderRowCount);
    console.log("index: " + i);
  }
}

async function cambiarPagina(pag) {
  $("#loading").show();
  $("#contenidoMostrar").hide();
  try {
    $("#tituloPagina").text(`pagina ${pag}`);
    borrarFilas(tabla);
    let datos = await cargarDatos(`https://swapi.co/api/people/?page=${pag}`);
    $("#contenedor").html("");
    datos.results.forEach(personaje => {
      addCard(personaje);
    });
    console.log("datos cambio pagina", datos);
    cargarDatosTabla(datos.results);
    paginaActual = pag;
    $("#loading").hide();
    $("#contenidoMostrar").show();
  } catch (error) {
    console.log(error);
  }
}

async function getAllCharacters() {
  allCharacters = [];
  characteresPag1 = [];
  let datos = {};
  let cont = 0;
  try {
    do {
      if (cont === 0) {
        datos = await cargarDatos("https://swapi.co/api/people/?page=1");
        $("#contenedor").html("");
        // app.setData(datos.results);
        datos.results.forEach(personaje => {
          addCard(personaje);
        });
        characteresPag1 = datos.results;
        allCharacters.push(...datos.results);
        borrarFilas(tabla);
        cargarDatosTabla(datos.results);
        $("#paginador").show();
      } else {
        datos = await cargarDatos(
          `https://swapi.co/api/people/?page=${cont + 1}`
        );
        allCharacters.push(...datos.results);
      }
      cont++;
      console.log("contador", cont);
      console.log("datos next", datos);
    } while (datos.next !== null);
    $("#loading").hide();
    $("#contenidoMostrar").show();
    console.log("todos los personajes", allCharacters);
    document.getElementById("buscarPersonaje").disabled = false;
    document.getElementById("inputPersonaje").disabled = false;
  } catch (error) {
    alert("Error al cargar datos");
  }
}

$("#people").on("click", () => {
  $("#paginador").show();
});

$("#optionTable").on("click", () => {
  $("#labelTable").addClass("active");
  $("#labelCard").removeClass("active");
  $("#optionTable").attr("checked", true);
  $("#optionCard").attr("checked", false);
  $("#tablaDatos").show();
  $("#containerCards").hide();
});

$("#optionCard").on("click", () => {
  $("#labelTable").removeClass("active");
  $("#labelCard").addClass("active");
  $("#optionTable").attr("checked", false);
  $("#optionCard").attr("checked", true);
  $("#tablaDatos").hide();
  $("#containerCards").show();
});

$("#buscarPersonaje").on("click", () => {
  let value = $("#inputPersonaje")
    .val()
    .toUpperCase();
  let query = Enumerable.From(allCharacters)
    .Where("!!($.name).toUpperCase().match(/^" + value + "/)")
    .ToArray();
  borrarFilas(tabla);
  tabla.style.display = "inline";
  tablaFilms.style.display = "none";
  tablaSpecies.style.display = "none";
  tablaVehicles.style.display = "none";
  tablaStarships.style.display = "none";
  $("#titulo").text("Personajes");
  $("#contenedor").html("");
  $("#buttonsChecked").show();
  if (value !== "") {
    $("#paginador").hide();
    query.forEach(personaje => {
      addCard(personaje);
    });
    cargarDatosTabla(query);
  } else {
    $("#paginador").show();
    $("#tituloPagina")
      .text("pagina 1")
      .show();
    // $('#tituloPagina').
    characteresPag1.forEach(personaje => {
      addCard(personaje);
    });
    cargarDatosTabla(characteresPag1);
  }
});

function addCard(personaje) {
  $("#contenedor").append(`
    <div class="col-md-4">
      <div class="card text-white bg-dark mb-3">
        <img class="card-img-top" src='https://robohash.org/${
          personaje.name
        }?set=set2' alt="Card image cap" style="height: 500px">
        <div class="card-body">
          <h5 class="card-title">${personaje.name}</h5>
          <p class="card-text">Created: ${personaje.created}, Edited: ${
    personaje.edited
  }...</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">        
              <button type="button" class="btn btn-sm btn-outline-secondary" id="${
                personaje.url
              }">Ver Detalle</button>                              
            </div>
            <small class="text-muted">Genero: ${personaje.gender}</small>
          </div>
        </div>
      </div>
    </div>
  `);
}

$("#contenedor").on("click", "button", function() {
  // event.preventDefault();
  const id = $(this).attr("id");
  detallePersonaje(id);
});
$("#volver").on("click", function() {
  $("#buscador").show();
  $("#nav2").show();
  $("#paginador").show();
  $("#contenedor").show();
  $("#containerDetalle").hide();
});

async function detallePersonaje(url) {
  try {
    const personaje = await cargarDatos(url);
    $("#imagenPersonaje").attr(
      "src",
      `https://robohash.org/${personaje.name}?set=set2`
    );
    $("#nombrePersonaje").text(personaje.name);
    $("#created").html("<b>Created: </b>" + personaje.created);
    $("#birth_year").html("<b>Birth year: </b>" + personaje.birth_year);
    $("#edited").html("<b>Edited: </b>" + personaje.edited);
    $("#eye_color").html("<b>Eye color: </b>" + personaje.eye_color);
    $("#gender").html("<b>Gender: </b>" + personaje.gender);
    $("#hair_color").html("<b>Hair color: </b>" + personaje.hair_color);
    $("#mass").html("<b>Mass: </b>" + personaje.mass);
    $("#skin_color").html("<b>Skin color: </b>" + personaje.skin_color);
    $("#detallePersonaje").attr("href", personaje.url);
    // $('#fechaLanzamiento').text(pelicula.release_date)
    // $('#home').attr('href', pelicula.homepage)
    $("#buscador").hide();
    $("#nav2").hide();
    $("#paginador").hide();
    $("#contenedor").hide();
    $("#containerDetalle").show();
    console.log("Personaje", personaje);
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("pagina Cargada🤠");
  // borrarFilas(tabla)
  // cargarDatos('https://swapi.co/api/people/?page=1')
  //   .then(datos => {
  //     console.log(datos)
  //     cargarDatosTabla(datos.results)
  //     $('#paginador').show()
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  getAllCharacters();
});
