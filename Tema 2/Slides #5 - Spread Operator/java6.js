var v = [1,2,3];
var b = [4,5,6];
var c = [4,4,4];
function combineAllArrays(...datos){
 var result =[];
for( i=0;i<datos.length;i++){
	result= [...result,datos[i]];
}
return result;
}
combineAllArrays(v,b,c);
