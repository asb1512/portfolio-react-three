import React from 'react';
import { useLocation } from 'react-router-dom';
import Scene from './3d/Scene';
import Nav from './Nav';
import Pages from './Pages';
import Accents from './Accents';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Nav pathname={location.pathname} />
      <Pages pathname={location.pathname} />
      <div className="blur-cover" pathname={location.pathname} />
      <Scene pathname={location.pathname} />
      <Accents pathname={location.pathname} />
    </div>
  );
}

export default App;
