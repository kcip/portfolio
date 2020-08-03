import React, { Fragment, useState } from 'react'
import { NavLink } from "react-router-dom";
import useToggle from '../hooks/useToggle'
import './nav.scss';
const Nav = () => {
  const [isVisible, toggleisVisible] = useToggle(false);
  const [open, setOpen] = useToggle(false)
  const [show, setShow] = useToggle(false)
  const hamburger = () => {
    setOpen()
    toggleisVisible()
    setShow()
  }


  return (
    <Fragment>
      <div className="mobile--nav" onClick={() => hamburger()} >
        <span className={open ? "mobile--nav-span menu-is-open" : "mobile--nav-span"}></span>
      </div>
      <nav className={isVisible ? "nav show" : "nav"}>
        {/* <nav className="nav" style={{ transform: isVisible ? 'translateX(0%)' : 'translateX(110%)' }}> */}
        <NavLink className={show ? 'is-shown' : null} activeClassName="activeLink" to="/" exact>Home</NavLink>
        <NavLink className={show ? 'is-shown' : null} activeClassName="activeLink" to="/projects" exact>Projects</NavLink>
        <NavLink className={show ? 'is-shown' : null} activeClassName="activeLink" to="/about" exact>About me</NavLink>
      </nav>
    </Fragment>


  )

}
export default Nav;