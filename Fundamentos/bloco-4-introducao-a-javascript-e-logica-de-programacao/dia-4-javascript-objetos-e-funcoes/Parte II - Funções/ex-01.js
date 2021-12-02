let word = String;

function PalindromeVerfify(word){
  if (word.split('').reverse().join('') === word){
    return true;
  } else {
    return false;
  };
};

console.log(PalindromeVerfify('Trybe'));