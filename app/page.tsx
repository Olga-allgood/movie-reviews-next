import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.OMDB_API_KEY;
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);
    const data = await response.json();

    if (data.Response === 'False') {
      return res.status(404).json({ error: data.Error });
    }

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}