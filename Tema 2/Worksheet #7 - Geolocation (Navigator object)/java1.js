
if ("geolocation" in navigator) {

	//navigator.geolocation.getCurrentPosition(success,error);
	navigator.geolocation.watchPosition(success);
  /* geolocation is available */
} else {

  /* geolocation IS NOT available */
}

function success(pos) {
  var crd = pos.coords;

  document.write('Your current position is:');
  document.write(`Latitude : ${crd.latitude}`);
 document.write(`Longitude: ${crd.longitude}`);
 document.write(`More or less ${crd.accuracy} meters.`);
}
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}