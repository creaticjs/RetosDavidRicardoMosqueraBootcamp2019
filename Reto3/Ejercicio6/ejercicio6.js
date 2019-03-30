const funciones = {
  dibujarMagico: (valorN, magico) => {
    let dibujar = "";
    for (let i = 0; i < valorN; i++) {
      dibujar += "<tr>";
      for (let j = 0; j < valorN; j++) {
        dibujar += "<td>" + magico[i][j] + "</td>";
      }
      dibujar += "</tr>";
    }
    return dibujar
  }
}

let numeroN = document.getElementById('numeroN');
let cuadradoMagico = document.getElementById('magico');

const calcular = () => {
  let valorN = numeroN.value;
  if (valorN % 2 && valorN > 0) {    
    let magico = new Array(parseInt(valorN));
    for (let index = 0; index < magico.length; index++) {
      magico[index] = new Array(parseInt(valorN));
    }
    for (let i = 0; i < valorN; i++) {
      for (let j = 0; j < valorN; j++) {
        magico[i][j] = 0;
      }
    }
    let n = 0;
    let m = parseInt(valorN / 2);
    magico[n][m] = 1;
    for (let i = 1; i < (valorN * valorN); i++) {
      let nAnterior = n;
      let mAnterior = m;
      if (n == 0) {
        n = (valorN - 1);
      } else {
        n = n - 1;
      }
      if (m == (valorN - 1)) {
        m = 0;
      } else {
        m = m + 1;
      }
      if (magico[n][m] != 0) {
        if (nAnterior == (valorN - 1)) {
          n = 0;
        } else {
          n = nAnterior + 1;
        }
        m = mAnterior;
      }
      magico[n][m] = (i + 1);
    }   
    cuadradoMagico.innerHTML = funciones.dibujarMagico(valorN,magico);
  } else {
    alert('numero invalido')
  }

}