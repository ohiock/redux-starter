import React from 'react';
import { Link, IndexLink } from 'react-router';

const NotFoundPage = () => {
  return (
    <div>
      <h1>OOPS!</h1>
      <p>Looks like this page doesn't exist.</p>
      <p>Head back <IndexLink to='/'>home</IndexLink>.</p>
    </div>
  );
};

export default NotFoundPage;
