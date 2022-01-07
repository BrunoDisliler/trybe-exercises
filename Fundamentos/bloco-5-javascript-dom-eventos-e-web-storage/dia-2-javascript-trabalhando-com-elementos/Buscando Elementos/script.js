// 1 - Acesse o elemento elementoOndeVoceEsta .
const ex01 = document.querySelector("#elementoOndeVoceEsta");

// 2 - Acesse o pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

const elementoPai = ex01.parentElement;
elementoPai.style.color = 'black';

// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
const filhoFilho = document.getElementById('primeiroFilhoDoFilho');
filhoFilho.innerText = 'É isso ai!';

// 4 - Acesse o primeiroFilho a partir de pai .
const primeiroFilho = document.getElementById('pai').firstElementChild;

// 5 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
const primeiroFilho2 = ex01.previousElementSibling;
    
// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const textElement = ex01.nextSibling;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = ex01.nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai.
const terceiroFilho2 = elementoPai.lastElementChild.previousElementSibling;