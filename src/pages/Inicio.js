import React from 'react';
import '../styles/pages/Inicio.css';
import Banner from '../components/Banner';
import SobreNos from '../components/SobreNos';
import MissoesVisaoValores from '../components/MissaoVisaoValores';

function Inicio() {
  return (
    <div className='inicio-container'>
      <Banner backgroundImage='./imagem-inicio.jpg' />
      <SobreNos />
      <MissoesVisaoValores />
    </div>
  );
}

export default Inicio;
