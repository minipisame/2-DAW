
	var datos = [window.navigator.appName ,window.navigator.appVersion ,window.navigator.appName  ,navigator.connection,navigator.geolocation ,navigator.keyboard ,navigator.userAgent]
	document.write("<table border ='0' cellspacing ='2' bgcolor ='black' width ='200'> ");
for(var i=0;i<=datos.length;i++){



		document.write("<tr bgcolor='white'  height ='50'>");
	
document.write("<td width = '50 ' >" + datos[i] + "   </td>");



document.write("</tr>");
}
  
 document.write("</table>") 