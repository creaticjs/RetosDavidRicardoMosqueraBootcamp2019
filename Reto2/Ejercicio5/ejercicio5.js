let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let area = document.getElementById('area');

const calcularArea = () => {
  let ladoA = parseFloat(a.value);
  let ladoB = parseFloat(b.value);
  let ladoC = parseFloat(c.value);
  let p = (ladoA + ladoB + ladoC) / 2
  let areaTriangulo = Math.sqrt(p * (p - ladoA) * (p - ladoB) * (p - ladoC))
  area.innerHTML = `Area = ${areaTriangulo}`
  area.style.display = 'inline'
}