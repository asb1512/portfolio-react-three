import React, { useState } from 'react';
import Scene from './3d/Scene';
import Nav from './Nav';
import Title from './Title';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      <Nav page={page} setPage={setPage} />
      <Title />
      <div className="blur-cover" />
      <Scene />
    </div>
  );
}

export default App;
