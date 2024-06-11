import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios';

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization'] = null;
        navigate('/login');
    };

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
    );
}

export default Navbar;
