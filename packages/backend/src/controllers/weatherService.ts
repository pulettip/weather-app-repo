import axios from 'axios';
import { calculateScores } from './scoreUtils';

export async function getWeatherScores(lat: number, lon: number): Promise<any> {
  const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max&timezone=auto`);
  return calculateScores(response.data);
}