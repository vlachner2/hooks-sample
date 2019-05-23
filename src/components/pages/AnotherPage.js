import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store';

export default () => {
  const { store } = useContext(Context);
  return (
    <>
      <Link to="/">Home</Link>
      <h1>Another Page</h1>
      <h2>Miso se la Come? {`${store.seLaCome ? 'YES' : 'NO'}`}</h2>
    </>
  );
}
