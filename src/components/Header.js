import React from 'react';
import logo from '../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearAuth } from '../redux/authReducer';

function Header() {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(clearAuth());
    }

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
                  {token ?
                      <Link className="main-nav-item" to="/" onClick={signOut}>
                          <i className="fa fa-user-circle"></i>
                          Sign Out
                      </Link>
                      :
                      <Link className="main-nav-item" to="/login">
                          <i className="fa fa-user-circle"></i>
                          Sign In
                      </Link>
                  }
              </div>
          </nav>
      </header>
  );
}

export default Header;