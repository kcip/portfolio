import React, { Fragment, useState } from 'react'
import { NavLink } from "react-router-dom";
import useToggle from '../hooks/useToggle'
import './nav.scss';
const Nav = () => {
  const [isVisible, toggleisVisible] = useToggle(true);

  const show = () => {
    toggleisVisible()
  }
  return (
    <Fragment>
      <div className="mobile--nav" onClick={show} >
        <span className="mobile--nav-span"></span>
      </div>
      <nav className="nav" style={{ display: isVisible ? 'flex' : 'none' }}>
        {/* <Fragment> */}
        {/* <div className="mobile--nav" onClick={show} >
          <span className="mobile--nav-span"></span>
        </div> */}

        <NavLink activeClassName="activeLink" to="/" exact>Home</NavLink>
        <NavLink activeClassName="activeLink" to="/projects" exact>Projects</NavLink>
        <NavLink activeClassName="activeLink" to="/about" exact>About me</NavLink>
        {/* <NavLink activeClassName="activeLink" to="/contact" exact>Contact</NavLink> */}
      </nav>
    </Fragment>


  )

}
export default Nav;