import React from 'react';
import '../styles/components/Inscricao.css';

function Inscricao() {
  return (
    <div className='inscricao'>
      <a
        // Atualizar link do formulário se necessário
        href='https://docs.google.com/forms/d/e/1FAIpQLSe16x3J1djU62vtFhbMSf3VX9Gw6vUuga6i_tmI0-tkZ9U-NQ/viewform?usp=sharing'
        className='inscricao-link'
        target='_blank'
        rel='noopener noreferrer'
      >
        INSCREVA-SE AQUI
      </a>
    </div>
  );
}

export default Inscricao;
