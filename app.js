let numeroMaximo;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Defina o número máximo do jogo:');

function confirmarNumMax(){
    numeroMaximo = Number(document.querySelector('#numMax').value);
    if (isNaN(numeroMaximo) || numeroMaximo <= 1 || !Number.isInteger(numeroMaximo)) {
        exibirTextoNaTela('#texto__paragrafo_secundario', 'Erro: Digite um número inteiro válido maior que 1!');
        return;
    }
    localStorage.setItem('numeroMaximo', numeroMaximo); // Salva no localStorage
    window.location.href = 'paginas/chutar.html';
}