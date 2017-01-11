import React from 'react';
import { IndexLink } from 'react-router';

const NotFoundPage = () => (
  <div>
    <h1>OOPS!</h1>
    <p>Looks like this page doesn't exist.</p>
    <p>Head back <IndexLink to="/">home</IndexLink>.</p>
  </div>
);

export default NotFoundPage;
