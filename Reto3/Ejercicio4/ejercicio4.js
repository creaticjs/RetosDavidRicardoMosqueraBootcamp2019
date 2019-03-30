class Pascua {
  constructor(ano) {
    this.ano = ano;    
  }
  metodoA() {
    this.a = this.ano % 19    
  }
  metodoB() {
    this.b = this.ano % 4
  }
  metodoC() {
    this.c = this.ano % 7
  }
  medotoD() {
    this.d = ((19 * this.a) + 24) % 30
  }
  metodoE() {
    this.e = ((2 * this.b) + (4 * this.c) + (6 * this.d) + 5) % 7
  }
  metodoN() {
    this.n = 22 + this.d + this.e
    if (this.n <= 31) {
      this.mes = 'Marzo'
      this.dia = this.n
    } else {
      this.mes = 'Abril'
      this.dia = this.n - 31
    }   
  }
  calcularPascua() {
    this.metodoA();
    this.metodoB();
    this.metodoC();
    this.medotoD();
    this.metodoE();
    this.metodoN();
  }
}

let ano = document.getElementById('ano');
let resultado = document.getElementById('resultado');

const calcular = () => {
  const anno = parseInt(ano.value);
  const objPascua = new Pascua(anno);
  objPascua.calcularPascua();
  resultado.innerHTML = `Domingo ${objPascua.dia} de ${objPascua.mes}, Pascua ${objPascua.ano}`  
}
