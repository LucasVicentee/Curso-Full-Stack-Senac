function mostrarDescricao(idDescricao) {
    const descricao = document.getElementById(idDescricao);
    if (descricao.style.display === "none" || descricao.style.display === "") {
        descricao.style.display = "block";
    } 
    else {
        descricao.style.display = "none";
    }
}