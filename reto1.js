/*Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve el promedio de la longitud de ambos strings.

Ejemplo de entrada:

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6
*/

const computeAverageLengthOfWords = (word1, word2) => {
  let str1 = word1.length;
  let str2 = word2.length;
    return ((str1 + str2)/2);
};

