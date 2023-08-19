var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let i = 0;
let total = 0;

do {
    var valor = parseInt(lines[i]);
    if (valor >= 0) {
        total += 1;
    }
    i += 1;
} while (i < 6)

console.log(total + ' valores positivos');