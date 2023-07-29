var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");

var hi = parseInt(line[0]);
var hf = parseInt(line[1]);

if (hi < hf){
    console.log('O JOGO DUROU ' + (hf - hi) + ' HORA(S)');
} else if (hf < hi){
    console.log('O JOGO DUROU ' + (24 - (hi - hf)) + ' HORA(S)');
} else{
    console.log('O JOGO DUROU 24 HORA(S)');
}