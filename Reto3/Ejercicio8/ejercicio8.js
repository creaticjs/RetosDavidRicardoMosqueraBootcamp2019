let valorX = document.getElementById('valorX');
let containerResultado = document.getElementById('containerResultado');

const calcular = () => {
  let x = parseInt(valorX.value);
  let p = document.createElement("P");
  containerResultado.innerHTML = ''
  p.innerHTML = `<h2>Valor 1 = 1</h2>`
  containerResultado.appendChild(p);
  let p2 = document.createElement("P");
  p2.innerHTML = `<h2>Valor 2 = ${1 + x}</h2>`
  containerResultado.appendChild(p2);
  let acum = 1 + x;
  for (let index = 3; index <= 100; index++) {
    let operacion = (Math.pow(x, index-1)) / (calcularFactorial(index-1))
    acum = acum + operacion;
    let parrafo = document.createElement("P");
    parrafo.innerHTML = `<h2>Valor ${index} = ${acum}</h2>`
    containerResultado.appendChild(parrafo);
  }
  //calcularFactorial(99)
}

const calcularFactorial = (num) => {
  let acum = 1;
  for (let index = 1; index <= num; index++) {
    acum = acum * index
  }
  return acum
}