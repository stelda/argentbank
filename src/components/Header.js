import React from 'react';
import logo from '../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearAuth } from '../redux/authSlice';

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
                      <>
                          <div className="main-nav-item">
                              <i className="fa fa-user-circle"></i>
                              <span>prénom de l'utilisateur</span>
                          </div>
                          <Link className="main-nav-item" to="/" onClick={signOut}>
                              <i className='fa-solid fa-arrow-right-from-bracket'/>
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