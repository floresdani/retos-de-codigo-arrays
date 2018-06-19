/*
Dada una lista de números enteros no negativos y una suma objetivo, encuentre un par de números que sumen a la suma objetivo.

Ejemplo de entrada:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

const findPairForSum = (array, number) => {
  for (let i = 0 ; i < array.length ; i++) {
    let add = array[i]; 
    let arr = (array.slice(0, i)).concat(array.slice(i+1, array.length));
    
    for (let j = 0; j < arr.length ; j++) {
      if (add + arr[j] === number) {
        return [add, arr[j]];
      }
    }
  }  
}


