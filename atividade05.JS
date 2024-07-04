const ler = require('readline-sync');

function verificLetra(letra) {
    letra = letra.toLowerCase();

    if (letra.length !== 1 || !/[a-z]/.test(letra)) {
        return 'Entrada inválida. Por favor, digite uma única letra do alfabeto.';
    }

    const vogais = ['a', 'e', 'i', 'o', 'u'];
    if (vogais.includes(letra)) {
        return 'A letra é uma vogal.';
    } else {
        return 'A letra é uma consoante.';
    }
}

const letra = ler.question('Digite uma letra: ');

console.log(verificLetra(letra));
