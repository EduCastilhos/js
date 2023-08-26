var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines[0]);
let i = valor;
let impressao = 0;

do {
    if (i%2 != 0){
        console.log(i);
        impressao += 1;
    }
    i += 1;
} while (impressao < 6)