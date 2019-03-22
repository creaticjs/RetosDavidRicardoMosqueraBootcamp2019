let radioInput = document.getElementById('radio');
let resultado = document.getElementById('resultado');

const calcularResultado = () => {
  const radio = parseFloat(radioInput.value)
  const pi = 3.1416;
  const diametro = radio * 2;
  const circunferencia = pi * diametro;
  const area = pi * Math.pow(radio, 2);
  resultado.innerHTML = `Circunferencia = ${circunferencia}, Area = ${area}, Diametro = ${diametro}`
  resultado.style.display = 'inline'
}