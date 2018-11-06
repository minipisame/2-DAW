function potencia(x,y){
if(y==1){
	return x;
}
else{
	return x * potencia(x,y-1);
}
}

document.write(potencia(3,3));