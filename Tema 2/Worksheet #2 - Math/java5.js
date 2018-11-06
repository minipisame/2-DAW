
var a = prompt("Primer numero");
var b = prompt("Segundo numero");
var c = prompt("Tercer numero");

var resultado1 = (-b + Math.sqrt(Math.pow(b,2)-4*a*c)) / 2* a;
var resultado2 = (-b - Math.sqrt(Math.pow(b,2)-4*a*c)) / 2 * a;
document.write(resultado1);
document.write("<br/>");
document.write(resultado2);