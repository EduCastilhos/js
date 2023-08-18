var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var mes = parseInt(lines[0]);
var description = '';

switch(mes){
    case 1:
        description = 'January';
        break;
    case 2:
        description = 'February';
        break;
    case 3:
        description = 'March';
        break;
    case 4:
        description = 'April';
        break;
    case 5:
        description = 'May';
        break;
    case 6:
        description = 'June';
        break;
    case 7:
        description = 'July';
        break;
    case 8:
        description = 'August';
        break;
    case 9:
        description = 'September';
        break;
    case 10:
        description = 'October';
        break;
    case 11:
        description = 'November';
        break;
    case 12:
        description = 'December';
        break;
}

console.log(description);