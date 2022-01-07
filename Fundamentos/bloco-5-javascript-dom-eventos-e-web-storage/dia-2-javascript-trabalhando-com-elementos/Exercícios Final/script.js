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

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const ul = document.createElement('ul');
tagSection3.appendChild(ul);

const numbersList = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let i = 0; i < numbersList.length; i += 1) {
  const elementLi = document.createElement('li');
  elementLi.innerHTML = numbersList[i];
  ul.appendChild(elementLi);
}

// 9 - Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
const firstH3 = document.createElement('h3');
tagMain.appendChild(firstH3);
const secondH3 = document.createElement('h3');
tagMain.appendChild(secondH3);
const thirdH3 = document.createElement('h3');
tagMain.appendChild(thirdH3);

// ALTERAÇÕES E REMOÇÕES

// Adicione a classe title na tag h1 criada;
h1.innerText = 'Isso é demais!';

// Adicione a classe description nas 3 tags h3 criadas;
firstH3.className = 'description';
secondH3.className = 'description';
thirdH3.className = 'description';

// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
tagMain.removeChild(tagSection2);

// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
tagSection3.style.marginRight = 'auto';

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
tagMain.style.backgroundColor = 'green';

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
ul.lastChild.remove();
ul.lastChild.remove();