function valName(position){
	var nombre=document.getElementById("nombre").value;
	if(nombre.length <1 ){
		document.getElementById("nombre").style.backgroundColor = "red";
	}
	else{
		document.getElementById("nombre").style.backgroundColor = "green";
		
		document.getElementsByClassName("tick")[position].src = "https://icon-icons.com/icons2/1521/PNG/128/tickhd_106069.png";
	}

}
function volver(valor){
	document.getElementById(valor).style.backgroundColor = "white";
}

function nombreUser(position){
	    var ex = /[A-Za-z0-9_]{1,8}[\s]$/;
		var nombreu=document.getElementById("user").value;
	if(ex.test(nombreu)){
		document.getElementById("user").style.backgroundColor = "green";
		document.getElementsByClassName("tick")[position].src = "https://icon-icons.com/icons2/1521/PNG/128/tickhd_106069.png";
	}
	else{
			document.getElementById("user").style.backgroundColor = "red";
	}
}

function dniComprobar(position){
	    var ex = /^[0-9]{8}[a-z]?$/;
		var dni=document.getElementById("DNI").value;
	if(ex.test(dni)){
		document.getElementById("DNI").style.backgroundColor = "green";
		document.getElementsByClassName("tick")[position].src = "https://icon-icons.com/icons2/1521/PNG/128/tickhd_106069.png";
	}
	else{
			document.getElementById("DNI").style.backgroundColor = "red";
	}
}

function validarT(position){
	    var ex = /^[0-9]{8}/;
		var tele=document.getElementById("telefono").value;
	if(ex.test(tele)){
		document.getElementById("telefono").style.backgroundColor = "green";
		document.getElementsByClassName("tick")[position].src = "https://icon-icons.com/icons2/1521/PNG/128/tickhd_106069.png";
	}
	else{
			document.getElementById("telefono").style.backgroundColor = "red";
	}
}


function validarcorreo(position){
	    var ex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var correo=document.getElementById("correo").value;
	if(ex.test(correo)){
		document.getElementById("correo").style.backgroundColor = "green";
		document.getElementsByClassName("tick")[position].src = "https://icon-icons.com/icons2/1521/PNG/128/tickhd_106069.png";
	}
	else{
			document.getElementById("correo").style.backgroundColor = "red";
	}
}