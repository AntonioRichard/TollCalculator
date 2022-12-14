import React from "react";
import { NavLink } from "react-router-dom";
import store from "../app"

export default class Header extends React.Component{
  state = {
    navbarOpen: false
  }

  handleToggle = () => {
    this.setState((prevState) => ({ navbarOpen: !prevState.navbarOpen }));
  }

  render() {
  return (
    <div>
      <section className={`navigation`}>
       <div className={`nav-container`}>
          <div className="brand">
             <NavLink id='nav-link' to='/'>Toll Calculator</NavLink>
          </div>
            <nav>
              <div className={`nav-mobile`}>
                <button id='nav-toggle' onClick={this.handleToggle} className={this.state.navbarOpen ? "active" : ""}><span></span></button>
              </div>
            <ul className={`nav-list ${this.state.navbarOpen ? "active" : ""}`}>
              <li><NavLink to='/' id='nav-link'>Dashboard</NavLink></li>
              <li><NavLink to='/contact' id='nav-link'>Contact</NavLink></li>
              <li><NavLink to='/about' id='nav-link'>About</NavLink></li>
              <li className="dropdown"><NavLink to='/login' id='nav-link'>Login</NavLink>
               <ul className="nav-dropdown">
                <li><NavLink to='/register' id='nav-link'>Register</NavLink></li>
               </ul>
              </li>
            </ul>
            </nav>
      </div>
    </section>
    </div>
  );
 };
};
