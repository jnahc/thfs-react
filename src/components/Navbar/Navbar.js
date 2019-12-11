import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Login from "../Auth/Login";
import Register from "../Auth/Register";

import './Navbar.css'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <Link className="navbar-brand" to="/">THFS</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/cast-list">Cast</NavLink>
            </li>
            <li className="nav-item" id="login-button">
              {!props.currentUser && <Login currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} />}
            </li>
            <li className="nav-item" id="register-button">
              {!props.currentUser && <Register setCurrentUser={props.setCurrentUser} />}
            </li>
          
            <li className="nav-item">
              {props.currentUser && <NavLink className="nav-link" exact to="/profile">Profile</NavLink>}
            </li>
            <li className="nav-item">
              {props.currentUser &&  <div className="nav-link" onClick={() => props.logout() }>Logout</div>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;