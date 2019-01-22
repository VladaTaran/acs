import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo_school.png';

const Header = () => (
    <header>
        <div className="nav-logo-container">
            <NavLink to="/" className="nav-logo-link">
                <img 
                    className="nav-logo" 
                    src = { logo }
                    alt="logo"
                    
                />
            </NavLink>
        </div>
        <div className="nav-menu">
            <NavLink 
                to="/" 
                activeClassName="is-active" 
                className="nav-link" 
                exact={true}
                activeStyle={{color: "#303f9f"}}
            >
                Home
            </NavLink>
            <NavLink 
                to="/courses" 
                activeClassName="is-active" 
                activeStyle={{color: "#303f9f"}}
                className="nav-link" 
                exact={true}
            >
                Courses
            </NavLink>
            <NavLink 
                to="/contact" 
                activeClassName="is-active"
                activeStyle={{color: "#303f9f"}} 
                className="nav-link"
            >
                Contacts
            </NavLink>
        </div>
    </header>
);

export default Header;