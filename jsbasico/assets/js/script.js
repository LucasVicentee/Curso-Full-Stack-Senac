// JavaScript tem diverso métodos para manipular elementos HTML (manipular = pegar)
// Primeiro pega o elemento e armazena em memória
// Window (Janela) e Document (Documento)

const btnMudarCor = document.getElementById('btnMudarCor');
console.log(btnMudarCor);

const corpoPagina = document.body;
console.log(corpoPagina);

btnMudarCor.addEventListener('click', function() {
    // const corParmeira = "#0C6636";
    const corAleatoria = '#' + Math.floor(Math.random()*1677215).toString(16);
    corpoPagina.style.backgroundColor = corAleatoria;
});

// Sistema para clicar e adicionar números e clicar para zerar
const botaoClicar = document.getElementById('btnClicar');
const botaoZerar = document.getElementById('btnZerar');
const spanNumeroCliques = document.getElementById('numeroCliques');

let contagemCliques = 0;

botaoClicar.addEventListener('click', function() {
    contagemCliques = contagemCliques + 1;
    spanNumeroCliques.textContent = contagemCliques;
});

// Fazer o evento click para botão zerar a contagem 

const btnZerarCliques = 0;

botaoZerar.addEventListener('click', function() {
    contagemCliques = 0; 
    spanNumeroCliques.textContent = contagemCliques;
});

// Calculadora de apenas soma
const inputNumero1 = document.getElementById('numero1');
const inputNumero2 = document.getElementById('numero2');
const btnCalcular = document.getElementById('calcular');
const resultadoFinal = document.getElementById('resultado');

btnCalcular.addEventListener('click', function() {
    const valor1 = Number(inputNumero1.value);
    const valor2 = Number(inputNumero2.value);

    if (isNaN(numero1) || isNaN(numero2)) {
        return;
    }
    const soma = valor1 + valor2;
    resultadoFinal.textContent = `O resultado é: ${soma}`;
});