
function factorial(x){
if(x==1){
	return x;
}
else{
	return x * factorial(x-1);
}
}



	document.write("<table border ='0' cellspacing ='2' bgcolor ='black' width ='200'> ");
	for(j=1;j<=10;j++){
		document.write("<tr bgcolor='white'  height ='50'>");
	
document.write("<td width = '50 ' > "+ j + " &nbsp;  </td>");
document.write("<td width = '50 ' >" + factorial(j) + " &nbsp;  </td>");


document.write("</tr>");
}
document.write("</table>")