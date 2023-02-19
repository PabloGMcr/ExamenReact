import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
           
                
            <nav className="navbar fixed-top sticky-top navbar-expand-lg bg-dark ">
       {/*  <NavLink className="navbar-brand" to="/">
          <img className="w-25 h-25" src="/logo192.png" alt=""></img>
        </NavLink> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link text-light" to="/">
                Home<span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/Formulario">
                Formulario
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/Listado">
                Listado-axios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/Contac">
                Contac
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/History">
                History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/About">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
            
            
        );
    }
}
 
export default Navbar;