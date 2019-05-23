import React from 'react';
import { Link } from 'react-router-dom';
import MisoSelaCome from '../MisoSelaCome';

export default () => (
  <>
    <header>
      <h1>Home Page</h1>
      <Link to="/another">Another Page</Link>
    </header>
    <section>
      <MisoSelaCome />
    </section>
  </>
);