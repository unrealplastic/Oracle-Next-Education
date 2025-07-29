/*let titulo = document.querySelector('h1'); //seleciona o elemento 
titulo.innerHTML = 'Jogo do número secreto'; //altera o conteúdo da tag

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';*/

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

exibirTextoTela('h1', 'Jogo do número secreto');
exibirTextoTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    console.log('O botão foi clicado');
}