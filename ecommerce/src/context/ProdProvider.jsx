import React, {useState} from 'react';
import ProdContext from './ProdContext';

function ProdProvider ({ children }) {
  const [login, setLogin] = useState("");
  const [produtos, setProdutos] = useState([]);

  const value ={
    login,
    setLogin,
    produtos,
    setProdutos
  }
  // useEffect(() => {
  //   const fetchquestions = async () => {
  //     const response = await fetch('https://api.mercadolibre.com/sites/MLB/');
  //     setProdutos(response[0].categories)
  //   };
  //   fetchquestions();
  // },);

  return(
    <ProdContext.Provider value={value}>
      {children}
    </ProdContext.Provider>
  );
};

export default ProdProvider ;