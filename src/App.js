import React, { useState, useEffect } from 'react';
import './App.css';
// Test modification 1 - Modified App.js

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Welcome to the Enhanced Test Application');

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
    setMessage('Counter reset successfully!');
    console.log('Counter has been reset');
  };

  const handleDouble = () => {
    setCount(prev => prev * 2);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <div className="counter-container">
          <h2>Counter: {count}</h2>
        <div className="button-group">
          <button onClick={handleDecrement} className="btn btn-danger">-</button>
          <button onClick={handleReset} className="btn btn-warning">Reset</button>
          <button onClick={handleIncrement} className="btn btn-success">+</button>
          <button onClick={handleDouble} className="btn btn-info">Double</button>
        </div>
        </div>
        <p>
          This application is testing GitHub webhook functionality with file modifications.
        </p>
        <div className="info-section">
          <h3>Test Scenarios:</h3>
          <ul>
            <li>File modifications</li>
            <li>New file additions</li>
            <li>File deletions</li>
            <li>Commit operations</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
