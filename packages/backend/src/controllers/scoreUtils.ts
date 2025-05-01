export function calculateScores(weatherData: any) {
  // Dummy logic based on weather
  return [
    { activity: 'Skiing', score: 42 },
    { activity: 'Surfing', score: 58 },
    { activity: 'Outdoor sightseeing', score: 85 },
    { activity: 'Indoor sightseeing', score: 70 }
  ];
}

export const cities = {
  // Skiing cities – Alps and mountains
  Chamonix: { lat: 45.9237, lon: 6.8694 },
  Innsbruck: { lat: 47.2692, lon: 11.4041 },
  Zermatt: { lat: 46.0207, lon: 7.7491 },
  CortinaDAmpezzo: { lat: 46.5405, lon: 12.1357 },

  // Surfing cities – Atlantic and Mediterranean coasts
  Biarritz: { lat: 43.4832, lon: -1.5586 },
  Nazaré: { lat: 39.6026, lon: -9.0704 },
  SanSebastian: { lat: 43.3183, lon: -1.9812 },
  Ericeira: { lat: 38.9616, lon: -9.4152 },

  // Outdoor sightseeing cities – pleasant for walking, views, etc.
  Florence: { lat: 43.7696, lon: 11.2558 },
  Prague: { lat: 50.0755, lon: 14.4378 },
  Dubrovnik: { lat: 42.6507, lon: 18.0944 },
  Edinburgh: { lat: 55.9533, lon: -3.1883 },

  // Indoor sightseeing cities – full of museums, galleries, palaces
  Paris: { lat: 48.8566, lon: 2.3522 },
  Vienna: { lat: 48.2082, lon: 16.3738 },
  Berlin: { lat: 52.52, lon: 13.4050 },
  London: { lat: 51.5072, lon: -0.1276 },

  // Skiing cities – Rockies and Sierra Nevada
  Aspen: { lat: 39.1911, lon: -106.8175 },
  JacksonHole: { lat: 43.4799, lon: -110.7624 },
  LakeTahoe: { lat: 38.9399, lon: -119.9780 },
  ParkCity: { lat: 40.6461, lon: -111.4980 },

  // Surfing cities – Pacific coast
  Malibu: { lat: 34.0259, lon: -118.7798 },
  HuntingtonBeach: { lat: 33.6595, lon: -118.0069 },
  Waikiki: { lat: 21.2783, lon: -157.8223 },
  SantaCruz: { lat: 36.9741, lon: -122.0308 },

  // Outdoor sightseeing cities – pleasant for walking, views, etc.
  NewYorkCity: { lat: 40.7128, lon: -74.0060 },
  SanFrancisco: { lat: 37.7749, lon: -122.4194 },
  Seattle: { lat: 47.6062, lon: -122.3321 },
  NewOrleans: { lat: 29.9511, lon: -90.0715 },

  // Indoor sightseeing cities – full of museums, galleries, palaces
  WashingtonDC: { lat: 38.9072, lon: -77.0369 },
  Chicago: { lat: 41.8781, lon: -87.6298 },
  Boston: { lat: 42.3601, lon: -71.0589 },
  Toronto: { lat: 43.6510, lon: -79.3470 }
}
