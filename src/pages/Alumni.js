import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import '../styles/pages/Alumni.css';
import Banner from '../components/Banner';

function Alumni() {
  const alumniList = [
    { name: 'Caio Lakiss', position: 'Fundador e Presidente', linkedin: 'https://www.linkedin.com/in/caiolakiss/' },
    { name: 'Newton Novo', position: 'Presidente', linkedin: 'Sem Linkedin' },
    { name: 'Otávio Rubião', position: 'Membro', linkedin: 'https://www.linkedin.com/in/ot%C3%A1vio-rubi%C3%A3o-101b5387/' },
    { name: 'Pedro Schott', position: 'Membro', linkedin: 'https://www.linkedin.com' },
    { name: 'Luis Gustavo Borges', position: 'Membro', linkedin: 'https://www.linkedin.com/in/luisgustavoborges/details/experience/' },
    { name: 'Gabriel Bernardino', position: 'Presidente', linkedin: 'https://www.linkedin.com/in/glbernardino/' },
    { name: 'Emanuel Fernandes', position: 'Membro', linkedin: 'https://www.linkedin.com' },
    { name: 'Pedro Rondon', position: 'Presidente', linkedin: 'https://www.linkedin.com/in/pedro-rondon-moura-/' },
    { name: 'Matheus Gabriel', position: 'Vice-Presidente', linkedin: 'https://www.linkedin.com' },
    { name: 'Alex Temporal', position: 'Diretor Academêmico', linkedin: 'https://www.linkedin.com/in/alex-temporal/' },
    { name: 'Guilherme Mamedes', position: 'Diretor Institucional', linkedin: 'https://www.linkedin.com/in/guilherme-mamedes/' },
    { name: 'Luiz Filipe Peres', position: 'Presidente', linkedin: 'https://www.linkedin.com/in/luiz-filipe-peres/' },
    { name: 'Matheus Villela', position: 'Vice-Presidente', linkedin: 'https://www.linkedin.com/in/matheus-villela-8b5233276/' },
    { name: 'Rafael Gral', position: 'Diretor Acadêmico', linkedin: 'https://www.linkedin.com/in/rafael-milliati-gral/' },
    { name: 'Camille Medeiros', position: 'Diretora Institucional', linkedin: 'https://www.linkedin.com/in/camille-medeiros-/' },
    { name: 'João Pedro Landim', position: 'Membro', linkedin: 'https://www.linkedin.com/in/joaopedrolandim/' },
    { name: 'Bruno Albuquerque', position: 'Membro', linkedin: 'https://www.linkedin.com/in/bruno-albuquerque-7430a5227/' },
    { name: 'Gabriel Gonçalves', position: 'Membro', linkedin: 'https://www.linkedin.com/in/gabriel-goncalves-617022207/' },
    { name: 'Tomás Lira', position: 'Membro', linkedin: 'https://www.linkedin.com/in/tom%C3%A1s-lira-344872275/' },
    { name: 'Nikolas Moraes', position: 'Membro', linkedin: 'https://www.linkedin.com/in/n%C3%ADkolas-moraes-6128a6284/' },
    { name: 'Mateus Ruiz', position: 'Membro', linkedin: 'https://www.linkedin.com/in/mateus-ruiz-garcia/' },
    { name: 'Fernando Oliveira', position: 'Membro', linkedin: 'https://www.linkedin.com/in/fernandopuppin/' },
    { name: 'Lucas Valle', position: 'Membro', linkedin: 'https://www.linkedin.com/in/lucas-valle-01a563263/' },
    { name: 'Leonardo Melito', position: 'Membro', linkedin: 'https://www.linkedin.com/in/leonardo-juliano-melito-dos-santos-5548851b6/' },
    { name: 'Renato Wanderley', position: 'Presidente', linkedin: 'https://www.linkedin.com/in/renatowanderley/' },
    // Para adicionar um membro, copie o código em chaves (incluindo a vírgula após) e adicione logo depois. Atualize o membro com nome, posição e Linkedin
  ];

  return (
    <div className='ps-container'>

      <Banner
        isHomePage = {false}
        backgroundImage= './imagem-inicio.jpg'
        PageName='Alumni'
      />

      <div className='profile-container'>
        {alumniList.map((profile, index) => (
          <div key={index} className="profile">
            <div className="profile-header">
              <span className="name">{profile.name}</span>
              <a 
                href={profile.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="linkedin-icon"
              >
                <FaLinkedin className="membro-linkedin" color='#062553'/>
              </a>
            </div>
            <div className="position">{profile.position}</div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Alumni;
