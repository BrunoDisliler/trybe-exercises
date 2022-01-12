// Crie uma função que receba uma frase e retorne qual a maior palavra.

//  Exemplo:
//            longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const string = "Antônio foi no banheiro e não sabemos o que aconteceu";

let longestWord = "";

string.split(" ").forEach(word => {
  if (word.trim().length > longestWord.length) {
    longestWord = word.trim(); // trim() is a string method that is used to remove whitespace characters.
  }
});

console.log(longestWord);