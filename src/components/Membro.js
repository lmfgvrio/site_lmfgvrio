import { FaLinkedin } from 'react-icons/fa';
import '../styles/components/Membro.css';

function Membro({imagem, nome, posicao, linkedin}) {
  return (
    <div className='membro'>
      <img 
        src={imagem} 
        alt={nome} 
        className='membro-imagem' 
      />
      <div className='membro-info'>
        <p className='membro-nome'>{nome}</p>
        <p className='membro-posicao'>{posicao}</p>
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin className="membro-linkedin" color='#062553'/>
        </a>
      </div>
    </div>
  );
}

export default Membro;
