const readlineSync = require('readline-sync');

let estacao;

function A(mes,estacao) {
    
switch (mes) {
    case 1:
    case 2:
    case 3:
        estacao = "Verao";
        break;
    case 4:
    case 5:
    case 6:
        estacao = "Outono";
        break;
    case 7:
    case 8:
    case 9:
        estacao = "Inverno";
        break;
    case 10:
    case 11:
    case 12:
        estacao = "Primavera";
        break;
    default:
        console.log("Mes inválido. Por favor, digite um numero entre 1 e 12.");
        process.exit(1); 
}

if (estacao) {
    console.log(`A estação do ano correspondente ao mes é ${estacao}`);
}}

function mestre() {
    const mes = parseInt(readlineSync.question("Digite um numero entre 1 e 12 para o mes: "));

    A(mes,estacao)
}

mestre();