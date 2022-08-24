import React from 'react';
import { animated, useSpring } from '@react-spring/web';

export default function Accents({ pathname }) {
  console.log('pathname:', pathname);
  const bottomStyle = useSpring({
    bottom: '2%',
    width: pathname === '/'
      ? '0'
      : pathname === '/about'
        ? '70%'
        : '0',
  });
  const topStyle = useSpring({
    bottom: '6%',
    width: pathname === '/'
      ? '0'
      : pathname === '/about'
        ? '40%'
        : '0'
  });

  return (
    <>
      <animated.div className="accent-block" style={bottomStyle} />
      <animated.div className="accent-block" style={topStyle} />
    </>
  );
}
