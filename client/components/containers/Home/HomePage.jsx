import React from 'react';
import { Link } from 'react-router';

const HomePage = () => (
  <div>
    <h1>Redux Starter</h1>
    <p>A simple boilerplate for super cool Redux apps.</p>
    <p>Check out the <Link to="/counter">counter page</Link>.</p>
  </div>
);

export default HomePage;
