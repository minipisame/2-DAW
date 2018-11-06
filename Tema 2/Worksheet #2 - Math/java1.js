var number = Math.random()  ;
document.write(number + "<br/>");

var number = Math.random() * 200 ;
while(number < 100){
	var number = Math.random() * 200 ;
}
document.write(number + "<br/>");

var a = prompt("Primer numero");
var b = prompt("Segundo numero");
var ale = Math.random() * b ; 
while( ale < a || ale > b){
	var ale = Math.random() * b ; 
}
document.write(ale + "<br/>");
