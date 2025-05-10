import '../styles/pages/ProcessoSeletivo.css';
import Banner from '../components/Banner';
import Descricao from '../components/Descricao';
import Etapas from '../components/Etapas';
import Cronograma from '../components/Cronograma';
import Inscricao from '../components/Inscricao';

function ProcessoSeletivo() {
  return (
    <div className='ps-container'>
      <Banner
        isHomePage={false}
        backgroundImage='./imagem-inicio.jpg'
        PageName={<span>Processo<br />Seletivo</span>}
      />

      <div className='texto-ps'>
        <Descricao />
        <Etapas />
        <Cronograma />
      </div>

      <Inscricao />
    </div>
  );
}

export default ProcessoSeletivo;
