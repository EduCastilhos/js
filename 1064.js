var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let i = 0;
let total = 0;
let soma = 0;
let media = 0;

do {
    var valor = parseFloat(lines[i]);
    if (valor >= 0) {
        total += 1;
        soma += valor;
    }
    i += 1;
} while (i < 6)
media = soma/total;

console.log(total + ' valores positivos');
console.log(media.toFixed(1));