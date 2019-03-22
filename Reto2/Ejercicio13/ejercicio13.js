let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');
let e = document.getElementById('e');
let f = document.getElementById('f');
let resultado = document.getElementById('resultado');

const calcular = () => {
  let valorA = parseFloat(a.value);
  let valorB = parseFloat(b.value);
  let valorC = parseFloat(c.value);
  let valorD = parseFloat(d.value);
  let valorE = parseFloat(e.value);
  let valorF = parseFloat(f.value);

  const x = ((valorC * valorE) - (valorB * valorF)) / ((valorA* valorE) - (valorB*valorD));
  const y = ((valorA * valorF) - (valorC * valorD)) / ((valorA* valorE) - (valorB*valorD));
  resultado.innerHTML = `Resultado de X = ${x} , Y = ${y} `
}