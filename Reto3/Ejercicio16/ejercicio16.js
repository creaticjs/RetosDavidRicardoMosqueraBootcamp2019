let numero = document.getElementById('numero');
let resultado = document.getElementById('resultado');

const calcular = () => {
  const numeroPequeno = parseInt(numero.value);
  let sumaNumeros = 0;

  for (let i = 0; sumaNumeros <= numeroPequeno; i++) {
    sumaNumeros = sumaNumeros + i;
    if (numeroPequeno == 1 || numeroPequeno == 0) {
      resultado.innerHTML = `El natural mas pequeño es: ${numeroPequeno}`
      return
    } else if (sumaNumeros > numeroPequeno) {
      resultado.innerHTML = `El natural mas pequeño es: ${i}`
      return
    }
  }
}