var array = ["10","11","23","2234","545","657","8678","32","4"];
function poner0(array){
	for(var i=0;i<=9;i++){
		array.shift();
	}
		for(var i=0;i<=9;i++){
		array.unshift("0");
	}
}
function poner1(array){
	for(var i=0;i<array.length;i++){
		array.splice(i, 1, array[i]+1); 
	}
	
}
function juntar(array){
	 var junto = array.join('  ');
	return junto;
}
//poner0(array);
//poner1(array);
document.write(juntar(array));
