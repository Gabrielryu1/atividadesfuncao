const ler = require('readline-sync');

const precoAlcool = 4.70;
const precoGasolina = 5.86;

function calcularDesconto(tipoCombustivel, quantidadeLitros) {
    let precoPorLitro, descontoPorLitro;

    if (tipoCombustivel === 'A') {
        precoPorLitro = precoAlcool;
        descontoPorLitro = (quantidadeLitros <= 25) ? 0.02 : 0.04;
    } else if (tipoCombustivel === 'G') {
        precoPorLitro = precoGasolina;
        descontoPorLitro = (quantidadeLitros <= 25) ? 0.03 : 0.05;
    } else {
        console.log('Tipo de combustível inválido');
        process.exit(1);
    }

    const descontoTotal = quantidadeLitros * precoPorLitro * descontoPorLitro;
    const valorTotalSemDesconto = quantidadeLitros * precoPorLitro;
    const valorTotalComDesconto = valorTotalSemDesconto - descontoTotal;

    return valorTotalComDesconto.toFixed(2);
}

function mestre() {
    const tipoCombustivel = ler.question('Digite o tipo de combustível (A - álcool, G - gasolina): ').toUpperCase();
    const quantidadeLitros = parseFloat(ler.question('Digite a quantidade de litros: '));

    const Final = calcularDesconto(tipoCombustivel, quantidadeLitros);
    console.log(`O valor final a pagar e R$ ${Final}`);
}

mestre();
