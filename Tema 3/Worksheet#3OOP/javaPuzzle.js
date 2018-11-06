export var ale = 0;
export var puzz = [];
export class Puzzle {
  constructor(dimension) {
    this.dimension = dimension;
     this.puzz = puzz;
     this.ale = ale;

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


//setTimeout(function(){ alert("Tu tiempo se a acabado"); }, 100000);
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
dibujar(columnas,filas){
document.write("<table border ='0' cellspacing ='2' bgcolor ='white' width ='200'> ");
		

for (var i=0;i<columnas;i++){
	document.write("<tr   height ='100'>");
	for(var j=0;j<filas;j++){



	document.write("<td bgcolor='white' width = '100 ' > "+ puzz[i][j] + "</td>");


}
document.write("</tr>");
}
document.write("</table>")

	}

}


export function barajar(){
  for(var z=0; z<=1000;z++){

puzzle2.moverPiezaAleatoria(Math.trunc(Math.random() * ( puzzle2.dimension -1)),Math.trunc(Math.random() * ( puzzle2.dimension -1)),Math.trunc(Math.random() * ( puzzle2.dimension -1)),Math.trunc(Math.random() * ( puzzle2.dimension -1)))
}
}
//Ejemplo de uso de creacion de puzzle
//var puzzle2 = new Puzzle(4);
//puzzle2.dibujar(4,4);

//Voy a exportar las clases y variables para poder implementar un Puzzle
