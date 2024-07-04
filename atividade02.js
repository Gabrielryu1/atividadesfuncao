const ler = require('readline-sync');

function divisivel(numero) {
    if (numero % 10 === 0) {
        return numero + " é divisível por 10.";
    } else if (numero % 5 === 0) {
        return numero + " é divisível por 5, mas não por 10.";
    } else if (numero % 2 === 0) {
        return numero + " é divisível por 2, mas não por 5 nem por 10.";
    } else {
        return numero + " não é divisível por 10, por 5 nem por 2.";
    }
}

function mestre() {
    let numero = ler.questionFloat("Digite um numero: ");
    let resultado = divisivel(numero);
    console.log(resultado);
}

mestre();
