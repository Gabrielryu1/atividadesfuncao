const ler = require('readline-sync');

function ganhador(T1, T2) {
    if (T1 > T2) {
        return "O time um ganhou do time dois";
    } else if (T1 < T2) {
        return "O time dois ganhou do time um";
    } else {
        return "O jogo ficou empatado";
    }
}

function mestre() {
    let T1 = ler.questionInt("Digite o número de gols do time um: ");
    let T2 = ler.questionInt("Digite o número de gols do time dois: ");
    
    let resultado = ganhador(T1, T2);
    console.log(resultado);
}

mestre();
