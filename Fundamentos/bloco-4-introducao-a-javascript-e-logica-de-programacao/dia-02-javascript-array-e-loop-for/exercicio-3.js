let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;


for (let index = 0; index < numbers.length; index += 1){
  sumNumbers += numbers[index];
}

let qntNumerosArray = numbers.length;
let mediaAritmetica = sumNumbers / qntNumerosArray;

console.log('A média aritmética dos números do array é: ' + mediaAritmetica);