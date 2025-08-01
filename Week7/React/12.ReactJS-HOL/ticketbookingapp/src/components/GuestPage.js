import React from 'react';

const GuestPage = ({ onLogin }) => {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>Here are some available flight details:</p>
      <ul>
        <li>Flight A - Bangalore to Delhi - ₹4500</li>
        <li>Flight B - Mumbai to Chennai - ₹3800</li>
        <li>Flight C - Hyderabad to Kolkata - ₹5000</li>
      </ul>
      <button onClick={onLogin}>Login to Book Tickets</button>
    </div>
  );
};

export default GuestPage;
