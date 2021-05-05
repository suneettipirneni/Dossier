import React from 'react';
import AnimatedHue from './components/AnimatedHue';
import Avatar from './components/Avatar';
import './scss/app.scss';
import profilePicture from './assets/profile.jpeg'

function App(): JSX.Element {
  return (
      
    <div>
      <AnimatedHue className="animate-hue">
        <nav>
          <div className="profile-container">
            <Avatar src={profilePicture} size={55} />
            <h1 className="title">Suneet Tipirneni</h1>
          </div>
        </nav>
      </AnimatedHue>
    </div>
  );
}

export default App;
