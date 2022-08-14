import React from 'react';
import Scene from './3d/Scene';
import Title from './Title';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <div className="blur-cover" />
      <Scene />
    </div>
  );
}

export default App;
