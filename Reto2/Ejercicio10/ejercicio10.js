const milesConversion = {
  1000: 'M',
  2000: 'MM',
}

const centenasConversion = {
  100: 'C',
  200: 'CC',
  300: 'CCC',
  400: 'CD',
  500: 'D',
  600: 'DC',
  700: 'DCC',
  800: 'DCCC',
  900: 'CM'
}

const decenasConversion = {
  10: 'X',
  20: 'XX',
  30: 'XXX',
  40: 'XL',
  50: 'L',
  60: 'LX',
  70: 'LXX',
  80: 'LXXX',
  90: 'XC',
}

const unidadesConversion = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
}

let numeroArabigo = document.getElementById('numeroArabigo');
let numeroRomano = document.getElementById('numeroRomano');

const convertirNumero = () => {
  if (numeroArabigo.value.length < 4 || numeroArabigo.value.length > 4) {
    alert('numero invalido intentelo nuevamente');
  } else {
    let numeroRomanoConvertido = ''
    let miles = numeroArabigo.value.slice(0,1);
    let centenas = numeroArabigo.value.slice(1,2);
    let decenas = numeroArabigo.value.slice(2,3);
    let unidades = numeroArabigo.value.slice(3,4);
    miles = miles + '000';
    centenas = centenas + '00';
    decenas = decenas + '0';    
    if (miles) {
      numeroRomanoConvertido = `${milesConversion[miles]}`
    }
    if (centenas !== '000') {
      numeroRomanoConvertido = `${numeroRomanoConvertido}${centenasConversion[centenas]}`
    }
    if (decenas !== '00') {
      numeroRomanoConvertido = `${numeroRomanoConvertido}${decenasConversion[decenas]}`
    }
    if (unidades !== '0') {
      numeroRomanoConvertido = `${numeroRomanoConvertido}${unidadesConversion[unidades]}`
    }
    numeroRomano.innerHTML = `La conversion a numero romano es: ${numeroRomanoConvertido}`
    numeroRomano.style.display = 'inline'
  }
}