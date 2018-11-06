	var result = 0
function f(...v){
	for(var i=0; i<=v.length-1; i++){
		
	
		result = v[i] + result;
	}
	document.write(result);
}

f(2,3,4,5,6,7,7,8,9,99)