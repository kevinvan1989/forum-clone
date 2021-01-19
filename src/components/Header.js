import React, { Component } from "react";
import logo from "../assets/logo-white.png";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const token = localStorage.getItem("_DEMO_TOKEN");
    return (
      <header>
        <nav className="d-flex flex-row justify-content-center text-center">
          <div>
            <img src={logo} alt="" />
          </div>
        </nav>
        <ul>
          {!token ? (
            <li>
              <Link to="/login">
                <div className="">Go to Login</div>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/logout">
                <div className="">Go to Logout</div>
              </Link>
            </li>
          )}
          <li>
            <Link to="/register">
              <div className="">Go to Register</div>
            </Link>
          </li>
          <li>
            <Link to="/overview/1">
              <div className="">Go to overview</div>
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
