var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let i = 0;
let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

do {
    var valor = parseInt(lines[i]);
    if (valor%2 == 0) {
        pares += 1;
    } else {
        impares += 1;
    }

    if (valor > 0){
        positivos += 1;
    } else if (valor < 0){
        negativos += 1;
    }

    i += 1;
} while (i < 5)

console.log(pares + ' valor(es) par(es)');
console.log(impares + ' valor(es) impar(es)');
console.log(positivos + ' valor(es) positivo(s)');
console.log(negativos + ' valor(es) negativo(s)');