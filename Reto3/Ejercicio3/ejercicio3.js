let numeroN = document.getElementById('numeroN');
let numeroAgregar = document.getElementById('numeroAgregar');
let label = document.getElementById('labelNumero');
let containerNumeroN = document.getElementById('containerN')
let containerNumeroAgregar = document.getElementById('containerNumero')
let resultado = document.getElementById('resultado');
let resultado2 = document.getElementById('resultado2');

let arrayNumeros = [];
let maximoNumeros = 0;
let numeroActual = 0;

const setN = () => {
  numeroActual = 1;
  maximoNumeros = parseInt(numeroN.value);
  label.innerText = `Numero ${arrayNumeros.length + 1}:`
  containerNumeroN.style.display = 'none';
  containerNumeroAgregar.style.display = 'inline'
}

const agregar = () => {
  if(numeroActual <= maximoNumeros) {
    numeroActual++;
    arrayNumeros.push(parseFloat(numeroAgregar.value));   
    label.innerText = `Numero ${arrayNumeros.length + 1}:`
    numeroAgregar.value = ''
  } 
  if (numeroActual > maximoNumeros) {
    containerNumeroAgregar.style.display = 'none';
    // mayor - menor
    arrayNumeros.sort((a,b)=>{ return b-a })
    let mayor = arrayNumeros[0];
    console.log('mayor menor', arrayNumeros);
    // menor - mayor
    arrayNumeros.sort((a,b)=>{ return a-b })
    let menor = arrayNumeros[0];
    let suma = arrayNumeros.reduce(getSum)
    let media = suma / arrayNumeros.length;
    console.log('media', media);
    
    console.log('menor mayor', arrayNumeros);
    resultado.innerHTML = `El conjunto de numeros N(${maximoNumeros}) es el siguiente: ${arrayNumeros}.`;
    resultado2.innerHTML = `Numero mayor = ${mayor}, Numero menor = ${menor}, Media = ${media}`
  }
}

const getSum = (total, num) => {
  return total + num;
}


