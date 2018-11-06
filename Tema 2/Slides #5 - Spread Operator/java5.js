	var result = 0
function onlyUniques(...v){
	for(var i=0; i<=v.length-1; i++){
		for(var j=i + 1;j<=v.length-1;j++){
			if(v[i] == v[j]){
				delete v [j];
			}
		}
	
		
	}
	alert(v);
}

onlyUniques(2,2,3,3,5,6,1);