import { Request, Response } from 'express';
import { getWeatherScores } from './weatherService';

export const getScoreResponse = async (req: Request, res: Response): Promise<any> => {
  const { city } = req.query;
  if (!city || typeof city !== 'string') {
    return res.status(400).send({ error: 'City is required and must be a string' });
  }

  try {
    const scores = await getWeatherScores(city);
    res.json({ city, rankings: scores });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to fetch weather scores' });
  }
}