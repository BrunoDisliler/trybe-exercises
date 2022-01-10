// 1 - Crie um irmão para elementoOndeVoceEsta .
const pai = document.getElementById('pai');
const irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

// 2 - Crie um filho para elementoOndeVoceEsta .
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoElemento = document.createElement('section');
filhoElemento.id = 'filhoDoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElemento);

// 3 - Crie um filho para primeiroFilhoDoFilho .
const elementoOndeVoceEsta = document.getElementById('primeiroFilhoDoFilho');
const filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
elementoOndeVoceEsta.appendChild(filhoPrimeiroFilhoDoFilho);

// 4 - A partir desse filho criado, acesse terceiroFilho .
const terceiroFilho = filhoPrimeiroFilhoDoFilho
      .parentElement 
      .parentElement 
      .nextElementSibling; 
    console.log(terceiroFilho);