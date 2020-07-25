import React from 'react'
import { NavLink } from "react-router-dom";
import './nav.scss';
const Nav = () => {
  return (
    <nav className="nav">
      <NavLink activeClassName="activeLink" to="/" exact>Home</NavLink>
      <NavLink activeClassName="activeLink" to="/projects" exact>Projects</NavLink>
      <NavLink activeClassName="activeLink" to="/about" exact>About me</NavLink>
      <NavLink activeClassName="activeLink" to="/contact" exact>Contact</NavLink>
    </nav>
  )
}
export default Nav;