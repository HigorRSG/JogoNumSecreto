let numeroMaximo = Number(localStorage.getItem('numeroMaximo'));
if (!numeroMaximo) {
    alert('Número máximo não definido! Retornando ao início.');
    window.location.href = '../index.html';
}
let numeroSecreto = gerarNumeroAleatorio();
let tentativaChute = 5;
let palavraTentativa = tentativaChute > 1 ? 'tentativas' : 'tentativa';
let botaoChutar = document.getElementById('chutar');


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    } // Fala o texto na tela
}
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo} (Você tem ${tentativaChute} ${palavraTentativa})`);

function gerarNumeroAleatorio(){ 
    return Math.floor(Math.random() * numeroMaximo) + 1;
}

function limparcampo(tag){
    document.querySelector(tag).value = '';
}

// Criando uma função que é chamada pela  propriedade onclick do botão
function verificarChute(){
    let numeroChute = Number(document.querySelector('input').value);
    tentativaChute --;
    if (numeroChute < 1 || numeroChute > numeroMaximo || !Number.isInteger(numeroChute)) {
        exibirTextoNaTela('p', `Número inválido! Escolha um número inteiro entre 1 e ${numeroMaximo}`);
        tentativaChute++;
    } else if (numeroChute === numeroSecreto) {
        exibirTextoNaTela('p', `Parabéns! Você acertou o número secreto: ${numeroSecreto}`);
        botaoChutar.disabled = true;
        document.getElementById('reiniciar').disabled = false;
    } else if (numeroChute < numeroSecreto && tentativaChute > 0) {
        exibirTextoNaTela('p', `O número secreto é maior que ${numeroChute} (Você ainda tem ${tentativaChute} ${palavraTentativa})`);
    } else if (numeroChute > numeroSecreto && tentativaChute > 0) {
        exibirTextoNaTela('p', `O número secreto é menor que ${numeroChute} (Você ainda tem ${tentativaChute} ${palavraTentativa})`);
    } else if (numeroChute !== numeroSecreto && tentativaChute === 0) {
        exibirTextoNaTela('p', `Acabou suas tentativas. O número secreto era ${numeroSecreto}!`);
        botaoChutar.disabled = true;
        document.getElementById('reiniciar').disabled = false;
    }
    limparcampo('#chute');
}

function resetarJogo(){
    window.location.href = '../index.html';
}