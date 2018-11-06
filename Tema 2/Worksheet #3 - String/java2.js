function checkType(words) {
  words = String(words).trim();
  const regxs = {
    "lower": /^[a-z0-9 ]+$/,
    "upper": /^[A-Z0-9 ]+$/,
    "upperLower": /^[A-Za-z0-9 ]+$/
  }
 
  if (regxs.lower.test(words)) return 'Todo esta en minusculas';
  if (regxs.upper.test(words)) return 'Todo esta en mayusculas';
  if (regxs.upperLower.test(words)) return 'Estan en mayusculas y minusculas';
  return -1;
}

				
			
var texto = prompt("Que texto quiere analizar");
document.write(checkType(texto));