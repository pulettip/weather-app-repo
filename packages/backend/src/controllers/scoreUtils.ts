const IDEAL_TEMPS = {
  Skiing: 0,
  Surfing: 25,
  OutdoorSightseeing: 20,
  IndoorSightseeing: 10,
}



/**
 * Calculate scores for various activities based on weather data.
 * The scores are calculated based on the ideal temperature for each activity.
 *
 * @param weatherData - The weather data containing daily temperatures.
 * @returns An array of objects containing date, temperature, and scores for each activity.
 */
export function calculateScores(weatherData: any): { date: string; scoreSkiing: number; scoreSurfing: number; scoreOutdoorSightseeing: number; scoreIndoorSightseeing: number }[] {

  if (!weatherData || !weatherData.daily) {
    throw new Error('Invalid weather data');
  }
  return processWeatherData(weatherData.daily)
}

/**
 * Process the weather data to calculate scores for each activity.
 *
 * @param daily - The daily weather data containing time and temperature.
 * @returns An array of objects containing date, temperature, and scores for each activity.
 */
function processWeatherData(daily: { time: string[], temperature_2m_max: number[] }) {
  return daily.time.map((date, i) => {
    const temp = daily.temperature_2m_max[i];
    return {
      date,
      temperature: temp,
      scoreSkiing: calculateTemperatureScore(IDEAL_TEMPS.Skiing, temp),
      scoreSurfing: calculateTemperatureScore(IDEAL_TEMPS.Surfing, temp),
      scoreOutdoorSightseeing: calculateTemperatureScore(IDEAL_TEMPS.OutdoorSightseeing, temp),
      scoreIndoorSightseeing: calculateTemperatureScore(IDEAL_TEMPS.IndoorSightseeing, temp),
    };
  });
}

/**
 * Calculate a temperature score based on the ideal temperature for an activity.
 * The score is calculated using an exponential decay function.
 *
 * @param idealTemp - The ideal temperature for the activity.
 * @param actualTemp - The actual temperature.
 * @returns A score between 0 and 100, rounded to 1 decimal place.
 */
function calculateTemperatureScore(idealTemp: number, actualTemp: number): number {
  const difference = Math.abs(actualTemp - idealTemp);
  
  // Exponential decay parameters
  const decayRate = 0.1; // Adjust this to control how fast the score drops
  
  // Calculate score using exponential decay
  const score = 100 * Math.exp(-decayRate * difference);
  
  // Ensure score doesn't go below 0 and round to 1 decimal place
  return Math.max(0, Math.round(score * 10) / 10);
  }
