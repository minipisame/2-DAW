var con1 =0;
var con2 =0;
var con3 =0;
var con4 =0;
var con5 =0;
var con6 =0;


function lanzamiento(){
	var number = Math.trunc(Math.random() * 6 + 1)  ;
	//document.write(number);

switch(number){
	case 1: con1++; break;
	case 2: con2++; break;
	case 3: con3++; break;
	case 4: con4++; break;
	case 5: con5++; break;
	case 6: con6++; break;
}

}

for(var i=0; i<=6000;i++){
lanzamiento();

}

	document.write(con1 + "</br>");
	document.write(con2 + "</br>");
	document.write(con3 + "</br>");
	document.write(con4 + "</br>");
	document.write(con5 + "</br>");
	document.write(con6 + "</br>");

