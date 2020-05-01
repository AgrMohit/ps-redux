import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "hsl(15, 88%, 55%)" };
  return (
    <nav className="navbar">
      <NavLink to="/" activeStyle={activeStyle} exact className="nav-link">
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle} className="nav-link">
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle} className="nav-link">
        About
      </NavLink>
    </nav>
  );
};

export default Header;
