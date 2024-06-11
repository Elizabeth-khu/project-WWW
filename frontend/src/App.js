import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Recipes from './components/Recipes';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import AddRecipe from './components/AddRecipe';
import Navbar from './components/Navbar';

function App() {
    const isAuthenticated = () => {
        return localStorage.getItem('token') !== null;
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/addrecipe" element={isAuthenticated() ? <AddRecipe /> : <Navigate to="/login" />} />
                <Route path="/about" element={isAuthenticated() ? <About /> : <Navigate to="/login" />} />
                <Route path="/recipes" element={isAuthenticated() ? <Recipes /> : <Navigate to="/login" />} />
                <Route path="/contact" element={isAuthenticated() ? <Contact /> : <Navigate to="/login" />} />
                <Route path="/" element={isAuthenticated() ? <Home /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
