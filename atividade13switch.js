const ler = require('readline-sync');
let valorFinal = 0;

function A(condicaoPagamento,valorVenda) {
    

switch (condicaoPagamento) {
    case 1:
        valorFinal = valorVenda - (valorVenda * 0.10);
        console.log(`O valor da venda  é: ${valorFinal.toFixed(2)}`);
        break;
    case 2:
        valorFinal = valorVenda - (valorVenda * 0.05);
        console.log(`O valor da venda a prazo 30 dias é: ${valorFinal.toFixed(2)}`);
        break;
    case 3:
        valorFinal = valorVenda;
        console.log(`O valor da venda a prazo 60 dias é: ${valorFinal.toFixed(2)}`);
        break;
    case 4:
        valorFinal = valorVenda + (valorVenda * 0.05);
        console.log(`O valor da venda a prazo 90 dias é: ${valorFinal.toFixed(2)}`);
        break;
    case 5:
        valorFinal = valorVenda - (valorVenda * 0.08);
        console.log(`O valor  da venda com cartão de débito é: ${valorFinal.toFixed(2)}`);
        break;
    default:
        console.log("Erro: escolha uma condição de pagamento válida.");
        break;
}}

function mestre() {
    let valorVenda = ler.questionFloat("Digite o valor da venda: ");
console.log("Escolha a condição de pagamento:");
console.log("1 - Venda à Vista (desconto de 10%)");
console.log("2 - Venda a Prazo 30 dias (desconto de 5%)");
console.log("3 - Venda a Prazo 60 dias (mesmo preço)");
console.log("4 - Venda a Prazo 90 dias (acréscimo de 5%)");
console.log("5 - Venda com Cartão de Débito (desconto de 8%)");
let condicaoPagamento = ler.questionInt("Digite o numero correspondente a condicao de pagamento: ");

A(condicaoPagamento,valorVenda)
}

mestre();