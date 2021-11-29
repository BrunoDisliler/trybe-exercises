let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;


for (let index = 0; index < numbers.length; index ++){
  sumNumbers += numbers[index];
}

let qntNumerosArray = numbers.length;
let mediaAritmetica = sumNumbers / qntNumerosArray;

if (mediaAritmetica > 20){
  console.log('Valor maior que 20!')
} else{
  console.log('Valor menor ou igual a 20!');
}
