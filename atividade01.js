const ler = require('readline-sync');

function calcularLimitePrestacao(salario) {
    return salario * 0.25;
}

function verificar(salario, valorPrestacao) {
    let limitePrestacao = calcularLimitePrestacao(salario);
    if (valorPrestacao <= limitePrestacao) {
        return "Empréstimo pode ser concedido.";
    } else {
        return "Empréstimo não pode ser concedido.";
    }
}

function mestre() {
    let salario = ler.questionFloat("Digite o salário bruto: ");
    let valorPrestacao = ler.questionFloat("Digite o valor da prestação: ");
    let resultado = verificar(salario, valorPrestacao);
    console.log(resultado);
}

mestre();

