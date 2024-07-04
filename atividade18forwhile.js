const ler = require('readline-sync');

let somaNegativos = 0;

function obterNumero() {
    return ler.questionFloat('Digite um número (0 para encerrar): ');
}

function atualizarSoma(numero) {
    if (numero < 0) {
        somaNegativos += numero;
    }
}

function exibirResultado() {
    console.log(`O somatório dos números negativos é: ${somaNegativos}`);
}

function mestre() {
    while (true) {
        const numero = obterNumero();

        if (numero === 0) {
            break;
        }

        atualizarSoma(numero);
    }

    exibirResultado();
}

mestre();
