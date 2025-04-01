import React from 'react';
import '../styles/components/MissaoVisaoValores.css';

function MissoesVisaoValores() {
  return (
    <div className='missoes-visao-valores'>

      <div className='subitem-missao-visao-valores'>
        <h3>Missão</h3>
        <p>
        Estimular e capacitar nossos membros por meio da combinação equilibrada entre teoria e desafios práticos. Promovemos eventos,
        treinamentos e contato direto com profissionais do mercado, visando desenvolver habilidades essenciais e fomentar o pensamento
        crítico necessário para o sucesso no setor financeiro.
        </p>
      </div>

      <div className='subitem-missao-visao-valores'>
        <h3>Valores</h3>
        <p>
        <strong>Meritocracia:</strong> reconhecimento pelo esforço e resultados alcançados.
        <br />
        <strong>Excelência:</strong> busca constante por qualidade e alto desempenho.
        <br />
        <strong>Pensamento crítico:</strong> estímulo ao questionamento, análise e aprendizado contínuo.
        <br />
        <strong>Resiliência:</strong> capacidade de enfrentar e superar desafios em um mercado competitivo.
        <br />
        <strong>Comunidade:</strong> construção de uma rede colaborativa e de crescimento mútuo.
        </p>
      </div>

      <div className='subitem-missao-visao-valores'>
        <h3>Visão</h3>
        <p>
        Ser uma comunidade acadêmica que inspira e prepara seus membros para carreiras sólidas no mercado financeiro, destacando-se
        pela aplicação prática do conhecimento e pela construção contínua de oportunidades concretas para nossos integrantes.
        </p>
      </div>
    </div>
  );
}

export default MissoesVisaoValores;
