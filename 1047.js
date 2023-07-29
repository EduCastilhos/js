var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var line = lines.shift().split(" ");

var hi = parseInt(line[0]);
var mi = parseInt(line[1]);
var hf = parseInt(line[2]);
var mf = parseInt(line[3]);
var hr;
var min;

// horas
if (hi < hf){
    hr = hf - hi;
} else if (hf < hi){
    hr = (24 - (hi - hf));
} else{
    hr = 24;
}

// minutos
if (mi < mf){
    min = mf - mi;
} else if (mf < mi){
    min = (60 - mi) + mf;
    if (hi < hf){
        hr -= 1;
    }
} else{
    min = 0;
}

console.log('O JOGO DUROU ' + hr + ' HORA(S) E ' + min + ' MINUTO(S)');