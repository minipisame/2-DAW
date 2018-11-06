	var result = 0
function f(...v){
	for(var i=0; i<=v.length-1; i++){
		if(v[i] % 2 == 0)
	
		result = v[i] + result;
	}
	document.write(result);
}

f(2,3,4,5,6,1)