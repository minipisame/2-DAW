function createCookie(value) {

    var date = new Date();
    date.setTime(date.getTime()+(5*60*60*1000));
    var expires = " expires="+date.toGMTString();


var cookie=  document.cookie = "usuario ="+value+ ";" +expires+"; path=/";

}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var username = getCookie("usuario");
    if (username != "") {
        alert("Bienvenido " + username);
    } else {
        username = prompt("Escriba su nombre:", "");
        if (username != "" && username != null) {
            createCookie(username);
        }
    }
}
function borrarCookie(){
	var username = getCookie("usuario");
	if(username != ""){
		document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	}
}

function Fondo(){
	var color=document.getElementById("color").value;
	
		document.getElementById("body").style.backgroundColor = color;


	

}
checkCookie();