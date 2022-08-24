import React from 'react';
import napTime from './images/nap-time.jpg';

export default function About() {
  return (
    <div className="page-cntr">
      <h1>
        about
      </h1>
      <p>
        Hi I'm Andrew. I love creating web experiences that are beautiful,
        functional and reliable.
      </p>
      <p>
        I primarily use React.js to design the frontend and UI, along with RTK
        query for communication with an Express.js backend and database. 
      </p>
      <img
        src={napTime}
        alt="Andrew Bourgeois: Full-Stack Developer"
        className="about-img"
      />
    </div>
  );
}
