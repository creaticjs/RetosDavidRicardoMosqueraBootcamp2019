let dia = document.getElementById('dia');
let mes = document.getElementById('mes');
let ano = document.getElementById('ano');
let resultado = document.getElementById('resultado')

const calcular = () => {
  let hoy = new Date();
  let cumpleanos = new Date(ano.value, parseInt(mes.value) - 1, dia.value);  
  console.log('cumpleaños', cumpleanos)
  let edad = hoy.getFullYear() - cumpleanos.getFullYear();
  let m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
  }
  resultado.innerHTML = `Edad con respecto a la fecha actual: ${edad}`  
}