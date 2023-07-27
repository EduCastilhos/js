var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");
var a = parseInt(line[0]);
var b = parseInt(line[1]);
var c = parseInt(line[2]);
var aAux = a;
var bAux = b;
var cAux = c;

if (a < b && a < c){
    if (b > c){
        b = cAux;
        c = bAux;
    }
} else if (b < a && b < c){
    a = bAux;
    if (a < c){
        b = aAux;
    } else{
        b = cAux;
        c = aAux;
    }
} else{
    a = cAux;
    if (a < b){
        b = aAux;
        c = bAux;
    } else{
        c = aAux;
    }  
}

console.log(a);
console.log(b);
console.log(c);
console.log("");
console.log(aAux);
console.log(bAux);
console.log(cAux);