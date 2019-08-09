import React from 'react';
import logo from './photo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <h1>
          Kiitos ja näkemiin!
        </h1>
        <a
          className="App-link"
          href="https://www.youtube.com/user/niilo22"
          target="_blank"
          rel="noopener noreferrer"
        >
          Subscribe to Niilo22
        </a>
      </header>
    </div>
  );
}

export default App;
