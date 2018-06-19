
/*Dado cualquier arreglo, "getLargestNumberAmongMixedElements" devuelve el mayor número en el arreglo dado.

Notas:

El arreglo puede contener valores de un tipo distinto a los números.
Si el arreglo está vacío, debería devolver 0.
Si el arreglo no contiene números, debería devolver 0.
Ejemplo:

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5 */


function getLargestNumberAmongMixedElements(arr) {
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
   var largestNum = newArr[0];
   for (var j = 1; j < newArr.length; j++) {
     if (newArr[j] > largestNum) {
       largestNum = newArr[j];
     }
   }
   return largestNum;
 }
 module.exports = getLargestNumberAmongMixedElements;