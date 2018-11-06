var myElement = document.querySelectorAll("p");
function agrandar(x) {

	for (var i = 0; i < myElement.length; i++) {
    myElement[i].style.fontSize = "large";
}
   //document.getElementById("p").style.fontSize = "30px";
}

function disminuir(x) {

		for (var i = 0; i < myElement.length; i++) {
    myElement[i].style.fontSize = "initial";
}
  // document.getElementById("p").style.fontSize = "12px";
}