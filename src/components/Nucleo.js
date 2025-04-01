import React from 'react';
import Projeto from './Projeto';
import '../styles/components/Nucleo.css';

function Nucleo({titulo, projetos}) {
  return (
    <div className="nucleo">
      <h2 className="nucleo-titulo">{titulo}</h2>
      {projetos.map((projeto, index) => (
        <Projeto
          key={index}
          imagem={projeto.imagem}
          titulo={projeto.titulo}
          descricao={projeto.descricao}
        />
      ))}
    </div>
  );
}

export default Nucleo;
