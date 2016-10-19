import React from 'react';
import { Link } from 'react-router';
import './NavLink.css';

const NavLink = (props) => (
  <Link { ...props } activeClassName="active" />
);

export default NavLink;
