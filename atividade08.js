const ler = require('readline-sync');

function calcularIdades() {
    const idadehomem1 = ler.questionInt('Digite a idade do primeiro homem: ');
    const idadehomem2 = ler.questionInt('Digite a idade do segundo homem: ');

    const idademulher1 = ler.questionInt('Digite a idade da primeira mulher: ');
    const idademulher2 = ler.questionInt('Digite a idade da segunda mulher: ');

    const homemMaisVelho = Math.max(idadehomem1, idadehomem2);
    const homemMaisNovo = Math.min(idadehomem1, idadehomem2);

    const mulherMaisVelha = Math.max(idademulher1, idademulher2);
    const mulherMaisNova = Math.min(idademulher1, idademulher2);

    const somaIdades = homemMaisVelho + mulherMaisNova;
    const produtoIdades = homemMaisNovo * mulherMaisVelha;

    console.log(`A soma das idades do homem mais velho com a mulher mais nova é: ${somaIdades}`);
    console.log(`O produto das idades do homem mais novo com a mulher mais velha é: ${produtoIdades}`);
}


calcularIdades();
