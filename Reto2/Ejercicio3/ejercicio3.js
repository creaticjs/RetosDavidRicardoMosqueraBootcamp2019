let masaInput = document.getElementById('masa');
let resultado = document.getElementById('resultado');

const calcular = () => {
  const masa = parseFloat(masaInput.value);
  const velocidadluz = 2.997925 * Math.pow(10, 10);
  const resultadoOperacion = masa * (Math.pow(velocidadluz, 3));
  resultado.innerHTML = `La cantidad de energia producida es de: ${resultadoOperacion} g*m^2/sg^2`;
  
}