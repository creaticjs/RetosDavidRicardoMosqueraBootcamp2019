let numero = document.getElementById('numeroN');
let resultado = document.getElementById('resultado')

const calcular = () => {
  const numeroN = parseInt(numero.value);
  let acum = 0;
  for (let i = 1; i <= numeroN; i++) {
    acum = acum + (i / Math.pow(2, i));    
  }
  resultado.innerHTML = `La suma de los terminos de la serie es: ${acum}`
}