/*Escriba una función llamada "getLongestWordOfMixedElements".

Dado un arreglo de tipos mixtos, "getLongestWordOfMixedElements" devuelve la cadena más larga del arreglo dado.

Notas:

Si el arreglo está vacío, debería devolver una cadena vacía ("").
Si el arreglo no contiene cadenas de texto, debería devolver una cadena vacía.
Ejemplo:

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word' */

function getLongestWordOfMixedElements(arr) {
  var longestStr = "";
  var strCount = 0;
  var strArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      strCount++;
      strArr.push(arr[i]);
    }
  }
  
  if (arr.length < 1 || strCount < 1) {
    return "";
  }
  longestStr = strArr[0];
  for (var j = 0; j < strArr.length; j++) {
    if (strArr[j] > longestStr) {
      longestStr = strArr[j];
    }
  }
  return longestStr;
}
module.exports = getLongestWordOfMixedElements;