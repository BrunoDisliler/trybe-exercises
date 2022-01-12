// Crie uma função que receba um número e retorne seu fatorial.

const fatorial = num => (num === 1 ? 1 : num * fatorial(num -1)); 

console.log(fatorial(5));

