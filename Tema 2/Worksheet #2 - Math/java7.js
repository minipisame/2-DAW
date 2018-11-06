var i;
var j;
var num = prompt("Introduzca un numero");
	document.write("<table border ='0' cellspacing ='2' bgcolor ='black' width ='200'> ");
	for(j=1;j<=10;j++){
		document.write("<tr bgcolor='white'  height ='50'>");
	
document.write("<td width = '50 ' > "+ num +" &nbsp;  </td>");
document.write("<td width = '50 ' >" + Math.sin(num) + " &nbsp;  </td>");


document.write("</tr>");
num++ ;
}
document.write("</table>")