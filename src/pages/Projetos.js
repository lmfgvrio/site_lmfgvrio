import '../styles/pages/Projetos.css';
import Banner from '../components/Banner';
import Nucleo from '../components/Nucleo';

function Projetos() {

  // Para adicionar um projeto, encontre o código com o formato "const -núcleo do projeto-", copie código em chaves (incluindo a vírgula após) e adicione logo depois. Atualize o projeto com imagem, titulo e descrição. Para adicionar um= novo projeto, apenas inserir "const -nome  do projeto- = []" e colocar as informações do projeto dentro dos colchetes

  // Para adicionar a imagem de um projeto, colocar a imagem dentro da pasta "Projetos". Localização da pasta projetos: public->Projetos

  const privateEquity = [
    {
      imagem: 'Projetos/hig.jpg',
      titulo: '2024.2 - H.I.G Capital',
      descricao: `O trabalho do Núcleo de Private Equity sobre a Cimed foi desenvolvido em parceria com a HIG Capital e contou com a
      orientação de uma equipe de analistas da casa. A análise teve início com um estudo do setor farmacêutico, seguido de uma
      avaliação detalhada da Cimed, considerando seu mercado, segmentos de atuação e modelo de negócios. Posteriormente, foi realizada
      uma avaliação quantitativa, abrangendo valuation, análise de múltiplos de entrada e saída, além de uma visão abrangente sobre a
      empresa e suas perspectivas de crescimento.`,
    },
    {
      imagem: 'Projetos/vinci.jpg',
      titulo: '2024.1 - Vinci',
      descricao: `O projeto de Private Equity foi realizado em parceria com a Vinci Partners, sob a mentoria de Aline Carmelier. A
      análise focou na Kalunga, onde replicamos o processo real de avaliação e investimento de uma firma de private equity. Começamos
      com uma análise setorial detalhada, comparando a Kalunga com seus principais concorrentes, e realizamos reuniões com o CFO da
      empresa para obter insights sobre desafios e perspectivas de crescimento. Aplicamos conceitos de private equity, identificando
      alavancas estratégicas para impulsionar o crescimento, como expansão de canais de distribuição e otimização de capital.
      Estruturamos uma estratégia de saída, considerando alternativas como venda estratégica ou IPO, sempre visando maximizar o retorno
      ajustado ao risco. O projeto foi uma experiência prática valiosa, permitindo desenvolver um pensamento analítico e entender como
      uma firma de private equity gera valor.`,
    },
  ];

  const publicEquity = [
    {
      imagem: 'Projetos/vista.jpg',
      titulo: '2023.2 - Vista Capital',
      descricao: `O trabalho do Núcleo de Public Equities foi desenvolvido em parceria com a Vista Capital, contando com a mentoria de
      Eduardo Cintra, analista de equities que cobria a Intelbras. O processo envolveu uma análise fundamentalista da empresa, abordando
      seu setor de atuação, principais segmentos e modelo de negócio. Em seguida, foi realizada uma análise quantitativa, incluindo
      valuation e avaliação de múltiplos, garantindo uma visão mais completa sobre a companhia.`,
    },
    {
      imagem: 'Projetos/tork.jpg',
      titulo: '2024.1 - Tork Capital',
      descricao: `O trabalho do Núcleo de Public Equities no primeiro semestre de 2024 foi realizado em parceria com a Tork Capital,
      contando com a mentoria de um de seus sócios. O projeto envolveu a análise da empresa PRIO, incluindo um estudo aprofundado do
      setor de Oil & Gas, a identificação de suas vantagens competitivas e a precificação de suas ações com base no modelo DCF.`,
    },
  ];

  const investmentBanking = [
    {
      imagem: 'Projetos/safra.jpg',
      titulo: '2024.2 - Banco Safra',
      descricao: `O núcleo de Investment Banking, em parceria com o Banco Safra, analisou um case de M&A entre as empresas de educação
      YDUQS e Cruzeiro do Sul. O estudo envolveu avaliações setoriais, qualitativas e financeiras, além da análise do processo de
      criação de valor e das sinergias da operação, sob a supervisão dos analistas Alexandre Bastos e Henrique Stevaux.`,
    },
    {
      imagem: 'Projetos/ubs.jpg',
      titulo: '2023.2 - UBS',
      descricao: `O trabalho do Núcleo de Investment Banking foi desenvolvido em parceria com o UBS BB, contando com a mentoria de
      Fernando Mauad e Sergio Zeitune, ambos Associate Directors do banco. O projeto envolveu a elaboração de um pitch de M&A entre
      duas empresas varejistas listadas, com uma análise do setor, das companhias envolvidas e das sinergias da transação, tanto
      qualitativas quanto quantitativas. Ao final, o trabalho foi apresentado para Daniel Bassan, Country Head Brasil e Regional
      Head LATAM do UBS.`,
    },
  ];

  const macro = [
    {
      imagem: 'Projetos/kinea.jpg',
      titulo: '2023.1 - Kinea',
      descricao: `O projeto com o Núcleo Macro foi desenvolvido em parceria com a Kinea sob a tutoria do Lucas Tumkus e apresentado ao
      José Carlos da Vinci. O objetivo era criar um portfólio de investimentos em ativos globais, com foco na análise da economia dos
      Estados Unidos, considerando o contexto pós-pandemia. Através de uma análise aprofundada da conjuntura macroeconômica americana,
      aprimoramos nossa capacidade de formular teses e modelar variáveis como PIB e inflação, utilizando ferramentas profissionais do
      mercado. O apoio da Kinea foi crucial para a qualidade do trabalho, com orientações valiosas que aprimoraram nossas análises e
      conclusões, além de insights valiosos do economista chefe da Vinci Partners. O resultado final reflete uma visão fundamentada e
      analiticamente robusta sobre os principais drivers da economia dos EUA.`,
    },
  ];

  const globalEquity = [
    {
      imagem: 'Projetos/arbor.jpg',
      titulo: '2024.2 - Arbor Capital',
      descricao: `No case de Global Equities conduzido em parceria com a Arbor Capital, realizamos uma análise aprofundada da Waste
      Management, uma das maiores empresas do setor de resíduos do mundo, com mais de 20 bilhões de dólares em receita anual. O estudo
      combinou uma abordagem fundamentalista rigorosa com uma avaliação detalhada da companhia, incluindo valuation e análise de
      drivers estratégicos. O trabalho contou com o acompanhamento direto de Leonardo Otero, gestor e fundador da Arbor Capital, e de
      Matheus Pospst, então sócio da gestora. Além disso, tivemos acesso privilegiado a insights do sell-side global e contato direto
      com o management da empresa nos Estados Unidos, permitindo uma compreensão diferenciada da dinâmica do setor.`,
    },
  ];

  return (
    <div className='ps-container'>
      <Banner
        isHomePage={false}
        backgroundImage='./imagem-inicio.jpg'
        PageName='Projetos'
      />

      <div className='nucleo-container'>
        <Nucleo titulo='Núcleo de Private Equity' projetos={privateEquity} />
        <Nucleo titulo='Núcleo de Public Equity' projetos={publicEquity} />
        <Nucleo titulo='Núcleo de Investment Banking' projetos={investmentBanking} />
        <Nucleo titulo='Núcleo de Macro' projetos={macro} />
        <Nucleo titulo='Global Equity' projetos={globalEquity} />
      </div>
    </div>
  );
}

export default Projetos;
