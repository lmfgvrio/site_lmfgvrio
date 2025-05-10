import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID;

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  try {
    const response = await notion.databases.query({ database_id: databaseId });

    const eventos = response.results.map(page => ({
      id: page.id,
      nome: page.properties.Nome?.title?.[0]?.text?.content || '',
      data: page.properties.Data?.date?.start || '',
      descricao: page.properties.Descrição?.rich_text?.[0]?.text?.content || '',
      localizacao: page.properties.Localização?.rich_text?.[0]?.text?.content || '',
      imagem:
        page.properties.Imagem?.files?.[0]?.file?.url ||
        page.properties.Imagem?.files?.[0]?.external?.url ||
        ''
    }));

    res.status(200).json(eventos);
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    res.status(500).json({ erro: 'Erro ao buscar eventos' });
  }
}
