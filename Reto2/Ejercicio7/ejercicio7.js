let fechaUsual = document.getElementById('fechaUsual');
let fechaConvertida = document.getElementById('fechaConvertida');

const convertirFecha = () => {
  let mes = ''
  let palabrasConvertir = []
  palabrasConvertir = convertirOracion(fechaUsual.value);
  palabrasConvertir[0] = palabrasConvertir[0].slice(0, palabrasConvertir[0].length - 1)
  palabrasConvertir[1] = palabrasConvertir[1].toLowerCase();
  switch (palabrasConvertir[1]) {
    case 'enero':
      mes = '1'
      break;

    case 'febrero':
      mes = '2'
      break;

    case 'marzo':
      mes = '3'
      break;

    case 'abril':
      mes = '4'
      break;

    case 'mayo':
      mes = '5'
      break;

    case 'junio':
      mes = '6'
      break;

    case 'julio':
      mes = '7'
      break;

    case 'agosto':
      mes = '8'
      break;

    case 'septiembre':
      mes = '9'
      break;

    case 'octubre':
      mes = '10'
      break;

    case 'noviembre':
      mes = '11'
      break;

    case 'diciembre':
      mes = '12'
      break;

    default:
      mes = 'mes invalido o mal escrito'
      break;
  }
  console.log('palabras convertir', palabrasConvertir);
  fechaConvertida.innerHTML = `Fecha convertida = ${palabrasConvertir[0]} ${mes} ${palabrasConvertir[2]}`
  fechaConvertida.style.display = 'inline'
}

const convertirOracion = (search) => {
  let existeEspacioAlFinal = false;
  let index;
  let palabra;
  let palabras = [];
  while (search.indexOf(' ') !== -1) {
    index = search.indexOf(' ');
    palabra = search.substring(0, index);
    palabras.push(palabra);
    if (index + 1 === search.length) {
      existeEspacioAlFinal = true;
      break;
    } else {
      search = search.substring(index + 1, search.length);
    }
  }
  if (!existeEspacioAlFinal) palabras[palabras.length] = search;
  return palabras;
};