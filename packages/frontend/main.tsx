import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import CitySelector from './CitySelector';
import RankingsTable from './RankingsTable';
import { citiesWithCoordinates  } from './utils';

const App = () => {
  const [city, setCity] = useState('');
  const [rankings, setRankings] = useState([]);
  const cityList = Object.keys(citiesWithCoordinates)

  useEffect(() => {
    const fetchRanking = async (selectedCity: string) => {
      if (!selectedCity) return;
      try {
        const { lat, lon } = citiesWithCoordinates[selectedCity];
        const res = await fetch(`/api/weather-scores?lat=${lat}&lon=${lon}&city=${selectedCity}`);
        const data = await res.json();
        setRankings(data.rankings || []);
      } catch (err) {
        console.error('Failed to fetch rankings:', err);
      }
    };

    fetchRanking(city);
  }, [city]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Weather Activity Ranker</h1>
      <CitySelector city={city} setCity={setCity} cities={cityList} />
      <RankingsTable rankings={rankings} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
