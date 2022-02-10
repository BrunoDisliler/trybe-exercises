let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = [];

for (i=0; i<numbers.length; i+=1){
  if (numbers[i] % 2 === 1){
    impares.push(numbers[i]);
  }
}
console.log('Os números ímpares encontrados no array foram: ' + impares);