import React from 'react';
import Temperature from './Temperature/Temperature';
import Controller from './Controller/Controller';
import PowerSavingMode from './PowerSavingMode/PowerSavingMode';
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

      <PowerSavingMode
      />

    </div>
  );
}

export default App;
