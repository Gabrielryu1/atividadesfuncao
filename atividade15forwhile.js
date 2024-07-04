const ler = require('readline-sync');

let produtos = [];
let valores = [];
let valorTotal = 0;
let valorMaisCaro;
let valorMaisBarato;
let produtoMaisCaro;
let produtoMaisBarato;

function construcao(valores, produtos) {
    valorMaisCaro = valores[0];
    valorMaisBarato = valores[0];
    produtoMaisCaro = produtos[0];
    produtoMaisBarato = produtos[0];
    
    for (let i = 1; i < valores.length; i++) {
        if (valores[i] > valorMaisCaro) {
            valorMaisCaro = valores[i];
            produtoMaisCaro = produtos[i];
        }
        if (valores[i] < valorMaisBarato) {
            valorMaisBarato = valores[i];
            produtoMaisBarato = produtos[i];
        }
    }
}

function mestre() {
    for (let i = 0; i < 15; i++) {
        produtos[i] = ler.question(`Digite o nome do produto ${i + 1}: `);
        valores[i] = parseFloat(ler.question(`Digite o valor do produto ${i + 1}: `));
        valorTotal += valores[i];
    }
    
    construcao(valores, produtos);
    
    console.log(`Valor total dos produtos: R$ ${valorTotal.toFixed(2)}`);
    console.log(`Produto mais caro: ${produtoMaisCaro} (R$ ${valorMaisCaro.toFixed(2)})`);
    console.log(`Produto mais barato: ${produtoMaisBarato} (R$ ${valorMaisBarato.toFixed(2)})`);
}

mestre();
