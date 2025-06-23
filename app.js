alert('Boas vindas ao jogo do numero secreto!');

let numeroMaximo = Number(prompt('Defina o número máximo do jogo:'));
// Verifica se o número máximo é um número válido e maior que 0
// O parseInt() converte a string retornada pelo prompt em um número inteiro
while (isNaN(numeroMaximo) || numeroMaximo <= 1 || !Number.isInteger(numeroMaximo)) {
    alert('Por favor, insira um número inteiro válido maior que 1!');
    numeroMaximo = Number(prompt('Defina o número máximo do jogo:'));
}

//Usar parseInt() até pode funcionar no lugar do math.floor(), mas não é a forma recomendada para arredondar números aleatórios, pois ele foi feito para converter strings, não para arredondar.
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1; // Definindo o número secreto
console.log('Número secreto: ' + numeroSecreto);
let numeroChute;
let tentativaChute = 5;
let palavraTentativa = tentativaChute > 1 ? 'tentativas' : 'tentativa';// Operador ternário para pluralizar a palavra "tentativa"

//se o numero que o usuario chutou for igual ao numero secreto, exiba uma mensagem de parabéns
while (numeroChute != numeroSecreto) {
    numeroChute = Number(prompt(`Escolha um número entre 1 e ${numeroMaximo}(você tem ${tentativaChute} ${palavraTentativa}):`));
    console.log('Número chutado: ' + numeroChute);
    tentativaChute--; // Desconta uma tentativa após cada chute válido
    palavraTentativa = tentativaChute > 1 ? 'tentativas' : 'tentativa'; // Atualiza a palavra "tentativa" para o plural ou singular
    if (numeroSecreto == numeroChute) {
        alert(`Parabéns, voce acertou o número secreto(${numeroSecreto})!`);
    }else if (numeroChute < 1 || numeroChute > numeroMaximo || !Number.isInteger(numeroChute)) {
        alert(`Número inválido! Por favor, escolha um número inteiro entre 1 e ${numeroMaximo}.`);
        tentativaChute++; // Não desconta a tentativa se o número for inválido
        console.log('Número inválido! Tentativa não descontada.');
    }else if (tentativaChute == 0 && numeroChute < numeroSecreto) {
        alert(`O número secreto é maior que ${numeroChute}`);
        alert(`Acabou suas tentativas. O número secreto era ${numeroSecreto}!`);
        console.log('Acabou as tentativas!');
        break;
    }else if (tentativaChute == 0 && numeroChute > numeroSecreto) {
        alert(`O número secreto é menor que ${numeroChute}`);
        alert(`Acabou suas tentativas. O número secreto era ${numeroSecreto}!`);
        console.log('Acabou as tentativas!');
        break;
    }else if (numeroChute < numeroSecreto) {
        alert(`O número secreto é maior que ${numeroChute}(resta ${tentativaChute} ${palavraTentativa}!).`);
        console.log(`Quantidade de tentativas restantes: ${tentativaChute} ${palavraTentativa}`);
    }else if (numeroChute > numeroSecreto) {
        alert(`O número secreto é menor que ${numeroChute}(resta ${tentativaChute} ${palavraTentativa}!).`);
        console.log(`Quantidade de tentativas restantes: ${tentativaChute} ${palavraTentativa}`);
    }
}