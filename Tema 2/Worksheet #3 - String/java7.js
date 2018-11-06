function palindromo(cadena){
	var texto1 = invierteCadena(cadena);
	var texto2 = "";
	var arrayString = cadena.split(' ');
    for (var i = 0; i < arrayString.length; i++) {
        if (arrayString[i] != "") {
            texto2 += arrayString[i];
        }
    }
	if(texto1 == texto2){
		document.write("Es una cadena palindroma")
	}
	else{
		document.write("No es una cadena palindroma")
	}

}

function  invierteCadena(cad_arg){
	
	var texto = cad_arg.trim();
	var textoInverso = ""
	for(var i = texto.length - 1; i >=0; i--){
		if(texto.charAt(i) != " "){
		 textoInverso = textoInverso + texto.charAt(i);
		}
	}
	return textoInverso;
}
var cad = prompt("Inserte una cadena");
palindromo(cad);