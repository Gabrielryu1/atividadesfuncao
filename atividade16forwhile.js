const ler = require('readline-sync');

let soma = 0;

function condicao(soma) {
    if (soma > 500) {
        for (let i = 0; i < 18; i++) {
            let numero = ler.questionFloat(`Digite o numero ${i + 1}: `);
            soma -= 100;
            soma += numero;
        }
    }
    return soma;
}

function mestre() {
    while (true) {
        let numero = ler.questionFloat("Digite um numero: ");
        soma += numero;

        if (soma > 500) {
            soma = condicao(soma);
        }

        console.log(`A soma atual é: ${soma}`);
    }
}

mestre();

