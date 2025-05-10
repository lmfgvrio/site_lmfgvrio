import '../styles/pages/Inicio.css';
import Banner from '../components/Banner';
import SobreNos from '../components/SobreNos';
import MissoesVisaoValores from '../components/MissaoVisaoValores';
import Eventos from '../components/Eventos';

function Inicio() {
  return (
    <div className='inicio-container'>
      <Banner backgroundImage='./imagem-inicio.jpg' />
      <SobreNos />
      <MissoesVisaoValores />
      <Eventos />
    </div>
  );
}

export default Inicio;
