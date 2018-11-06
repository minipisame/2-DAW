var dados = new Array(6);
	for(var i=1;i<=6;i++){
		dados[i] = new Array(6)
		for(var j=1;j<=6;j++){
			dados[i][j]= 0;
		}
	}

	for (var i = 1; i <=3600; i++) {
		var d1 = Math.trunc(Math.random() * 6 + 1);
		var d2 = Math.trunc(Math.random() * 6 + 1);
    dados[d1][d2] ++ ;
  }




for(var i=1;i<=6;i++){
		for(var j=1;j<=6;j++){
			document.write("la tirada " + i + "+" + j + " sale " + dados[i][j]);
		}
	}
