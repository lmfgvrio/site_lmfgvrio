require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Client } = require('@notionhq/client');

const app = express();
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID;

app.use(cors());

app.get('/api/eventos', async (req, res) => {
  try {
    const response = await notion.databases.query({ database_id: databaseId });

  const eventos = response.results.map(page => ({
    id: page.id,
    nome: page.properties.Nome?.title[0]?.text?.content || '',
    data: page.properties.Data?.date?.start || '',
    descricao: page.properties.Descrição?.rich_text[0]?.text?.content || '',
    localizacao: page.properties.Localização?.rich_text[0]?.text?.content || '',
    imagem: page.properties.Imagem?.files?.[0]?.file?.url || 
            page.properties.Imagem?.files?.[0]?.external?.url || ''
  }));


    res.json(eventos);
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    res.status(500).json({ erro: 'Erro ao buscar eventos' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
