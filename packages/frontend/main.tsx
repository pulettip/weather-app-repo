import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { cities } from './utils';

const App = () => {
  const [city, setCity] = useState('');
  const [rankings, setRankings] = useState([]);

  const fetchRanking = async (selectedCity: string) => {
    if (!selectedCity) return;
    try {
      const res = await fetch(`/api/weather-scores?city=${selectedCity}`);
      const data = await res.json();
      setRankings(data.ranking || []);
    } catch (err) {
      console.error('Failed to fetch rankings:', err);
    }
  };

  useEffect(() => {
    if (city) {
      fetchRanking(city);
    }
  }, [city]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Weather Activity Ranker</h1>
      <select value={city} onChange={e => setCity(e.target.value)}>
        <option value="">Select a city</option>
        {cities.map(cityName => (
          <option key={cityName} value={cityName}>{cityName}</option>
        ))}
      </select>
      <ul>
        {rankings.map((r: any, i: number) => (
          <li key={i}>{r.activity}: {r.score}</li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
