import React from 'react';
import AnimatedHue from './components/AnimatedHue';
import Avatar from './components/Avatar';
import './scss/app.scss';
import profilePicture from './assets/profile.jpeg'

function App(): JSX.Element {
  return (
    <div className="container">
      <AnimatedHue className="animate-hue">
        <div className="profile-container">
          <Avatar src={profilePicture} size={150} />
          <h1 className="title">Suneet Tipirneni</h1>
        </div>
      </AnimatedHue>
    </div>
  );
}

export default App;
