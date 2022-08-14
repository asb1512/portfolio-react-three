import React, { useState, useEffect } from 'react';

const str = 'Andrew Bourgeois';

export default function Title() {
  const [titleText, setTitleText] = useState('');

  useEffect(() => {
    
  });

  return (
    <div className="title-cntr">
      <h1 className="blinking-cursor">
        Andrew
        <br />
        Bourgeois
      </h1>
      <h3>full-stack developer</h3>
    </div>
  );
}
