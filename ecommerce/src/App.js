import React from 'react';
import './App.css';
import Rotas from './Routes';
import Headers from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Headers />
      <Rotas />
      <Footer/>
    </div>
  );
}

export default App;
