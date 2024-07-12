import React from 'react';
import logo from '../assets/argentBankLogo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearAuth } from '../redux/authSlice';
import Cookies from 'js-cookie';

function Header() {
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const signOut = () => {
        dispatch(clearAuth());
        Cookies.remove('token');
        navigate('/login');
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
                    {token && user ?
                        (
                            <>
                                <Link className="main-nav-item" to="/profile">
                                    <i className="fa fa-user-circle"></i>
                                    <span>{user.firstName}</span>
                                </Link>
                                <Link className="main-nav-item" to="/" onClick={signOut}>
                                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                    <p> Sign out </p>
                                </Link>
                            </>
                        )
                        :
                        (
                            location.pathname !== '/login' && (
                                <Link className="main-nav-item" to="/login">
                                    <span>Sign In</span>
                                </Link>
                            )
                        )
                    }
                </div>
            </nav>
        </header>
    );
}

export default Header;
