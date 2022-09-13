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
        I believe form and function can coexist. Without one, art
        wouldn't be possible and without the other, what's the point?
      </p>
      <h2>
        my stack
      </h2>
      <ul>
        <li>
          <span>React.js</span> (UI)
        </li>
        <li>
          <span>Redux</span> (State Management)
        </li>
        <li>
          <span>RTK Query</span> (HTTP Client)
        </li>
        <li>
          <span>Express.js</span> (Backend Server)
        </li>
        <li>
          <span>Prisma.js</span> (ORM)
        </li>
        <li>
          <span>PostgreSQL</span> (Relational DB)
        </li>
      </ul>
      {/* <img
        src={napTime}
        alt="Andrew Bourgeois: Full-Stack Developer"
        className="about-img"
      /> */}
    </div>
  );
}
