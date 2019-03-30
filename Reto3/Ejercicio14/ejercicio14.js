let numeroLineas = document.getElementById('numeroLineas');
let resultado = document.getElementById('resultado');

const calcular = () => {

  let lineas = parseInt(numeroLineas.value);
  let dibujo = '';
  let salto = '<br>'

  for (let x = 1; x <= lineas; x++) {
      let point = '*'
      let linePoint = ''
      for (let j = 1; j <= x; j++) {
          linePoint += point
      }
      dibujo += linePoint + salto;
  }
  resultado.innerHTML = dibujo
  // document.getElementById('figura').innerHTML = '<span class="text-primary">' + resultado + ' </span>';
}