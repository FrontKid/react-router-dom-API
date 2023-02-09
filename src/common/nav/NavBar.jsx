import React from 'react'
//import { NavLink } from 'react-router-dom'
import CustomLink from '../layout/CustomLink'
const NavBar = () => {

  //const setIsActive = ({ isActive }) => isActive ? 'header__nav-link active-link' : 'header__nav-link'

  return (
    <nav className='nav header__nav'>
      <ul className='header__nav-inner'>
        <li className='header__nav-list'>
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li className='header__nav-list'>
          <CustomLink to="/blog">Blog</CustomLink>
        </li>
        <li className='header__nav-list'>
          <CustomLink to="/about">About</CustomLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar