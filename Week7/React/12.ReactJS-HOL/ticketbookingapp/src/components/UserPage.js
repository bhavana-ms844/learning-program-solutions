import React from 'react';

const UserPage = ({ onLogout }) => {
  return (
    <div>
      <h2>Welcome Back!</h2>
      <p>You can now book tickets.</p>
      <ul>
        <li>Flight A - Bangalore to Delhi - Book Now</li>
        <li>Flight B - Mumbai to Chennai - Book Now</li>
        <li>Flight C - Hyderabad to Kolkata - Book Now</li>
      </ul>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserPage;
