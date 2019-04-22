import * as React from "react";
import { NavLink } from "react-router-dom";

import "./NavButton.scss";

interface NavButtonType {
  path: string;
  title: string;
}

const NavButton: React.FC<NavButtonType> = props => (
  <NavLink exact to={props.path} activeClassName="isActive" className="nav-btn">
    {props.title}
  </NavLink>
);

export default NavButton;
