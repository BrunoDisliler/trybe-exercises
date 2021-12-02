let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editor: 'Rocco',
    }
  ],
};

console.log(leitor.nome + " tem 2 livros favoritos. São eles: " + leitor.livrosFavoritos[0].titulo + " & " + leitor.livrosFavoritos[1].titulo + ".");