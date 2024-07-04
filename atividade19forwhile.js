const ler = require('readline-sync');

let somapares = 0;
let countpares = 0;

function obterNumero() {
    return ler.questionFloat('Digite um numero (0 para encerrar): ');
}


function atualizar(numero) {
    if (numero % 2 === 0) {
        somapares += numero;
        countpares++;
    }
}


function exibir() {
    if (countpares > 0) {
        const mediaPares = somapares / countpares;
        console.log(`A média dos numeros pares digitados é: ${mediaPares.toFixed(2)}`);
    } else {
        console.log('Nenhum numero par foi digitado.');
    }
}


function mestre() {
    while (true) {
        const numero = obterNumero();

        if (numero === 0) {
            break;
        }

        atualizar(numero);
    }

    exibir();
}


mestre();
