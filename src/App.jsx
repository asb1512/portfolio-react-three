import React, { useState } from 'react';
import Scene from './3d/Scene';
import Nav from './Nav';
import Title from './Title';
import About from './About';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      <Nav page={page} setPage={setPage} />
      <Title page={page} />
      {
        page === 'about'
          ? <About />
          : null
      }
      <div className="blur-cover" />
      <Scene page={page} />
    </div>
  );
}

export default App;
