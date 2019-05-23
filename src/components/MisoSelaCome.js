import React, { useContext } from 'react';
import { Context } from '../store';

export default () => {
  const { store, dispatch } = useContext(Context);
  return (
    <div className="seLaCome">
      <p>You clicked and Miso se la come: {`${store.seLaCome ? 'YES' : 'NO'}`}</p>
      <button onClick={() => dispatch({ type: "seLaComeType" })}> Yes/NO </button>
    </div>
  );
}