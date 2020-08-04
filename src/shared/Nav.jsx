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
  const removeModal = () => {
    toggleisVisible({
      isVisible: false
    });

    setOpen({
      open: false
    });

    setShow({
      show: false
    })


  }

  return (
    <Fragment>
      <div className="mobile--nav" onClick={() => hamburger()} >
        <span className={open ? "mobile--nav-span menu-is-open" : "mobile--nav-span"}></span>
      </div>
      <nav className={isVisible ? "nav show" : "nav"}>
        <NavLink onClick={removeModal} className={show ? 'is-shown' : null} activeClassName="activeLink" to="/" exact>Home</NavLink>
        <NavLink onClick={removeModal} className={show ? 'is-shown' : null} activeClassName="activeLink" to="/projects" exact>Projects</NavLink>
        <NavLink onClick={removeModal} className={show ? 'is-shown' : null} activeClassName="activeLink" to="/about" exact>About me</NavLink>
      </nav>
    </Fragment>


  )

}
export default Nav;