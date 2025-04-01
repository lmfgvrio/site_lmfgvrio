import React from 'react';
import Membro from './Membro';
import '../styles/components/NucleoEquipe.css';

function NucleoEquipe({titulo, membros}) {
  if (titulo === 'Diretoria') {
    const firstRow = membros.slice(0, 2);
    const secondRow = membros.slice(2);
    return (
      <div className="nucleo-equipe">
        <h2 className="nucleo-equipe-titulo">{titulo}</h2>
        <div className="nucleo-cards-container">
          {firstRow.map((membro, index) => (
            <Membro
              key={index}
              imagem={membro.imagem}
              nome={membro.nome}
              posicao={membro.posicao}
              linkedin={membro.linkedin}
            />
          ))}
        </div>
        <div className="nucleo-cards-container">
          {secondRow.map((membro, index) => (
            <Membro
              key={index}
              imagem={membro.imagem}
              nome={membro.nome}
              posicao={membro.posicao}
              linkedin={membro.linkedin}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="nucleo-equipe">
      <h2 className="nucleo-equipe-titulo">{titulo}</h2>
      <div className="nucleo-cards-container">
        {membros.map((membro, index) => (
          <Membro
            key={index}
            imagem={membro.imagem}
            nome={membro.nome}
            posicao={membro.posicao}
            linkedin={membro.linkedin}
          />
        ))}
      </div>
    </div>
  );
}

export default NucleoEquipe;
