import React from 'react';
import Temperature from './Temperature/Temperature';
import Controller from './Controller/Controller';
import './App.css';

function App() {
  return (
    <div className="App">

      <Temperature
        value={20}
      />

      <Controller
        value={'+'}
      />

      <Controller
        value={'-'}
      />

      <Controller
        value={'reset'}
      />

    </div>
  );
}

export default App;
