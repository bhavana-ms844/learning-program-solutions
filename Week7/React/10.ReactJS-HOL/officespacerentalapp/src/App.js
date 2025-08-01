import React from 'react';

function App() {
  const office = {
    name: "Indiranagar Workspace",
    rent: 55000,
    address: "123, 1st Cross, Indiranagar, Bangalore",
    image: "https://via.placeholder.com/300x200?text=Office+Image"
  };

  const officeList = [
    { name: "MG Road Office", rent: 45000, address: "MG Road, Bangalore" },
    { name: "HSR Layout Office", rent: 70000, address: "HSR Layout, Bangalore" },
    { name: "Koramangala Hub", rent: 62000, address: "Koramangala, Bangalore" }
  ];

  const rentStyle = (rent) => ({
    color: rent > 60000 ? 'green' : 'red'
  });

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Office Space Rental</h1>
      <img src={office.image} alt="Office" style={{ width: '300px', height: '200px' }} />
      <h2>{office.name}</h2>
      <p><strong>Rent:</strong> <span style={rentStyle(office.rent)}>₹{office.rent}</span></p>
      <p><strong>Address:</strong> {office.address}</p>

      <h2>Other Available Offices</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{item.name}</strong><br />
            Rent: <span style={rentStyle(item.rent)}>₹{item.rent}</span><br />
            Address: {item.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
