/*Escriba una función llamada computeSumOfAllElements.

Dado un array de números, computeSumOfAllElements devuelve la suma de todos los elementos del array dado.

Ejemplo:

var output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6 */

function computeSumOfAllElements(arr) {
  var sum = 0;
  
  for ( var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
module.exports = computeSumOfAllElements;