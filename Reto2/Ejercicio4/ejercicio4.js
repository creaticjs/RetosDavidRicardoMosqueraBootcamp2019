let a = document.getElementById('a');
let b = document.getElementById('b');
let h = document.getElementById('h');

const calcularHipotenusa = () => {  
  let hipotenusa = Math.sqrt(Math.pow(parseFloat(a.value),2) + Math.pow(parseFloat(b.value),2))
  h.innerHTML = `Hipotenusa = ${hipotenusa}`
  h.style.display = 'inline'
}