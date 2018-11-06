function procesar(palabra) {
	var palabraFormat = palabra.toUpperCase();
	document.write("<table border ='0' cellspacing ='2' bgcolor ='white' width ='200'> ");
	for(j=0;j<=palabra.length-1;j++){
		for(i=0;i<=palabra.length-1;j++){
			var pala += palabra.charAt(palabra[i]) + " ";

		}
	}

	for(j=0;j<=palabra.length-1;j++){
		document.write("<tr bgcolor='white'  height ='50'>");
	
document.write("<td width = '50 ' > " + palabraFormat + "  &nbsp;  </td>");



document.write("</tr>");
  
  }
}
  procesar("Hola");