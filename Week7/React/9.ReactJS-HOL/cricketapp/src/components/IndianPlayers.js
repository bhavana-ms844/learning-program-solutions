import React from 'react';

const IndianPlayers = () => {
  const teamPlayers = ['Rohit', 'Virat', 'Gill', 'Rahul', 'Jadeja', 'Pant'];
  const oddTeam = teamPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = teamPlayers.filter((_, index) => index % 2 === 0);

  const T20players = ['Surya', 'Samson', 'Hardik'];
  const RanjiTrophy = ['Pujara', 'Rahane'];
  const allPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players:</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players:</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged T20 and Ranji Trophy Players:</h2>
      <ul>
        {allPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
