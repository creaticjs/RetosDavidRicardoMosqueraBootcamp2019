let resultado = document.getElementById('resultado');
let m1 = document.getElementById('m1');
let m2 = document.getElementById('m2');
let d = document.getElementById('d');
const op = 6.673 * (Math.pow(10,-8));

const calcularFuerza = () => {
  const valorM1 = parseFloat(m1.value);
  const valorM2 = parseFloat(m2.value);
  const valorD = parseFloat(d.value)
  resultado.innerHTML = `La fuerza de atraccion entre las dos masas es de: ${fuerza(valorM1,valorM2,valorD)} cm*g/sg^2`
}

const fuerza = (m1, m2, d) => (op * (m1 * m2)) / Math.pow(d, 2)

