import React, { useContext }  from 'react';
import { Context } from '../../store';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

export default () => {
  const { dispatch } = useContext(Context);

  const signIn = () => {
    dispatch({ type: "signIn", 
      user: { 
        name: 'Ferro',
        lastName: 'Alvarez',
        company: 'Pernix' 
      }
    })
  }

  return (
    <div>
      <input placeholder='Email'/>
      <input placeholder='Password'/>
      <Button tag={Link} to="/user-info" > Go to </Button>
      <button onClick={signIn}> Sign In </button>
    </div>
  );
};