import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div>
      <h1>OOPS!</h1>
      <p>Looks like this page doesn't exist.</p>
      <p>Head back <Link to='/home'>home</Link></p>
    </div>
  );
};

export default NotFoundPage;
