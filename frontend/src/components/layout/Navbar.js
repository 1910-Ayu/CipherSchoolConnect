import React, { Fragment } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
  /*const dispatch = useDispatch();
  const handler=()=>{
    dispatch(logout());
  }*/
    const authLinks = (
        <ul>
          <li>
            <Link to="/profiles">All Users</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/myprofile">
              <i className="fas fa-user" />{' '}
              <span className="hide-sm">My Profile</span>
            </Link>
          </li>
          <li>
            <a >
              <i className="fas fa-sign-out-alt" />{' '}
              <span className="hide-sm">Logout</span>
            </a>
          </li>
        </ul>
      );
      const guestLinks = (
        <ul>
          <li>
            <Link to="/profiles">All Users</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );

  return (
    <nav className="navbar bg-dark">
    <h1>
      <Link to="/">
        <i className="fas fa-code" /> CipherSchools-Connect
      </Link>
    </h1>
    <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
  </nav>
  )
}

export default Navbar