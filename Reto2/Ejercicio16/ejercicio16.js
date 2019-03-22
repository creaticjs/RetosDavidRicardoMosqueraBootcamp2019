let horas = document.getElementById('horas');
let valorHora = document.getElementById('valorHora');
let resultadoHtml = document.getElementById('resultado');

const calcular = () => {
  let valHora = parseInt(valorHora.value);
  let horasOp = parseInt(horas.value);

  if (horasOp <= 40) {
    let resultado = horasOp * valHora;
    if (resultado <= (valHora * 40)) {
      resultadoHtml.innerHTML = `Salario neto: ${resultado}, Horas extra: 0, Impuestos: No aplica`
    }
  }
  if (horasOp > 40) {
    let horasExtra = horasOp - 40;
    let resultado = (horasOp * valHora) + ((horasExtra * valHora * 50) / 100);
    if (resultado > (valHora * 40)) {
      let resultado2 = resultado + ((resultado * 10) / 100);
      resultadoHtml.innerHTML = `Salario neto: ${resultado2}, Horas extra: ${horasExtra}, Impuestos: 10%`      
    }
  }

}