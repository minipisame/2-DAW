var tablero = [];
var contador = 0;
class Raya {
  constructor() {
    this.tablero = tablero;
    this.contador=contador;
  tablero = Array(3);
   for (var i = 0; i < 3; i++) {
 tablero[i] = new Array(3);
  for (var j = 0; j < 3; j++) {
    tablero[i][j] = contador;
    contador++;
  }
}
}

inicioJuego(){

  for(var i=0; i< 3;i++){
  var jugador1 = parseInt(prompt("Jugador1 elija donde quiere colocar su ficha"));
     for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if(jugador1 == tablero[i][j])
 var posicionx =  i ;
var posiciony = j;
  }
}
tablero[posicionx][posiciony]= "x";

  var jugador2 = parseInt(prompt("Jugador 2 elija donde quiere colocar su ficha"));
     for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if(jugador2 == tablero[i][j])
 var posicionx =  i ;
var posiciony = j;
  }
}
tablero[posicionx][posiciony]= "O";

}

}

dibujar(){
document.write("<table border ='0' cellspacing ='2' bgcolor ='white' width ='200'> ");
    

for (var i=0;i<3;i++){
  document.write("<tr   height ='100'>");
  for(var j=0;j<3;j++){



  document.write("<td bgcolor='white' width = '100 ' > "+ tablero[i][j] + "</td>");


}
document.write("</tr>");
}
document.write("</table>")

  }



}
var juego = new Raya();