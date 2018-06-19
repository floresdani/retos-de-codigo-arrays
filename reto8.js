/*Escriba una función llamada "findSmallestNumberAmongMixedElements".

Dado un arreglo de elementos mixtos, "findSmallestNumberAmongMixedElements" devuelve el número más pequeño dentro del arreglo dado.

Notas:

Si el arreglo está vacío, debería devolver 0.
Si el arreglo no contiene números, debería devolver 0.
Ejemplo:

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4 */

function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length === 0) {
    return 0;
  }
  var newArr = [];
  for ( var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      newArr.push(arr[i]);
    }
  }
  if (newArr.length === 0) {
    return 0;
  }
  var smallestNum = newArr[0];
  for (var j = 1; j < newArr.length; j++) {
    if (smallestNum > newArr[j]) {
      smallestNum = newArr[j];
    }
  }
  return smallestNum;
}
module.exports = findSmallestNumberAmongMixedElements;