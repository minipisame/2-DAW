
function dibujar(){
//	document.getElementById("Posicion").innerHTML = 
document.write("<table id='tabla'  align='center'  border ='0' cellspacing ='2' bgcolor ='black' width ='500'> ");
    
var contador =0;
for (var i=0;i<=10;i++){
  document.write("<tr   height ='50'>");
  for(var j=0;j<10;j++){



  document.write("<td  id='"+ (contador) + "' onmousemove='myFunction(this)' bgcolor='white' width = '100 ' > </td>");

contador++;
}
document.write("</tr>");
}
document.write("</table>")

  }

function myFunction(e) {
      if(event.shiftKey){
    e.style.backgroundColor = "red";
}
  if(event.altKey){
    e.style.backgroundColor = "blue";
  }
  if(event.buttons == 4){
    e.style.backgroundColor = "white";
  }
    if(event.ctrlKey){
    for (var i=0;i<=100;i++){
  
      document.getElementById(i).style.backgroundColor = "white";
  }
}
}
  
 