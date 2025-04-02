# Site Liga de Mercado Financeiro FGV Rio

## 1. Como copiar o site para seu computador

### 1.1 Instale as dependências do site

- VSCode -> [Instale aqui](https://code.visualstudio.com/download)
- Git -> [Instale aqui](https://git-scm.com/downloads)

### 1.2. Conecte a conta do GitHub no VSCode

- Primeiro clique no botão de "Contas"
![Imagem](/public/Guia//Captura%20de%20tela%202025-04-01%20204854.jpg)

- Clique em "Entre com o GitHub" e depois faça o login no site
![Imagem](/public/Guia/Captura%20de%20tela%202025-04-01%20205134.jpg)

### 1.3 Abra uma pasta no VSCode (a qual você irá colocar o site no seu computador)

### 1.4 Para conferir se você está com a versão mais recente do site, abra o terminal (Ver->Terminal no canto superior esquerdo da página) e rode o código:

`git pull`

### (Opcional) Se você quiser rodar o site localmente (para fazer alterações sem que o site acessível pelo público seja modificado), baixe o [Node](https://nodejs.org/en/download) e suas dependências. Para isso, rode os códigos:

```
npm i react-router
npm install react-icons --save
npm start
```
Após o `npm start`, se tudo foi feito corretamente, o site será aberto no navegador com o link [http://localhost:3000](http://localhost:3000).



## 2. Como modificar o site

O site é separado em pastas, as quais são importantes para modificação apenas:

Adicionar imagens:
- public/Membros -> Onde serão adicionadas imagens de novos membros
- public/Projetos -> Onde serão adicionadas imagens de novos projetos 

Mudar textos:
- src/components/Cronograma.js -> Onde vocês irão atualizar o cronograma do processo seletivo
- src/components/Descricao.js -> Onde vocês irão mudar o texto sobre o processo de trainee
- src/components/Etapas.js -> Onde vocês irão modificar as etapas do processo seletivo
- src/components/Inscricao.js -> Onde vocês colocarão o link do formulário de inscrição do processo seletivo
- src/components/MissaVisaoValores.js -> Onde vocês irão mudar os textos de missão, visão e valores
- src/components/SobreNos.js -> Onde vocês irão modificar o "Sobre nós"

Adicionar pessoas:
- src/pages/Alumni.js -> Onde vocês irão atualizar os membros na aba de "Alumni"
- src/pages/Equipe.js -> Onde vocês irão atualizar os membros na aba de "Equipe"
- src/pages/Projetos.js -> Onde vocês irão atualizar os projetos

Nesses arquivos, os textos em verde são guias sobre como modificar o site


Estrutura do site:


```
site_lmfgvrio/
├── public/
│   ├── Membros/
│   │   └── Fotos dos membros
│   └── Projetos/
│       ├── Fotos dos projetos
│       └── :)
└── src/
    ├── components/
    │   └── Arquivos com as estruturas dos componentes
    ├── pages/
    │   └── Arquivos com as estruturas das páginas
    └── styles/
        ├── components/
        │   └── Arquivos com os estilos dos componentes
        └── pages/
            └── Arquivos com os estilos das páginas
```