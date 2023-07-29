var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");

var hi = parseInt(line[0]);
var mi = parseInt(line[1]);
var hf = parseInt(line[2]);
var mf = parseInt(line[3]);
var hr = hf - hi;
var min = mf - mi;

if (hr < 0){
    hr = 24 + hr;
}

if (min < 0){
    min = 60 + min;
    hr--;
}

if (hi == hf && mi == mf){
    console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
} else{
    console.log('O JOGO DUROU ' + hr + ' HORA(S) E ' + min + ' MINUTO(S)');
}