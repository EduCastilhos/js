var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");

var a = parseInt(line[0]);
var b = parseInt(line[1]);

if ((a % b == 0) || (b % a == 0)){
    console.log("Sao Multiplos");
} else {
    console.log("Nao sao Multiplos");
}