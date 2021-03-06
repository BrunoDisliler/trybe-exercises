import React, { Component } from 'react'

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

export default class Content extends Component {
  render() {
    return (
      <div>
        {conteudos.map((conteudo) => {
          return (
            <div key={conteudo.conteudo}>
              <h4>O Conteúdo é: {conteudo.conteudo}</h4>
              <p>Status: {conteudo.status}</p>
              <p>Bloco: {conteudo.bloco}</p>
            </div>
          );
        })}
      </div>
    )
  }
}
