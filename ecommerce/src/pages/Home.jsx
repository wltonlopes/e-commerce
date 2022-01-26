import React, { useState } from 'react';
// import ProdContext from '../context/ProdContext';

export default function Home() {
  // const {login, setLogin} = useContext(ProdContext);
  const [ prod, setProd ]= useState([]);

  const fetchAPi = async () => {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    const data = await response.json();
    setProd(data.results);
  };  

  if (prod === undefined || prod.length === 0) {
    fetchAPi();
    return <div>Carregando ;;; </div>
  }
    console.log(prod);

    const produtoLink = (e) => {
      console.log(e.target.id);
      // window.location.href = `/produto/${e.target.id}`;
    }
  
  return (
    <div>
    <h1>Conheças nossos incriveis produtos.</h1>
    <div className="card-group">
    {
      prod.map((prod) => 
        <div value={prod.id}>
          <div className="card">
            <div className="card-image">
              <img src={prod.thumbnail} alt=""/>
              </div>
              <h3>nome: {prod.title}</h3>
              <h3>preco: { prod.prices.prices.amount }</h3>
              <h3>quantidade: { prod.sold_quantity }</h3>
              <button id={prod.id } onClick={ produtoLink } >Comprar</button>
            </div>
        </div> )}
        </div>
    </div>
  );
}
