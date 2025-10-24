import React from 'react';
import StateCard from './StateCard';
function App() {
  const states = [
    {
      state: 'Lagos',
      capital: 'Ikeja',
      region: 'West',
      population: '14 million',
      landmark: 'National Theatre',
    },
    {
      state: 'Kano',
      capital: 'Kano',
      region: 'North',
      population: '13 million',
      landmark: 'Kano City Walls',
    },
    {
      state: 'Enugu',
      capital: 'Enugu',
      region: 'East',
      population: '3 million',
      landmark: 'Ngwo Pine Forest',
    },
    {
      state: 'Rivers',
      capital: 'Port Harcourt',
      region: 'South',
      population: '7 million',
      landmark: 'Isaac Boro Park',
    },
  ];
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      padding: '20px',
      background: '#f5f5f5',
    }}>
      {states.map((item, index) => (
        <StateCard
          key={index}
          state={item.state}
          capital={item.capital}
          region={item.region}
          population={item.population}
        >
          {item.landmark}
        </StateCard>
      ))}
    </div>
  );
}
export default App;