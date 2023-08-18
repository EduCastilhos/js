var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines[0]);
var salarioAux = 0.0;
var imposto = 0.0;

if (salario > 4500.00){
    salarioAux = salario - 4500.00;
    imposto += salarioAux * 0.28;
    salario = 4500.00
}

if (salario >= 3000.01 && salario <= 4500.00){
    salarioAux = salario - 3000.01;
    imposto += salarioAux * 0.18;
    salario = 3000.00
}

if (salario >= 2000.01 && salario <= 3000.00){
    salarioAux = salario - 2000.01;
    imposto += salarioAux * 0.08;
}

if (salario <= 2000.00){
    console.log('Isento');
} else{
    console.log('R$ ' + imposto.toFixed(2));
}