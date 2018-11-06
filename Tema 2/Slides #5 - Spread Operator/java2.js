var result=0;
function addOnlyNums(...v){
	for(var i=0; i<=v.length-1; i++){
	if(typeof v[i] == "string")	{

	}	
	else{
		result = (v[i] + result);
	}


}
	document.write(result);
}
addOnlyNums(2,"Hola",2,"pepino")
