let numeroHtml = document.getElementById("numero");
let resultado = document.getElementById('resultado');

const calcular = () => {
  const numero = parseInt(numeroHtml.value);
  let cont = 0;  
  for (i = 1; i <= numero; i++) {
    let mod = numero % i;
    if (mod == 0) {
      cont = cont + 1;     
    }
  }
  if (cont === 2) {
    resultado.innerHTML = `El numero ${numero} es primo`
  } else {
    resultado.innerHTML = `El numero ${numero} no es primo`
  }

}