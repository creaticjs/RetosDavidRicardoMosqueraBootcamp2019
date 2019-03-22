class Nota {
  constructor(tipo, valor) {
    this.tipo = tipo
    this.valor = valor
  }
}

let arrayNotas = [];
let tablaNotas = document.getElementById('tablaNotas');
let titulo = document.getElementById('titulo');
// let tipo = document.getElementById('tipo');
// let valor = document.getElementById('nota')
let nota1 = document.getElementById('nota1');
let nota2 = document.getElementById('nota2');
let nota3 = document.getElementById('nota3');
let nota4 = document.getElementById('nota4');

const agregarNota = () => {
  borrarFilas();
  // arrayNotas.push(new Nota(tipo.value, valor.value))
  cargarDatos(arrayNotas);
}

function calcularMedia() {
  borrarFilas();
  setNotas();
  cargarDatos(arrayNotas);
  const media = (parseFloat(nota1.value)+parseFloat(nota2.value)+parseFloat(nota3.value)+parseFloat(nota4.value))/4
  const puntuacion = calcularPuntuacion(media)
  titulo.innerHTML = `Notas del Estudiante: MEDIA = ${media}, PUNTUACION = ${puntuacion} `
}

function borrarFilas() {
  let tablaNotas = document.getElementById('tablaNotas');
  // console.log('tabla notas',tablaNotas.rows.length )
  for (let i = 0; i <= tablaNotas.rows.length + 1; i++) {
    tablaNotas.deleteRow(1);
    //console.log('index: '+ i)  
  }
}

function cargarDatos(data) {
  data.forEach((nota, index) => {
    let row = tablaNotas.insertRow(index + 1);
    let cont = 0
    for (const key in nota) {
      if (nota.hasOwnProperty(key)) {
        let cell = row.insertCell(cont)
        cell.innerHTML = nota[key];
      }
      cont++
    }
  })
}

const setNotas = () => {
  arrayNotas = []
  arrayNotas.push(new Nota('Nota 1', nota1.value))
  arrayNotas.push(new Nota('Nota 2', nota2.value))
  arrayNotas.push(new Nota('Nota 3', nota3.value))
  arrayNotas.push(new Nota('Nota 4', nota4.value))
}

const calcularPuntuacion = (media) => {
  if (media >= 0 && media <= 59) {
    return 'E'
  }
  if (media > 59 && media <= 69) {
    return 'D'
  }
  if (media > 69 && media <= 79) {
    return 'C'
  }
  if (media > 79 && media <= 89) {
    return 'B'
  }
  if (media > 89 && media <= 100) {
    return 'A'
  }
}