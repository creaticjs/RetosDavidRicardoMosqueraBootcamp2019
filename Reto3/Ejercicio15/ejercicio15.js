const funciones = {
  obtenerDivisores: (cont) => {
    let arrayDivisores = []
    for (let index = 1; index <= cont; index++) {
      if (index !== cont) {
        if (cont % index === 0) {
          arrayDivisores.push(index);
        }
      }    
    }
    return arrayDivisores
  },
  obtenerSuma: (total, num) =>{
    return total + num;
  }
}

let numero = document.getElementById('numero');
let resultado = document.getElementById('resultado');

const calcular = () => {
  let numeroLimite = parseInt(numero.value)
  let cont = 0  
  let numerosPerfectos = [];
  do {
    cont++;
    let sumaArray = 0
    let arrayDivisores =  funciones.obtenerDivisores(cont);
    if (arrayDivisores.length > 0) sumaArray = arrayDivisores.reduce(funciones.obtenerSuma);    
    if (sumaArray === cont) { 
      numerosPerfectos.push(cont);      
    }        
  } while (cont < numeroLimite);
  resultado.innerHTML = `Los numeros perfectos hasta el limite de ${numeroLimite} son: ${numerosPerfectos}`  
}


