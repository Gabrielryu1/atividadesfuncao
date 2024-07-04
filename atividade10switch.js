const ler = require('readline-sync');

function pesofinal(escolha, pesohumano) {
    let pesoFinal;

    switch (escolha) {  
        case 1:
            pesoFinal = pesohumano * 0.37;
            console.log(`Seu peso em Mercúrio é ${pesoFinal}`);
            break;
        case 2:
            pesoFinal = pesohumano * 0.88;
            console.log(`Seu peso em Vênus é ${pesoFinal}`);
            break;
        case 3:
            pesoFinal = pesohumano * 0.38;
            console.log(`Seu peso em Marte é ${pesoFinal}`);
            break;
        case 4:
            pesoFinal = pesohumano * 2.64;
            console.log(`Seu peso em Júpiter é ${pesoFinal}`);
            break;
        case 5:
            pesoFinal = pesohumano * 1.15;
            console.log(`Seu peso em Saturno é ${pesoFinal}`);
            break;
        case 6:
            pesoFinal = pesohumano * 1.17;
            console.log(`Seu peso em Urano é ${pesoFinal}`);
            break;
        default:
            console.log("Escolha uma das alternativas válidas.");
            break;
    }
}

function mestre() {
    console.log("Escolha uma das alternativas: 1 - Mercúrio, 2 - Vênus, 3 - Marte, 4 - Júpiter, 5 - Saturno, 6 - Urano");
    let escolha = ler.questionInt("Digite o numero correspondente ao planeta desejado: ");  
    let pesohumano = ler.questionFloat("Digite o seu peso na Terra (em kg): ");

    pesofinal(escolha, pesohumano);
}

mestre();
