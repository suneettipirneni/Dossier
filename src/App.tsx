import React from 'react';
import AnimatedHue from './components/AnimatedHue';
import Avatar from './components/Avatar';
import './scss/app.scss';
import './scss/nav.scss';
import profilePicture from './assets/profile.jpeg'
import NavButton from './components/NavButton';

function App(): JSX.Element {
  return (
      
    <div>
      <AnimatedHue className="animate-hue">
        <nav className="nav">
          <div className="profile-container">
            <Avatar src={profilePicture} size={55} />
            <h1 className="title">Suneet Tipirneni</h1>
          </div>
          <div className="nav-left">
            <NavButton title="Projects" />
            <NavButton title="Experience" />
            <NavButton title="Contact" />
          </div>
        </nav>
      </AnimatedHue>
    </div>
  );
}

export default App;
