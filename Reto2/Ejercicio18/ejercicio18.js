const opciones = {
  1: 'Positivo',
  2: 'Cero',
  3: 'Negativo'
}

let numero = document.getElementById('numero');
let resultado = document.getElementById('resultado');

const verificar = () => {
  let opcion = 0;
  let numeroVerificar = parseFloat(numero.value);
  if (numeroVerificar === 0) {
    opcion = '2'
  }
  if (numeroVerificar > 0) {
    opcion = '1'
  }
  if (numeroVerificar < 0) {
    opcion = '3'
  }
  resultado.innerHTML = `El numero ${numeroVerificar} es ${opciones[opcion]}`
  resultado.style.display = 'inline'
}  