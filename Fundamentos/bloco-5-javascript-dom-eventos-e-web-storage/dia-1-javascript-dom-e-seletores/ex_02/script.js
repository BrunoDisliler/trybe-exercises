// Exercício 1
function changeText() {
  let text = document.getElementsByTagName("p")[1];
  text.innerText = "Dev Pleno com salário de 10 mil";
}
changeText();

// Exercício 2
function changeColor() {
  let color = document.getElementsByClassName("main-content")[0];
  color.style.backgroundColor = "rgb(76,164,109";
}
changeColor();

// Exercício 3
function changeToWhite() {
  let colorWhite = document.getElementsByClassName("center-content")[0];
  colorWhite.style.backgroundColor = 'white';
}
changeToWhite();

// Exercício 4
function textFix() {
  let text = document.getElementsByTagName('h1')[0];
  text.innerText = "Onde me vejo daqui 2 anos";
}

// Exercício 5
function modifiedText() {
  let modified = document.getElementsByTagName('p')[0];
  modified.innerText = modified.innerText.toUpperCase();
}
modifiedText();

// Exercício 6
function showContent() {
  let tagP = document.getElementsByTagName('p');
  for(let i=0; i < tagP.length; i += 1) {
    console.log(tagP[i].innerHTML);
  }
}
showContent();