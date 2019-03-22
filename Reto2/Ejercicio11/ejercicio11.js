let digitoA = document.getElementById('digitoA');
let digitoB = document.getElementById('digitoB');
let digitoC = document.getElementById('digitoC');
let digitoD = document.getElementById('digitoD');
let resultado = document.getElementById('resultado')

const calcular = () => {
  let valorA = digitoA.value;
  let valorB = digitoB.value;
  let valorC = digitoC.value;
  let valorD = digitoD.value;

  let numeroN = parseInt(`${valorA}${valorB}${valorC}${valorD}`);
  let centena = parseInt(`${valorC}${valorD}`);

  if (centena < 50) {
    resultado.innerHTML = `Numero N = ${numeroN}, resultado redondeado = ${numeroN - centena}`
  }
  if (centena >= 50) {
    let diferencia = 100 - centena
    resultado.innerHTML = `Numero N = ${numeroN}, resultado redondeado = ${numeroN + diferencia}`
  }
  resultado.style.display = 'inline'

}