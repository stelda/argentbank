import React from 'react';
import logo from '../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearAuth } from '../redux/authSlice';
import {getUserProfile} from "../redux/authThunk";


function Header() {
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);
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
              <div className="main-nav-connexion">
                  {token ?
                      <>
                          <div className="main-nav-item">
                              <i className="fa fa-user-circle"></i>
                              <span>{user.firstName}</span>
                          </div>
                          <Link className="main-nav-item" to="/" onClick={signOut}>
                              <i className="fa-solid fa-arrow-right-from-bracket"></i>
                              <p> Sign out </p>
                          </Link>
                      </>

                      :

                      <Link className="main-nav-item" to="/login">
                          <span>Sign In</span>
                      </Link>
                  }
              </div>
          </nav>
      </header>
  );
}

export default Header;