function  invierteCadena(cad_arg){
	
	var texto = cad_arg.split(" ");
	for(var i = texto.length - 1; i >=0; i--){
		document.write(texto[i] + "  ");
	}
}
function inviertePalabras(cad_arg){
	var texto2 = cad_arg.split(" ");
	for(var i = texto2.length - 1; i >=0; i--){
		for(var j = texto2[i].length; j >=0; j--){
			document.write(texto2[i].charAt(j));
		}
		document.write(" ");
	}
}
function encuentraPalabraMasLarga(cad_arg){
	var longitud = 0;
		var texto3 = cad_arg.split(" ");
		for(var i = texto3.length - 1; i >=0; i--){
			if(texto3[i].length > longitud){

			 longitud = texto3[i].length;
			}
		}
		document.write(longitud);
}

  function fltraPalabrasMasLargas(cad_arg, i){
  	var contador = 0;
  	var texto4 = cad_arg.split(" ");
		for(var v = texto4.length - 1; v >=0; v--){
			if(texto4[v].length > i){

			 contador++;
			}
		}
	
		document.write(contador);
  }
  function  cadenaBienFormada(cad_arg){
  	  	var texto5 = cad_arg.split(" ");
  	  		document.write(texto5[0].charAt(0).toUpperCase() + texto5[0].slice(1).toLowerCase() + " ");
  	  		for(var v = 1 ; v <= texto5.length - 1; v++){
  	  			document.write(texto5[v] + " ");
}

  
  }

var cadena = prompt("Inserte un texto");
//var numero = parseInt(prompt("Inserte un numero"));
//invierteCadena(cadena);
//inviertePalabras(cadena);
//encuentraPalabraMasLarga(cadena);
//fltraPalabrasMasLargas(cadena,numero);
cadenaBienFormada(cadena);