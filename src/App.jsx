import React from 'react';
import { useLocation } from 'react-router-dom';
import Scene from './3d/Scene';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Scene pathname={location.pathname} />
    </div>
  );
}

export default App;
