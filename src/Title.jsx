import React, { useState, useEffect } from 'react';
import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';

const str = 'Andrew Bourgeois';

export default function Title({ page }) {
  const [titleText, setTitleText] = useState('');

  // this should be changed out for a mount/unmount transition
  const titleSpring = useSpring({
    opacity: page === 'home' ? 1 : 0,
  });
  
  return (
    <animated.div className="title-cntr" style={titleSpring}>
      <h1 className="blinking-cursor">
        Andrew
        <br />
        Bourgeois
      </h1>
      <h3>full-stack developer</h3>
    </animated.div>
  );
}
