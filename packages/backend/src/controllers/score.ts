import { Request, Response } from 'express';
import { getWeatherScores } from './weatherService';
import { z } from 'zod';

const querySchema = z.object({
  lat: z.coerce.number(),
  lon: z.coerce.number(),
  city: z.string(),
});

export const getScoreResponse = async (req: Request, res: Response): Promise<any> => {
  const { lat, lon, city } = querySchema.parse(req.query);

  try {
    const scores = await getWeatherScores(lat, lon);
    res.json({ city, lat, lon, rankings: scores });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to fetch weather scores' });
  }
}