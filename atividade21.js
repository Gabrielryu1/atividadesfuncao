function kmhParaMs(Kmh) {
    return Kmh * 1000 / 3600;
}


const Kmh = 1000; 
const Ms = kmhParaMs(Kmh);

console.log(`${Kmh} km/h equivale a ${Ms.toFixed(2)} m/s.`);
