/*Escriba una función llamada "filterOddElements".

Dado un array de números,"filterOddElements" devuelve un array que contiene sólo los números impares del array dado.

Ejemplo:

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]*/

function filterOddElements(arr) {
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i]);
    }
  }
  return odd;
}
console.log(filterOddElements);
