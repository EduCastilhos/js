var input = require('fs').readFileSync('stdin', 'utf8')
var line = input.split('\n')

var a = parseInt(line.shift())
var b = parseInt(line.shift())
var x = a + b
   
console.log('X = ' + x)