import React from 'react';
import '../styles/components/TextoPS.css';

function Cronograma() {
  return (
    <>
      <h2>CRONOGRAMA</h2>
      <p>
        {/* Atualiza aqui as datas do processo seletivo */}
        <strong>Inscrições:</strong> 27/01 a 22/02
        <br />
        <br />
        <strong>Teste de Conhecimento:</strong> 24/02
        <br />
        <br />
        <strong>Dinâmica em Grupo:</strong> 26/02 e 27/02
        <br />
        <br />
        <strong>Entrevista Individual:</strong> 10/03 a 12/03
        <br />
        <br />
        <strong>Divulgação de Resultados:</strong> 14/03
        <br />
      </p>
    </>
  );
}

export default Cronograma;
