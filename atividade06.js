const ler = require('readline-sync');
const valormeta = 1400; 

function verificaFuncionario(funcionario) {
    if (funcionario >= valormeta) {
        return "Parabéns, você bateu a meta!";
    } else {
        return "Infelizmente, você não bateu a meta.";
    }
}

function mestre() {
    let valorVendas = ler.question("Digite o valor total que voce fez de vendas: ");
    valorVendas = parseFloat(valorVendas); 

    let resultado = verificaFuncionario(valorVendas);
    console.log(resultado);
}

mestre();
