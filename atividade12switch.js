const ler = require('readline-sync');
let valorfinal;

function valooor(numero, operacao) {
    
    switch (operacao) {
        case 101:
            valorfinal = Math.sqrt(numero);
            console.log(`A raiz quadrada de ${numero} é ${valorfinal.toFixed(2)}`);
            break;
        case 102:
            valorfinal = numero / 2;
            console.log(`A metade do número ${numero} é ${valorfinal.toFixed(2)}`);
            break;
        case 103:
            valorfinal = numero * 0.10;
            console.log(`10% do número ${numero} é ${valorfinal.toFixed(2)}`);
            break;
        case 104:
            valorfinal = numero * 2;
            console.log(`O dobro do número ${numero} é ${valorfinal.toFixed(2)}`);
            break;
        default:
            console.log("Erro: escolha uma das operações acima.");
            break;
    }
}

function mestre() {
    let numero = ler.questionFloat("Digite o numero que voce quer fazer a conta: ");
    console.log("101 - Raiz quadrada \n102 - A metade \n103 - 10% do numero \n104 - O dobro");

    let operacao = ler.questionInt("Digite o numero correspondente a operacao desejada: ");
    valooor(numero, operacao);
}

mestre();
