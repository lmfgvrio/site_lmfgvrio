import React from 'react';
import '../styles/components/Projeto.css';

function Projeto({imagem, titulo, descricao}) {
  return (
    <div className='projeto'>
      <img
        src={imagem}
        alt={titulo}
        className='projeto-imagem'
      />
      <div className='projeto-info'>
        <h3 className='projeto-titulo'>{titulo}</h3>
        <p className='projeto-descricao'>{descricao}</p>
      </div>
    </div>
  );
}

export default Projeto;
