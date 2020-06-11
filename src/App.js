import React from 'react';
import Temperature from './Temperature/Temperature';
import './App.css';

function App() {
  return (
    <div className="App">

      <Temperature
        value={20}
      />

    </div>
  );
}

export default App;
