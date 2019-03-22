let ano = document.getElementById('ano');
let resultado = document.getElementById('resultado');

const verificar = () => {
  let anoParse = parseInt(ano.value);
  if (((anoParse % 4 == 0) && (anoParse % 100 != 0 )) || (anoParse % 400 == 0)){
    resultado.innerHTML = `El año ${anoParse} es bisiesto`
  } else {
    resultado.innerHTML = `El año ${anoParse} no es bisiesto`
  }
  resultado.style.display = 'inline'
}  