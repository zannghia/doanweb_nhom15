import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token') !== null;

    const handleLogout = () => {
        localStorage.removeItem('token');
        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                        src="https://pluspng.com/img-png/logo-vietjet-air-png-vietjet-air-and-safran-sign-sfco2-service-agreement-safran-aircraft-engines-1000.png"
                        alt="Logo"
                        className="logo"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/#">Trợ Giúp</Link>
                        </li>

                        {!isLoggedIn && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/register">Register</Link>
                                </li>
                            </>
                        )}

                        {isLoggedIn && (
                            <li className="nav-item">
                                <button
                                    className="nav-link text-white bg-dark border-0"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
