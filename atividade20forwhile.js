const alturaInicialJorge = 1.72;
const alturaInicialRoberto = 1.65;

const crescimentoJorge = 3; 
const crescimentoRoberto = 4; 

const crescimentoMetrosJorge = crescimentoJorge / 100; 
const crescimentoMetrosRoberto = crescimentoRoberto / 100; 

function calcular() {
    let anos = 0;
    let alturaJorge = alturaInicialJorge;
    let alturaRoberto = alturaInicialRoberto;

    while (alturaRoberto <= alturaJorge) {
        alturaJorge += crescimentoMetrosJorge;
        alturaRoberto += crescimentoMetrosRoberto;
        anos++;
    }

    return anos;
}

function mestre() {
    const anosNecessarios = calcular();
    console.log(`Serão necessários ${anosNecessarios} anos para que Roberto seja maior que Jorge.`);
}


mestre();
