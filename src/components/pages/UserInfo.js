import React, { useContext }  from 'react';
import { Context } from '../../store';

export default () => {
  const { store } = useContext(Context);
  return (
    <div>
      <h1>User info</h1>
      <h2> User name: {store.user.name}</h2>
      <h2> User last name: {store.user.lastName}</h2>
      <h2> User company: {store.user.company}</h2>
    </div>
  );
}
