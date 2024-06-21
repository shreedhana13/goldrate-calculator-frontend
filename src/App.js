import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [goldRate, setGoldRate] = useState(null);

  useEffect(() => {
    fetchGoldRate();
  }, []);

  const fetchGoldRate = async () => {
    try {
      const response = await axios.get('https://your-backend-app.herokuapp.com/api/real-gold-rate'); // Replace with your deployed backend URL
      setGoldRate(response.data.rate);
    } catch (error) {
      console.error('Error fetching gold rate:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gold Rate Calculator</h1>
        <div>
          <p>Current Gold Rate: {goldRate ? `₹${goldRate} per gram` : 'Loading...'}</p>
          {/* Add your existing calculator UI here */}
        </div>
      </header>
    </div>
  );
}

export default App;
