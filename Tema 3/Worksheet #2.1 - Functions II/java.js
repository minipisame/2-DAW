var array =  [1,4,8,123,13,53,2];
var array2 = ["Hola","amigos","Como estamos","patata"]

var comparaA = function compare(a, b) {

  if ((a).toString().length > (b).toString().length) {
    return -1;
  }
  else  {
    return 1;
  }
}
var comparaB = function compare(a, b) {

  if (a.length > b.length) {
    return -1;
  }
  else  {
    return 1;
  }
}
function largeNumber(array){
array.sort(comparaA);
return array.shift();
}
function longestNumber(array){
array.sort(comparaB);
return array2.shift();
}
//document.write(largeNumber(array));
//document.write(longestNumber(array2))

//Ejercicio c
 var c = array.filter(function(item) { return  item % 2 == 0; });
 //document.write(c);

 //Ejercicio d
  var d = array.filter(function(item) { return  item % 2 != 0; });
  //document.write(d);

  //Ejercicio e
  console.log(array2.indexOf('Ho')); 


//Ejercicio f  
  var f = array.filter(function(item) { return  item % 3 == 0; });
  console.log(f);

  // Ejercicio g
  array = array.concat(array2);
 // document.write(array);

  //Ejercicio h
 document.write(array.sort(comparaA));

 //Ejercicio i 
 array.shift();

 //Ejercicio j
 array.unshift("Hola");

 //Ejercicio k
array.splice(1, 3, 'a', 'b', 'c', 'd'); 
