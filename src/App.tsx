import React from 'react';
import './App.scss';
import './bulma-override.scss';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <button className="button is-primary">Hello World</button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
