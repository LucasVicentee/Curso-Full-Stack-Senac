const calcular = document.getElementById('calcular');
const primeiroNumero = document.getElementById('primeiroNumero');
const segundoNumero = document.getElementById('segundoNumero');
const terceiroNumero = document.getElementById('terceiroNumero');
const resultado = document.getElementById('resultado');

let primeiroNumeroJs = 0;
let segundoNumeroJs = 0;
let terceiroNumeroJs = 0;
let resultadoJs = 0;

function RealizarSoma() {

    primeiroNumeroJs = Number(primeiroNumero.value);
    segundoNumeroJs = Number(segundoNumero.value);
    terceiroNumeroJs = Number(terceiroNumero.value);
    resultadoJs = resultado.value;

    resultadoJs = primeiroNumeroJs + segundoNumeroJs + terceiroNumeroJs;

    resultado.innerText = resultadoJs;
}

function LimparDados() {
    primeiroNumero.value = "";
    segundoNumero.value = "";
    terceiroNumero.value = "";
    resultado.value = "";
}

calcular.addEventListener('click', RealizarSoma);
limpar.addEventListener('click', LimparDados);