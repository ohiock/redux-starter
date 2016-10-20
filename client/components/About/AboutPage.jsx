import React from 'react';
import { Link } from 'react-router';

const AboutPage = () => {
  return (
    <div>
      <h1>This is ohiock's Redux Starter</h1>
      <p>I use this to start all of my react projects. Hopefully you will find it useful as well.</p>
      <p>Test out this <Link to='/does-not-exist'>404 page</Link>.</p>
    </div>
  );
};

export default AboutPage;
