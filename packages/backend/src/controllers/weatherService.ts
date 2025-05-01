import axios from 'axios';
import { calculateScores } from './scoreUtils';

export async function getWeatherScores(city: string) {
  const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&daily=temperature_2m_max&timezone=auto`);
  return calculateScores(response.data);
}