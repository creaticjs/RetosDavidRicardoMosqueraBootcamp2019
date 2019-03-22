let hora24 = document.getElementById('hora24');
let hora12 = document.getElementById('hora12');

const convertirHora = () => {
  if (hora24.value.indexOf(':') === -1 || hora24.value.length < 5 || hora24.value.length > 5) {
    alert('Hora invalida intentelo de nuevo')
  } else {
    let tiempo = ''
    let index = hora24.value.indexOf(':');
    let horas = hora24.value.slice(0, index);
    let minutos = hora24.value.slice(index + 1, hora24.value.length);
    horas = parseInt(horas);
    minutos = parseInt(minutos);
    if (horas > 12) {
      horas = horas - 12
      if (horas === 24) {
        tiempo = 'AM'
      } else {
        tiempo = 'PM'
      }      
    } else {
      if (horas == 12) {
        tiempo = 'PM'
      } else {
        tiempo = 'AM'
      }      
    }
    if (minutos.toString().length === 1) {
      hora12.innerHTML = `Hora en formato de 12 horas = ${horas}:0${minutos} ${tiempo}`
    } else {
      hora12.innerHTML = `Hora en formato de 12 horas = ${horas}:${minutos} ${tiempo}`
    }  
    hora12.style.display = 'inline'
  }

}