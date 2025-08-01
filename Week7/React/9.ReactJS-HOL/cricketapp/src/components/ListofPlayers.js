import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 85 },
    { name: 'Rohit', score: 90 },
    { name: 'Gill', score: 45 },
    { name: 'Rahul', score: 70 },
    { name: 'Dhoni', score: 50 },
    { name: 'Jadeja', score: 88 },
    { name: 'Bumrah', score: 65 },
    { name: 'Shami', score: 72 },
    { name: 'Pant', score: 77 },
    { name: 'Iyer', score: 60 },
    { name: 'Ashwin', score: 92 },
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70:</h3>
      <ul>
        {below70.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
