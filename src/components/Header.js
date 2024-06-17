import React from 'react';
import logo from '../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <header>
          <nav className="main-nav">
              <Link className="main-nav-logo" to="/">
                  <img
                      className="main-nav-logo-image"
                      src={logo}
                      alt="Argent Bank Logo"
                  />
                  <h1 className="sr-only">Argent Bank</h1>
              </Link>
              <div>
                  <Link className="main-nav-item" to="/signin">
                      <i className="fa fa-user-circle"></i>
                      Sign In
                  </Link>
              </div>
          </nav>
      </header>
  );
}

export default Header;