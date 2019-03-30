let terminosCal = document.getElementById('terminos');
let resultado = document.getElementById('resultado');

const calcular = () => {
  let terminos = parseInt(terminosCal.value);
  let pi = 0;
  let num = 2;
  let den = 1;
  if (terminos > 0) {
    for (let i = 0; i < terminos; i++) {
      if (i === 0) {
        pi = num / den;
      } else {
        if (i % 2 === 0) {
          num = num + 2;
        } else {
          den = den + 2;
        }        
        pi = pi * (num / den);
      }
    }    
    pi = pi * 2;
    resultado.innerHTML = `Valor de pi con ${terminos} terminos = ${pi}`    
  } else {
    alert('terminos validos solo mayores que 0')
  }  
}