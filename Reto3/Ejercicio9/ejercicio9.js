let conejos = document.getElementById('conejos')
let resultado = document.getElementById('resultado')

const calcular = () => {  
  resultado.innerHTML = funciones.resultado(parseInt(conejos.value))
}

const funciones = {
  resultado: (numeroConejos) => {
    let a = 1;
    let b = 1;
    let c = 0;
    let i = 0;
    let resultado = ''
    if (numeroConejos === 1) {
      resultado = `Se necesitan ${numeroConejos} meses para tener ${numeroConejos} parejas de conejos`
    }
    else {
      for (i = 2; i < (numeroConejos * 2); i++) {
        c = a + b;
        a = b;
        b = c;
        if (c == numeroConejos) {
          resultado = `Se necesitan ${i} meses para tener ${numeroConejos} parejas de conejos`
          i = 0;
          break
        }
        else if (numeroConejos < c) {
          resultado = `Se necesitan ${i} meses para tener ${numeroConejos} parejas de conejos`
          i = 0;
          break
        }
      }
    }
    return resultado
  }
}