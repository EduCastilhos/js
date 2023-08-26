var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines[0]);
let i = 0;

do {
    if (i%2 != 0){
        console.log(i);
    }
    i += 1;
} while (i != valor + 1)