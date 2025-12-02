// Função para calcular a média e status
function calcularMedia(notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    const media = soma / notas.length;
    const status = media >= 7 ?'Aprovado' : 'Reprovado';
    return { media: media.toFixed(2), status };
}