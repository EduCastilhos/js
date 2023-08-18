var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines[0]);
var cidade = "";
 
switch(a){
    case 61:
        cidade = "Brasilia";
        break;
    case 71:
        cidade = "Salvador";
        break;
    case 11:
        cidade = "Sao Paulo";
        break;
    case 21:
        cidade = "Rio de Janeiro";
        break;
    case 32:
        cidade = "Juiz de Fora";
        break;
    case 19:
        cidade = "Campinas";
        break;
    case 27:
        cidade = "Vitoria";
        break;
    case 31:
        cidade = "Belo Horizonte";
        break;
}

if (cidade == ""){
    cidade = "DDD nao cadastrado";
}

console.log(cidade);