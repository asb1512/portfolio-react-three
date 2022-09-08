import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { animated, useTransition } from '@react-spring/web';
import Title from './Title';
import About from './About';
import Work from './Work';
import Contact from './Contact';

export default function Pages() {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: {
      duration: 750,
    },
  });

  return transitions((attrs, item) => (
    <animated.div className="content-cntr" style={attrs}>
      <Routes location={item}>
        <Route
          path="/"
          element={<Title />}
          pathname={location.pathname}
        />
        <Route
          path="/about"
          element={<About />} 
          pathname={location.pathname}
        />
        <Route
          path="/work"
          element={<Work />}
          pathname={location.pathname}
        />
        <Route
          path="/contact"
          element={<Contact />}
          pathname={location.pathname}
        />
      </Routes>
    </animated.div>
  ));
}
