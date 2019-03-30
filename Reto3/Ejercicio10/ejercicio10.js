let num1 = document.getElementById('numero1');
let num2 = document.getElementById('numero2')
let resultado = document.getElementById('resultado')

const calcular = () => {
  const numero1 = Math.abs(parseInt(num1.value));
  const numero2 = Math.abs(parseInt(num2.value));
  resultado.innerHTML = `MCD: ${funciones.calcularMCD(numero1,numero2)}`;
}

const funciones = {
  calcularMCD: (numero1, numero2) => {
    let n1 = Math.max(numero1, numero2);
    let n2 = Math.min(numero1, numero2);
    let nAux;
    do {
      nAux = n2;
      n2 = n1 % n2;
      n1 = nAux;
    } while (n2 !== 0);
    return n1
  }
}