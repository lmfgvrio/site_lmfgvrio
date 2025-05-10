import '../styles/components/Banner.css';

const Banner = ({isHomePage = true, backgroundImage, PageName = 'Início'}) => {
  return (
    <div className= 'banner-container'>

      <img
        src={backgroundImage}
        alt="Plano de Fundo"
        className='background-image'
      />

      <div className= 'banner'>

        <div className={isHomePage ? 'inicio-logo-banner' : 'logo-banner'}>

          <img
            src="/logoo.png"
            alt="Logo"
            className={isHomePage ? 'inicio-logo-imagem' : 'banner-logo-imagem'}
          />

          {isHomePage ? (
            <p>LIGA DE MERCADO FINANCEIRO DA FGV RIO</p>
          ) : (
            <>
              <div className="banner-separator"></div>
              <div className="banner-logo-name">
                <span className="page-name">{PageName}</span>
              </div>
            </>
          )}
          
        </div>

        <div className='tela-azul'></div>
      </div>
    </div>
  );
};

export default Banner;
