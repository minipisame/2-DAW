
//document.write(fechaHoy);
var fechaHoy = new Date();
var fecha85 = new Date();
fecha85.setDate(fechaHoy.getDate()+85);

var fechamaqueta1 = fechaHoy.getDate() + "/"  + (fechaHoy.getMonth()+1) + "/" +  fechaHoy.getFullYear();
document.write(fechamaqueta1);
document.write("<br/>")
var fecha187 = fechaHoy.setDate(fechaHoy.getDate()-187);
var fechamaqueta2 = fechaHoy.getDate() + "/"  + (fechaHoy.getMonth()+1) + "/" +  fechaHoy.getFullYear();
document.write(fechamaqueta2);
fecha85.setYear(fecha85.getFullYear()+2);
document.write("<br/>")
document.write(fecha85);