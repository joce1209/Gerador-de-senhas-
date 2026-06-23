let valor = 12;

const texto = document.getElementById("valor");
const botaoMenos = document.getElementById("menos");
const botaoMais = document.getElementById("mais");

function atualizarTela() {
  texto.textContent = valor;
}

botaoMenos.addEventListener("click", () => {
  if (valor > 1) {
    valor--;
    atualizarTela();
  }
});

botaoMais.addEventListener("click", () => {
  valor++;
  atualizarTela();
});