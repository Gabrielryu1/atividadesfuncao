const ler = require('readline-sync');


function obterProcessos() {
    return ler.questionInt('Digite quantos numeros deseja processar: ');
}


function obternumero() {
    return ler.questionInt('Digite um numero para calcular o fatorial: ');
}


function Fatorial(numero) {
    if (numero < 0) {
        console.log('Nao e possível calcular o fatorial de um numero negativo.');
        return null;
    }

    let fatorial = 1;
    for (let x = 2; x <= numero; x++) {
        fatorial *= x;
    }
    return fatorial;
}


function mestre() {
    const n = obterProcessos();

    for (let i = 0; i < n; i++) {
        const numero = obternumero();
        const fatorial = Fatorial(numero);

        if (fatorial !== null) {
            console.log(`Valor: ${numero} - Fatorial: ${fatorial}`);
        }
    }
}


mestre();
