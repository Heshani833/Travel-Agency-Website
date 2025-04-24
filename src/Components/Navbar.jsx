import { Component } from "react";
import "./Navbar.css";
import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="NavbarItem">
        <h1 className="navbar-logo">Trippy</h1>
        <ul className="nav-menu">
          {MenuItem.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.title}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <button>Sign Up</button>
      </nav>
    </div>
  );
};

export default Navbar;
