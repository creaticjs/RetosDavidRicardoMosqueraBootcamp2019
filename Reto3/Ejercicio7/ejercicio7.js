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

let resultado = document.getElementById('resultado');

const calcular = () => {
  let cont = 0
  let contNumPerfectos = 0;
  let numerosPerfectos = [];
  do {
    cont++;
    let sumaArray = 0
    let arrayDivisores =  funciones.obtenerDivisores(cont);
    if (arrayDivisores.length > 0) sumaArray = arrayDivisores.reduce(funciones.obtenerSuma);    
    if (sumaArray === cont) { 
      numerosPerfectos.push(cont);
      contNumPerfectos++ 
    }        
  } while (contNumPerfectos < 3);
  resultado.innerHTML = `Los tres primeros numeros perfectos son ${numerosPerfectos}`  
}


