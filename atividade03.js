const ler = require('readline-sync');

function dias(semana) {
    switch (semana) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Não existe dia da semana com esse número.";
    }
}

function mestre() {
    let semana = parseInt(ler.question("Digite um número: "));
    let resultado = dias(semana);
    console.log(resultado);
}

mestre();
