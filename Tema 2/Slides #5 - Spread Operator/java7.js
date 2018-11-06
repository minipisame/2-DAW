var result = 0;
function squareAndSum(...v){
	for(var i=0; i<=v.length-1; i++){

	
		result = (v[i] * v[i]) + result;
	}
	document.write(result);
}

squareAndSum(2,3,10,11)