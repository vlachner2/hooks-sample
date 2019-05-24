import React, { useContext }  from 'react';
import {
  Navbar,
  NavbarBrand,
  NavLink} from 'reactstrap';
import { Context } from '../../store';

export const Header = () => {
  const { store } = useContext(Context);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Test Hooks</NavbarBrand>
        { store.user.name ?
            <NavbarBrand>Bienvenido {store.user.name}</NavbarBrand>
          :
            <NavLink href="/sign-in">Sign In</NavLink>
        }
      </Navbar>
    </div>)
    ;
}