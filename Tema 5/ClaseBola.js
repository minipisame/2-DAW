
class bola {
	constructor(posx,posy,vx,vy,colo,radio){
		this.posx = posx;
		this.posy = posy;
		this.vx = vx;
		this.vy =vy;
		this.colo = colo;
		this.radio = radio;
		this.bola= document.createElementNS("http://www.w3.org/2000/svg","circle");
		this.bola.setAttribute("cx",this.posx);
		this.bola.setAttribute("cy",this.posy);
		this.bola.setAttribute("r",this.radio);
		this.bola.setAttribute("x",this.vx);
		this.bola.setAttribute("y",this.vy);
		this.bola.setAttribute("fill",this.colo);
		document.getElementById("svg").appendChild(this.bola);
	}


mover(){
		var pasox =  parseInt(this.bola.getAttribute("x"));
	var pasoy =  parseInt(this.bola.getAttribute("y"));
	var posx = parseInt(this.bola.getAttribute("cx"));
	var posy = parseInt(this.bola.getAttribute("cy"));
		if (( posy <= 2) || (posy >= 485)) {
    pasoy = -pasoy;
  }
  if (( posx <= 2) || (posx>=498) ){
    pasox = -pasox;
  }
	this.bola.setAttribute('cx',(posx + pasox));
	this.bola.setAttribute('cy',(posy + pasoy));
  
}

}
var bolitas = [];
for(var i =0; i<=10;i++){
	var posx =  Math.random() * (500) ;
	var posy =  Math.random() * (500) ;
	var vx =  Math.random() * (10-5)+5 ;
	var vy =  Math.random() * (10-5)+5 ;
	var radio =  Math.random() * (10-5)+5 ;
  bolitas.push(new bola(posx,posy,vx,vy,"blue",radio));
}

setInterval(bolitas[0].mover,50);
