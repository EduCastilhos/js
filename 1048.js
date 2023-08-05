var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines[0]);
var novo, reajuste, percentual;

if (salario <= 400){
    percentual = 15;
    reajuste = salario * (percentual/100);
    salario = salario + reajuste;
} else if (salario > 400 && salario <= 800){
    percentual = 12;
    reajuste = salario * (percentual/100);
    salario = salario + reajuste;
} else if (salario > 800 && salario <= 1200){
    percentual = 10;
    reajuste = salario * (percentual/100);
    salario = salario + reajuste;
} else if (salario > 1200 && salario <= 2000){
    percentual = 7;
    reajuste = salario * (percentual/100);
    salario = salario + reajuste;
} else {
    percentual = 4;
    reajuste = salario * (percentual/100);
    salario = salario + reajuste;
}

console.log('Novo salario: ' + Math.trunc(salario).toFixed(2));
console.log('Reajuste ganho: ' + Math.trunc(reajuste).toFixed(2));
console.log('Em percentual: ' + percentual + ' %');