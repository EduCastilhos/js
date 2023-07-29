var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");

var a = parseFloat(line[0]);
var b = parseFloat(line[1]);
var c = parseFloat(line[2]);

// ordenação maior p/ menor
if (a < b){
    var aux = b;
    b = a;
    a = aux;
}
if (a < c){
    var aux = c;
    c = a;
    a = aux;
}
if (b < c){
    var aux = c;
    c = b;
    b = aux;
}

if (a >= b + c){
    console.log("NAO FORMA TRIANGULO");
} else {
    if (a*a == b*b + c*c){
        console.log("TRIANGULO RETANGULO");
    } 
    if (a*a > b*b + c*c){
        console.log("TRIANGULO OBTUSANGULO");
    } 
    if (a*a < b*b + c*c){
        console.log("TRIANGULO ACUTANGULO");
    } 
    if (a == b && a == c){
        console.log("TRIANGULO EQUILATERO");
    } else if ((a == b && b != c) || (a == c && c != b) || (b == c && c != a)){
        console.log("TRIANGULO ISOSCELES");
    }
}