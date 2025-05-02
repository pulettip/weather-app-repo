import axios from 'axios';
import { calculateScores, getCityCoordinates } from './scoreUtils';

export async function getWeatherScores(city: string) {
  const { lat, lon } = await getCityCoordinates(city);
  const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max&timezone=auto`);
  return calculateScores(response.data);
}