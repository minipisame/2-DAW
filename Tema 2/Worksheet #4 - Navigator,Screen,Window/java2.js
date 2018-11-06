	var datos = [window.screen.availTop,window.screen.availLeft,window.screen.availHeight,window.screen.availWidth,window.screen.colorDepth,window.screen.orientation,]
	document.write("<table border ='0' cellspacing ='2' bgcolor ='black' width ='200'> ");
for(var i=0;i<=datos.length;i++){



		document.write("<tr bgcolor='white'  height ='50'>");
	
document.write("<td width = '50 ' >" + datos[i] + "   </td>");



document.write("</tr>");
}
  
 document.write("</table>") 
 location.replace("https://www.w3schools.com");