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

const botaoClicar = document.getElementById('btnClicar');
const botaoZerar = document.getElementById('btnZerar');
const spanNumeroCliques = document.getElementById('numeroCliques');

let contagemCliques = 0;

botaoClicar.addEventListener('click', function() {
    contagemCliques = contagemCliques + 1;
    spanNumeroCliques.textContent = contagemCliques;
});

//Fazer o evento click para botão zerar a contagem 

const btnZerarCliques = 0;

botaoZerar.addEventListener('click', function() {
    contagemCliques = 0; 
    spanNumeroCliques.textContent = contagemCliques;
});