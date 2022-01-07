// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const h1 = document.createElement('h1');
h1.innerText = "Exercício 5.2 - JavaScript DOM como filho da tag body";
document.body.appendChild(h1);

// 2 - Adicione a tag main com a classe main-content como filho da tag body ;
const tagMain = document.createElement('main');
tagMain.className = 'main-content';
document.body.appendChild(tagMain);

// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const tagSection = document.createElement('section');
tagSection.className = 'center-content';
tagMain.appendChild(tagSection);

// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const tagP = document.createElement('p');
tagP.innerText = "Teste dos Exercícios";
tagSection.appendChild(tagP);

// 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const tagSection2 = document.createElement('section');
tagSection2.className = 'left-content';
tagMain.appendChild(tagSection2);

// 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const tagSection3 = document.createElement('section');
tagSection3.className = 'right-content';
tagMain.appendChild(tagSection3);

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
tagSection2.appendChild(img);