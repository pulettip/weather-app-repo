import express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = 3001;

app.use(express.json());

app.get('/api/score', async (req: Request, res: Response): Promise<any> => {
  const city = req.query.city as string;
  if (!city) {
    return res.status(400).json({ error: 'City is required' });
  }

  res.json({
    city,
    rankings: [
      { activity: 'Skiing', score: 42 },
      { activity: 'Surfing', score: 58 },
      { activity: 'Outdoor sightseeing', score: 85 },
      { activity: 'Indoor sightseeing', score: 70 }
    ]
  });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
