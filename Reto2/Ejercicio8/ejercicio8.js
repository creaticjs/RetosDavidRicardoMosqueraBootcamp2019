const numerosObjeto = {
  uno: 1,
  dos: 2,
  tres: 3,
  cuatro: 4,
  cinco: 5,
  seis: 6,
  siete: 7,
  ocho: 8,
  nueve: 9,
  diez: 10,
  once: 11,
  doce: 12,
  trece: 13,
  catorce: 14,
  quince: 15,  
  veinte: 20,
  veintiuno: 21,
  veintidos: 22,
  veintitres: 23,
  veinticuatro: 24,
  veinticinco: 25,
  veintiseis: 26,
  veintisiete: 27,
  veintiocho: 28,
  veintinueve: 29,
  treinta: 30,
  cuarenta: 40,
  cincuenta: 50,
  sesenta: 60,
  setenta: 70,
  ochenta: 80,
  noventa: 90,
  cien: 100,
  ciento: 100,
  doscientos: 200,
  trescientos: 300,
  cuatrocientos: 400,
  quinientos: 500,
  seiscientos: 600,
  setecientos: 700,
  ochocientos: 800,
  novecientos: 900,
}

let numeroPalabra = document.getElementById('numeroPalabra');
let numeroEntero = document.getElementById('numeroEntero');

const convertirNumero = () => {
  let numeroConvertido = 0;
  let numerosPalabras = [];
  let centenas = 0;
  let decenas = 0;
  let unidades = 0;
  numerosPalabras = convertirOracion(numeroPalabra.value);
  let numeroDePalabras = numerosPalabras.length
  // console.log('numero palabras', numeroDePalabras)
  if (numeroDePalabras === 1) {
    // console.log('centenas', numerosObjeto[numerosPalabras[0]])
    numeroConvertido = numerosObjeto[numerosPalabras[0]];    
  }
  if (numeroDePalabras === 2) {
    // centenas = numerosObjeto[numerosPalabras[0]];       
    // decenas = numerosObjeto[numeroDePalabras[1]];    
    // unidades = 0   
    numeroConvertido = numerosObjeto[numerosPalabras[0]] + numerosObjeto[numerosPalabras[1]];       
  }
  if (numeroDePalabras > 2) {
    // centenas = numerosObjeto[numerosPalabras[0]];    
    // decenas = numerosObjeto[numerosPalabras[1]];
    // unidades = numerosObjeto[numerosPalabras[3]];
    numeroConvertido = (numerosObjeto[numerosPalabras[0]] + numerosObjeto[numerosPalabras[1]]) + numerosObjeto[numerosPalabras[3]]    
  }
  numeroEntero.innerHTML = `Numero convertido = ${numeroConvertido}`
  numeroEntero.style.display = 'inline';
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