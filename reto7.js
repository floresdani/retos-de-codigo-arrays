/*Escriba una función llamada "findShortestWordAmongMixedElements".

Dado un array, "findShortestWordAmongMixedElements" devuelve la cadena más corta dentro del array dado.

Notas:

Si hay vínculos, debería devolver el primer elemento que aparezca en el array dado.
Espere que el array tenga otros valores además de las cuerdas.
Si el array dado está vacío, debería devolver una cadena vacía.
Si el array dado no contiene cadenas, debería devolver una cadena vacía.
Ejemplo:

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two' */

function findShortestWordAmongMixedElements(arr) {
  if (arr.length === 0) {
    return "";
    }
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        newArr.push(arr[i]);
      }
    }
    if (newArr.length === 0) {
      return "";
    }
      var shortStr = newArr[0];
        for (var j = 1; j < newArr.length; j++) {
          if (shortStr.length > newArr[j].length) {
            shortStr = newArr[j];
          }
        }
        return shortStr;
}
console.log()