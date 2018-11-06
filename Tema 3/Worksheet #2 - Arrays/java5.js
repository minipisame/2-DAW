function paresImpares(){
	var array = [];
	for(var i=0; i<100;i++){
		 array[i] = Math.trunc(Math.random() * 1000 )  ;
	}
	document.write(array);
	array.sort(compara);
	document.write("</br>");
	document.write("</br>");
	document.write(array);
}

var compara = function compare(a, b) {
  if (a % 2 == 0 && b % 2 != 0) {
    return -1;
  }
  else  {
    return 1;
  }
}
paresImpares();