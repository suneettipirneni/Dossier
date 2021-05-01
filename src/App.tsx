import React from 'react';
import AnimatedHue from './components/AnimatedHue';
import './scss/app.scss';

function App(): JSX.Element {
  return (
    <div className="container">
      <AnimatedHue className="animate-hue">
        <h1 className="title">Suneet Tipirneni</h1>
      </AnimatedHue>
      
    </div>
  );
}

export default App;
