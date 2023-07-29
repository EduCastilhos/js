var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");

var a = parseFloat(line[0]);
var b = parseFloat(line[1]);
var c = parseFloat(line[2]);

if (((a + b) > c) && ((a + c) > b) && ((b + c) > a)){
    console.log("Perimetro =", (a + b + c).toFixed(1));
} else {
    console.log("Area =", (((a + b) * c) / 2).toFixed(1));
}