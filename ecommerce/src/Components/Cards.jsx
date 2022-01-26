import React from 'react';

export default function Cards(id, nome, imagem, preco,quantidade) {
  return(
      <div>
        <div className="card" onClick={ console.log(id)}>
          <div className="card-image">
            <img src={imagem} alt=""/>
            </div>
            <h3>nome: { nome }</h3>
            <h3>preco: { preco }</h3>
            <h3>quantidade: { quantidade }</h3>
          </div>
      </div>
  ); 
}
