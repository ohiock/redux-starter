import React from 'react';
import { Link } from 'react-router';

const HomePage = () => (
  <div>
    <h1>Redux Starter</h1>
    <p>A great starting point for a Redux application.</p>
    <p>Check out the <Link to="/about">about page</Link>.</p>
  </div>
);

export default HomePage;
