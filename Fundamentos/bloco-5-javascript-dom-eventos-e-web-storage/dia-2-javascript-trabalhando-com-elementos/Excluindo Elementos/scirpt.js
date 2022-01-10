// Remova todos os elementos filhos de paiDoPai exceto pai,

const pai = document.getElementById('pai');

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  const currentChildren = pai.childNodes[index];
  if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
  }
}

// elementoOndeVoceEsta e primeiroFilhoDoFilho.
const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();