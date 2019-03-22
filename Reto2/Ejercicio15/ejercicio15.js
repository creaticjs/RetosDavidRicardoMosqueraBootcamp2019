const meses = {
  1: 'Enero',
  2: 'Febrero',
  3: 'Marzo',
  4: 'Abril',
  5: 'Mayo',
  6: 'Junio',
  7: 'Julio',
  8: 'Agosto',
  9: 'Septiembre',
  10: 'Octubre', 
  11: 'Noviembre',
  12: 'Diciembre'
}

let ano = document.getElementById('ano');
let mes = document.getElementById('mes');
let resultado = document.getElementById('resultado');

const calcular = () => {
  let mesCalcular = parseInt(mes.value)
  let fecha = new Date(ano.value, mesCalcular, 0);
  console.log('fecha', fecha.toDateString())
  resultado.innerHTML = `El mes de ${meses[mesCalcular.toString()]} del año ${ano.value} tiene ${fecha.getDate()} dias`
  resultado.style.display = 'inline'
}  