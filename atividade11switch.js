const ler = require('readline-sync');

function valorfinal(tipoCliente,valorpago) {
    let valorfinal;

switch (tipoCliente) {
    case 1:
        valorfinal = valorpago 
        console.log(`O valor que voce ira pagar é ${valorfinal}`);
        break;
    case 2:
        valorfinal = valorpago - (valorpago * 0.05);
        console.log(`O valor que voce ira pagar é ${valorfinal}`);
        break;
    case 3:
        valorfinal = valorpago - (valorpago * 0.10);
        console.log(`O valor que voce ira pagar é ${valorpago}`);
        break;
    default:
        console.log("Opção inválida.");
        break;
}}
function mestre() {
    

let valorpago = ler.questionFloat("Digite o valor da compra: ");
console.log("Voce é : 1 - Cliente comum  2 - Funcionario  3 - Vip");
let tipoCliente = ler.questionInt("Digite o numero correspondente ao seu tipo: ");

valorfinal(tipoCliente,valorpago)
}

mestre();