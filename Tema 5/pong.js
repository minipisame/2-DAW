var pasox = -4;
var pasoy = -3;
function mover(){
	var posx = parseInt(circulo.getAttribute("cx"));
	var posy = parseInt(circulo.getAttribute("cy"));
	var posxI =  parseInt(rectanguloI.getAttribute("x"));
	var posyI =  parseInt(rectanguloI.getAttribute("y"));
	var posxD =  parseInt(rectanguloD.getAttribute("x"));
	var posyD =  parseInt(rectanguloD.getAttribute("y"));
if(posx <=70 && (posy <= posyI+200) && (posy >= posyI)){
pasox = -pasox;
}
if(posx >= 430 && (posy <= posyD+200) && (posy >= posyD)){
	pasox = -pasox;
}
	if (( posy <= 2) || (posy >= 485)) {
    pasoy = -pasoy;
  }
  if (( posx <= 2) || (posx>=498) ){
    pasox = -pasox;
  }
	circulo.setAttribute('cx',(posx + pasox));
	circulo.setAttribute('cy',(posy + pasoy));
}

 function moverI(event){
 	if(event.keyCode == 38  ){

 		var posxI =  parseInt(rectanguloI.getAttribute("x"));
 	
	var posyI =  parseInt(rectanguloI.getAttribute("y"));
	if(posyI <= 0){

	}
	else{
rectanguloI.setAttribute('x',(posxI));
	rectanguloI.setAttribute('y',(posyI)-5);
}
}
 	if(event.keyCode == 40  ){

 		var posxI =  parseInt(rectanguloI.getAttribute("x"));
 	
	var posyI =  parseInt(rectanguloI.getAttribute("y"));
	if(posyI >= 300){

	}
	else{
rectanguloI.setAttribute('x',(posxI));
	rectanguloI.setAttribute('y',(posyI)+5);
}

}


		if(event.keyCode == 87  ){

 		var posxI =  parseInt(rectanguloD.getAttribute("x"));
 	
	var posyI =  parseInt(rectanguloD.getAttribute("y"));
	if(posyI <= 0){

}
else{
rectanguloD.setAttribute('x',(posxI));
	rectanguloD.setAttribute('y',(posyI)-5);
}

}

 
	if(event.keyCode == 83 ){

 		var posxI =  parseInt(rectanguloD.getAttribute("x"));
 	
	var posyI =  parseInt(rectanguloD.getAttribute("y"));
	if(posyI >= 300){

	}
	else{
rectanguloD.setAttribute('x',(posxI));
	rectanguloD.setAttribute('y',(posyI)+5);

}
}
 
}
window.onkeydown = moverI;
setInterval(mover,50);

