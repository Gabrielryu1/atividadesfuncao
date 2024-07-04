const readlineSync = require('readline-sync');

function Com_pro(quantidadeprodutos) {
    let comissaoporproduto;

    if (quantidadeprodutos > 450) {
        comissaoporproduto = 10.00;
    } else if (quantidadeprodutos > 200) {
        comissaoporproduto = 7.50;
    } else {
        comissaoporproduto = 5.00;
    }

    const comissaoTotal = quantidadeprodutos * comissaoporproduto;
    return comissaoTotal;
}

function mestre() {
    const nomeFuncionario = readlineSync.question('Digite o nome do funcionario: ');
    const quantidadeprodutos = parseInt(readlineSync.question('Digite a quantidade de produtos vendidos: '), 10);

    let resultado = Com_pro(quantidadeprodutos);
    console.log(`A comissão do ${nomeFuncionario} total é: R$ ${resultado.toFixed(2)}`);
}

mestre();
