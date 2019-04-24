import * as React from 'react'
import { NavLink } from 'react-router-dom'

import './NavButton.scss'

interface NavButtonType {
  path: string
  title: string
}

const NavButton: React.FC<NavButtonType> = ({ path, title }) => (
  <NavLink exact to={path} activeClassName="isActive" className="nav-btn">
    {title}
  </NavLink>
)

export default NavButton
