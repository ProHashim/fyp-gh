// Navbar jsx
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import About from "../pages/about";
import Featured from "../pages/featured";
import Contact from "../pages/contact";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <a href="/">WebParrots</a>
        </div>
      
     
          <nav className="nav-links">
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/featured" className="nav-link">
                Featured
              </Link>
            </li>

            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

      {/* <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/featured">
          <Featured />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch> */}

      
        <div className="saved-search">
          <AiOutlineSearch className="search-icon" />
          <input type="search" name="" id="" placeholder="Saved Search" />
        </div>
        <div className="notification-icon">
          <AiOutlineBell className="bell" />
        </div>
        <div className="user-login">
          <button>Login</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
