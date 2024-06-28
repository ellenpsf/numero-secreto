//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Número Secreto';
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function InicioJogo(){
    exibirTexto('h1', 'Número Secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

InicioJogo();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTexto('h1', 'Acertou!');
        let palavratentativa = tentativas > 1 ? ' tentativas' : ' tentativa';
        let mensagemTentativas = 'Acertou! O número era ' + numeroSecreto + '. Em ' + tentativas + palavratentativa;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTexto('p', 'O numero secreto é menor');

        }   else    {
                exibirTexto('p', 'O numero secreto é maior');
}
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeLista = listaNumerosSorteados.length;

    if (quantidadeLista == numeroLimite){
        listaNumerosSorteados  = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }   else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
    
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    console.log(numeroSecreto);
    limparCampo();
    InicioJogo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}