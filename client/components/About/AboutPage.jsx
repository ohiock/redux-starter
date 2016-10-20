import React from 'react';
import { Link } from 'react-router';

const AboutPage = () => {
  return (
    <div>
      <h1>This is ohiock's Redux Starter</h1>
      <p>I built this to help me start my React projects faster. Maybe you'll find it useful, too!</p>
      <p>Test out this <Link to='/does-not-exist'>404 page</Link>.</p>
    </div>
  );
};

export default AboutPage;
