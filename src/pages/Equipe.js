import React from 'react';
import '../styles/pages/Equipe.css';
import Banner from '../components/Banner';
import NucleoEquipe from '../components/NucleoEquipe';

function Equipe() {


  // Para adicionar um membro, encontre o código com o formato "const -área do membro-", copie código em chaves (incluindo a vírgula após) e adicione logo depois. Atualize o membro com nome, posição, Linkedin e foto. Para adicionar uma nova área, apenas inserir "const -nome da area- = []" e colocar os membros dentro dos colchetes

  // Para adicionar a foto de um membro, colocar a imagem dentro da pasta "Equipe". Localização da pasta projetos: public->Equipe


  const diretoria = [
    { nome: 'Pedro Migon', posicao: 'Presidente', linkedin: 'http://www.linkedin.com/in/pedro-migon', imagem: "Membros/PedroMigon_Presidente.jpg"  },
    { nome: 'João Lemos' , posicao: 'Vice Presidente ', linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-f-m-lemos-de-moraes-97bb38255', imagem: "Membros/JoãoLemos_VicePresidente.jpg" },
    { nome: 'Rodrigo Schroeder', posicao: 'Diretor de Parcerias', linkedin: 'http://www.linkedin.com/in/rodrigo-schroeder', imagem: "Membros/Rodrigo_Diretor-Parcerias.jpg"  },
    { nome: 'Arthur Ribeiro', posicao: 'Diretor Acadêmico', linkedin: 'https://www.linkedin.com/in/arthurrribeiro/', imagem: "Membros/Arthur_Diretor-Academico.jpg"  },
    { nome: 'Julia Stepansky', posicao: 'Diretora Institucional', linkedin: 'https://www.linkedin.com/in/julia-stepansky-9aa025319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', imagem: "Membros/JuliaStepansky_DiretoraInst.jpg"  },
  ];

  const privateEquity = [
    { nome: 'Davi Alves', posicao: 'Coordenador', linkedin: 'https://www.linkedin.com/in/davi-alves-593948316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', imagem: "Membros/DaviAlves_CNPrE.jpg"  },
    { nome: 'Lucas Vinhas', posicao: 'Membro', linkedin: 'https://www.linkedin.com/in/lucas-vinhas', imagem: "Membros/LucasVinhas_MNPE.jpg"  },
    { nome: 'Carolina Schiefler', posicao: 'Membro', linkedin: 'https://www.linkedin.com/in/carolina-schiefler-01a0b133a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', imagem: "Membros/CarolinaMeirelesSchiefler_MNPrE.jpg"  },
    { nome: 'Giovanna Gomes', posicao: 'Membro', linkedin: 'https://www.linkedin.com/in/giovannamachadogomes/', imagem: "Membros/GiovanaMachadoGomes_MNPrE.jpg"  },
    { nome: 'Artur Vidal', posicao: 'Membro', linkedin: 'https://www.linkedin.com/in/artur-vidal-197870322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', imagem: "Membros/ArturVidal_MNPrE.jpg"  },
  ];

  const publicEquity = [
    { nome: 'Arthur Ribeiro', posicao: 'Coordenador', linkedin: 'https://www.linkedin.com/in/arthurrribeiro/', imagem: "Membros/Arthur_Diretor-Academico.jpg"  },
    { nome: 'Eduardo Rodrigues', posicao: 'Membro', linkedin: 'https://www.linkedin.com/in/eduardo-rodrigues-556104347?utm_source=share&utm_campaign', imagem: "Membros/EduardoRottaRodrigues-MNPuE.jpg"  },
    { nome: 'João Benech', posicao: 'Membro', linkedin: 'http://www.linkedin.com/in/joão-pinto-coelho-benech-927188322', imagem: "Membros/JoãoPintoCoelhoBenech_MNPuE.jpg"  },
    { nome: 'Thiago Carvalho', posicao: 'Membro', linkedin: 'https://www.linkedin.com/in/thiago-carvalho-3a0086332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', imagem: "Membros/ThiagoCarvalho_MNPuE.jpg"  },
  ]

  const macro = [
    { nome: 'Rodrigo Schroeder', posicao: 'Coordenador', linkedin: 'http://www.linkedin.com/in/rodrigo-schroeder', imagem: "Membros/Rodrigo_Diretor-Parcerias.jpg"  },
    { nome: 'Julia Stepansky', posicao: 'Membro', linkedin: 'https://www.linkedin.com/in/julia-stepansky-9aa025319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', imagem: "Membros/JuliaStepansky_DiretoraInst.jpg"  },
    { nome: 'Antônio Talamini', posicao: 'Membro', linkedin: 'https://www.linkedin.com/in/antonio-talamini-b13b78321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', imagem: "Membros/AntonioTalamini_MNM.jpg"  },
  ]

  return (
    <div className='equipe-container'>
      <Banner
        isHomePage={false}
        backgroundImage='./imagem-inicio.jpg'
        PageName='Equipe'
      />

      <NucleoEquipe titulo='Diretoria' membros={diretoria} />
      <NucleoEquipe titulo='Núcleo de Private Equity' membros={privateEquity} />
      <NucleoEquipe titulo='Núcleo de Public Equity' membros={publicEquity} />
      <NucleoEquipe titulo='Núcleo de Macro' membros={macro} />

    </div>
  );
}

export default Equipe;
