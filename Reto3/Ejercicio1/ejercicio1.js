let salario = document.getElementById('salarioActual')
let resultado = document.getElementById('resultado')

const calcular = () => {
  let porcentajeAumento = 0
  const salarioActual = parseFloat(salario.value);
  if (salarioActual > 0 && salarioActual <= 9000) {
    porcentajeAumento = 0.2
  }
  if (salarioActual > 9000 && salarioActual <= 15000) {
    porcentajeAumento = 0.1
  }
  if (salarioActual > 15000 && salarioActual <= 20000) {
    porcentajeAumento = 0.05
  }
  let salarioNuevo = salarioActual + (salarioActual*porcentajeAumento);
  resultado.innerHTML = `El nuevo salario seria de: ${salarioNuevo}`
}