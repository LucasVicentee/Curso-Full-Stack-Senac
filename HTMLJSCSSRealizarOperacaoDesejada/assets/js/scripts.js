// Declarando os valores que serão utilizados no HTML
const calcular = document.getElementById('calcular');
const operacao = document.getElementById('operacao');
const primeiroNumero = document.getElementById('primeiroNumero');
const segundoNumero = document.getElementById('segundoNumero');
const resultado = document.getElementById('resultado');
const limpar = document.getElementById('limpar');

//Declarar variáveis
let operacaoJs = "";
let primeiroNumeroJs = 0;
let segundoNumeroJs = 0;
let resultadoJs = 0;

function RealizarOperacao() {

    operacaoJs = operacao.value;
    primeiroNumeroJs = Number(primeiroNumero.value);
    segundoNumeroJs = Number(segundoNumero.value);
    resultadoJs = resultado.value;

    if ((operacaoJs == "dividir") && (segundoNumeroJs == 0)) {
        alert("A divisão por 0 não é possível!");
        return;
    }
    else {
        if (operacaoJs == "somar") {
        resultadoJs = primeiroNumeroJs + segundoNumeroJs;
        }
        else {
            if (operacaoJs == "subtrair") {
                resultadoJs = primeiroNumeroJs - segundoNumeroJs;
            }
            else {
                if (operacaoJs == "multiplicar") {
                    resultadoJs = primeiroNumeroJs * segundoNumeroJs;
                }
                else {
                    if (operacaoJs == "dividir") {
                        resultadoJs = primeiroNumeroJs / segundoNumeroJs;
                    }
                }
            }
        }
    }

    resultado.innerText = resultadoJs;
}

function LimparDados() {
    primeiroNumero.value = "";
    segundoNumero.value = "";
    resultado.value = "";
}

calcular.addEventListener('click', RealizarOperacao);
limpar.addEventListener('click', LimparDados);