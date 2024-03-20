import React from 'react';
import './App.css';
import AlertButton from './AlertButton';


function App() {
  return (
    <div className="App">
      <h1>Toolbar with Alert Buttons</h1>
      <div>
        {/* setting button names and alert message */}
        <AlertButton message="Why arent you listening?">Dont Click</AlertButton>
        <AlertButton message="Was that fun?">Better not click</AlertButton>
      </div>
    </div>
  );
}
export default App;

