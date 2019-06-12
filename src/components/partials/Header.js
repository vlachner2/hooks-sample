import React, { useContext }  from 'react';
import {
  Navbar,
  NavbarBrand,
  NavLink} from 'reactstrap';
import { Context } from '../../store';
import {Link} from 'react-router-dom';

export const Header = () => {
  const { store } = useContext(Context);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Hooks Sample App</NavbarBrand>
        <NavLink href="/user-info">User Info</NavLink>
        <NavLink href="/page">Page</NavLink>
        { store.user.name ?
            <NavbarBrand>Bienvenido {store.user.name}</NavbarBrand>
          :
            <NavLink href="/sign-in">Sign In</NavLink>
        }
      </Navbar>
    </div>)
    ;
}