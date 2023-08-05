var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = lines.shift();
var b = lines.shift();
var c = lines.shift();

if (a == "vertebrado"){
    if (b == "ave"){
        if (c == "carnivoro"){
            console.log("aguia");
        } else {
            console.log("pomba");
        }
    } else{
        if (c == "onivoro"){
            console.log("homem");
        } else {
            console.log("vaca");
        }
    }
} else if (a == "invertebrado"){
    if (b == "inseto"){
        if (c == "hematofago"){
            console.log("pulga");
        } else {
            console.log("lagarta");
        }
    } else{
        if (c == "hematofago"){
            console.log("sanguessuga");
        } else {
            console.log("minhoca");
        }
    }
}