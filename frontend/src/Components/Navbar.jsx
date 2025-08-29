import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import '../styles/Navbar.css';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prevY = useRef(window.scrollY);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < prevY.current) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      prevY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change for a clean experience
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <header className={`navbar-header ${showNavbar ? 'show' : 'hide'}`}>
      <nav className="navbar-container" aria-label="Main Navigation">
        <div className="navbar-logo">
          <NavLink to="/cleen-foundation-ngo" end aria-label="Home">
            <img src={Logo} alt="Cleen Foundation Logo" />
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <button
          className={`navbar-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger"></span>
        </button>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {[
            { path: '/', label: 'Home' },
            { path: '/employee', label: 'Employee' },
            { path: '/donation', label: '+Donation', cta: true },
            { path: '/blog', label: 'Blog' },
            { path: '/about', label: 'About' },
            { path: '/contact', label: 'Contact' },
            { path: '/apply', label: 'Apply' },
            { path: '/admin', label: 'Admin' },
            { path: '/login', label: 'Login' },
          ].map((link, index) => (
            <li key={index} className={link.cta ? 'cta' : ''}>
              <NavLink
                to={`/cleen-foundation-ngo${link.path}`}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `${isActive ? 'active' : ''} ${link.cta ? 'cta-link' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
