import { useState } from "react";
import "./Navbar.css";
import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="NavbarItem">
        <h1 className="navbar-logo">TravoSphere</h1>

        <ul className="nav-menu">
          {MenuItem.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}

          <button>Sign Up</button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
