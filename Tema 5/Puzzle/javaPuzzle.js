export var ale = 0;
export var puzz = [];
export   var vacio = {id: "F2C2", src: "9.png"};
export class Puzzle {
  constructor(dimension) {
    this.dimension = dimension;
     this.puzz = puzz;
     this.ale = ale;
     this.vacio =vacio;
   puzz = Array(this.dimension);
   for (var i = 0; i < this.dimension; i++) {
 puzz[i] = new Array(this.dimension);
  for (var j = 0; j < this.dimension; j++) {
  	puzz[i][j] = 0;
  }
}

var contador=0;
for (var i = 0; i < this.dimension; i++) {
  for (var j = 0; j < this.dimension; j++) {
      puzz[i][j] = contador;
      contador++;
}
}



}



getPieza0(){
	  for (var i = 0; i < this.dimension; i++) {
  for (var j = 0; j < this.dimension; j++) {
  	if(puzz[i][j] == 0 ){
  		var piezaInizial = [i,j];
  		return piezaInizial;
  	}
  }
}
	return 0;
}
moverPieza(posicionDeseada,pieza0){

	var piezay = pieza0.pop();
    var piezax = pieza0.pop();

    switch(posicionDeseada) {
    case "izquierda":
       if(piezay - 1 < 0){

       }
        else{
            var intermedio = puzz[piezax][piezay-1];
      puzz[piezax][piezay-1]=puzz[piezax][piezay];
      puzz[piezax][piezay] = intermedio;
        }
        break;
    case "derecha":
          if((piezay + 1) > 3 ){

          }
        else{
            var intermedio = puzz[(piezax)][piezay+1];
      puzz[(piezax)][piezay+1]=puzz[piezax][piezay];
      puzz[piezax][piezay] = intermedio;
        }
        break;
   case "arriba":
        
           if(piezax - 1  < 0){

           }
        else{
            var intermedio = puzz[piezax-1][piezay];
      puzz[piezax-1][piezay]=puzz[piezax][piezay];
      puzz[piezax][piezay] = intermedio;
        }
        break;
    case "abajo":
       if(piezax + 1 > 3){

       }
        else{
            var intermedio = puzz[piezax+1][piezay];
      puzz[piezax+1][piezay]=puzz[piezax][piezay];
      puzz[piezax][piezay] = intermedio;
        }
        break;
}




}

moverPiezaAleatoria(posicionxPrimera,posicionyPrimera,piezaxSegunda,piezaySegunda){


 
      var intermedio = puzz[posicionxPrimera][posicionyPrimera];
      puzz[posicionxPrimera][posicionyPrimera]=puzz[piezaxSegunda][piezaySegunda];
      puzz[piezaxSegunda][piezaySegunda] = intermedio;




}

  Mezclar(){
    var cont=0;
    var lista = [1,2,3,4,5,6,7,8];
lista = lista.sort(function() {return Math.random() - 0.5});
for (var i=0; i < 3; i++) {
 for (var j=0; j < 3; j++) {
  var elemento = "F" + i.toString() + "C" + j.toString();
  document.getElementById(elemento).src = lista[cont].toString() + ".jpg";
         cont++;
 }
}
  }

dibujar(){
var tabla = document.createElement('table');
document.getElementById("puzzle").appendChild(tabla);
tabla.style.border = "solid 2px";
var contador=1;
for (var i=0;i<3;i++){  
var tr = document.createElement('tr');
  for(var j=0;j<3;j++){
var td = document.createElement('td');
var img= document.createElement('img');
img.setAttribute("id", "F"+i+"C"+j);
td.appendChild(img);
td.style.width ="427px";
td.style.height ="240px";
tr.appendChild(td);

}

tabla.appendChild(tr);
}
  for (var x=0; x < 3; x++) {
 for (var z=0; z < 3; z++) {
  var elemento = "F" + x.toString() + "C" + z.toString();
  var el = document.getElementById(elemento); 
   el.src =contador+".jpg";
  el.addEventListener("click",function(){Adyacentes(this)}); 
  contador++;
  }
}



 /* 
 document.write("<table border ='0' cellspacing ='2' bgcolor ='white' width ='200'> ");
		

for (var i=0;i<columnas;i++){
	document.write("<tr   height ='100'>");
	for(var j=0;j<filas;j++){



	document.write("<td bgcolor='white' width = '100 ' > "+ puzz[i][j] + "</td>");


}
document.write("</tr>");
}
document.write("</table>")
*/

	}

}
function Adyacentes(entrada){
 var elemento1 = vacio.id;
 var elemento2 = entrada.id;
var  i = parseInt(elemento1.charAt(1));
 var j = parseInt(elemento1.charAt(3));
 var x = parseInt(elemento2.charAt(1));
 var y = parseInt(elemento2.charAt(3));
 switch (Math.abs(i - x)) {
  case 0:
   if (Math.abs(j - y) == 1) {
    Cambiar(entrada);
   }
   break;
  case 1:
   if (j == y) {
    Cambiar(entrada);
   }
   break;
 }
 }
function Cambiar(entrada) {
var  i = vacio.id;
 var aux = document.getElementById(i);
 aux.src = entrada.src;
 entrada.src = "9.png";
 vacio = entrada;
}



