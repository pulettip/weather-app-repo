import React from 'react';

type Props = {
  city: string;
  setCity: (value: string) => void;
  cities: string[];
};

const CitySelector: React.FC<Props> = ({ city, setCity, cities }) => (
  <select value={city} onChange={e => setCity(e.target.value)}>
    <option value="">Select a city</option>
    {cities.map(cityName => (
      <option key={cityName} value={cityName}>{cityName}</option>
    ))}
  </select>
);

export default CitySelector;
