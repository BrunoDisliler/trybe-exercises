// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const h1 = document.createElement('h1');
h1.innerText = "Exercício 5.2 - JavaScript DOM como filho da tag body";
document.body.appendChild(h1);

// 2 - Adicione a tag main com a classe main-content como filho da tag body ;
const tagMain = document.createElement('main');
tagMain.className = 'main-content';
document.body.appendChild(tagMain);