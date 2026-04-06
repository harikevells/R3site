import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
  };

  const toggleProductsDropdown = (e) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setIsProductsDropdownOpen(!isProductsDropdownOpen);
    }
  };

  const handleLinkClick = (e, targetId) => {
    closeMobileMenu();
    // If we are on the home page and clicking a hash link, scroll to it
    if (location.pathname === '/' && targetId.startsWith('#')) {
      const element = document.getElementById(targetId.substring(1));
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="nav-logo">
          <NavLink to="/" onClick={(e) => handleLinkClick(e, '#home')}>
            <img src={logo} alt="R3 Global Logo" className="logo-img" />
          </NavLink>
        </div>

        <div className="nav-actions">
          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <NavLink to="/" end onClick={(e) => handleLinkClick(e, '#home')}>HOME</NavLink>
            <NavLink to="/about" onClick={closeMobileMenu}>ABOUT</NavLink>
            <NavLink to="/global" onClick={closeMobileMenu}>GLOBAL</NavLink>
                        <NavLink to="/certifications" onClick={closeMobileMenu}>CERTIFICATIONS</NavLink>

            <div 
              className={`nav-dropdown ${isProductsDropdownOpen ? 'open' : ''}`}
              onMouseEnter={() => window.innerWidth > 1024 && setIsProductsDropdownOpen(true)}
              onMouseLeave={() => window.innerWidth > 1024 && setIsProductsDropdownOpen(false)}
            >
            
              <NavLink 
                to="/product/nitrile" 
                onClick={(e) => {
                  if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    toggleProductsDropdown(e);
                  }
                }}
                className={({ isActive }) => 
                  `dropdown-trigger ${isActive || location.pathname.startsWith('/product') ? 'active' : ''}`
                }
              >
                PRODUCTS <span className="dropdown-icon">▼</span>
              </NavLink>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item1" to="/product/nitrile" onClick={closeMobileMenu}>Nitrile</NavLink>
                <NavLink className="dropdown-item1" to="/product/latex" onClick={closeMobileMenu}>Latex</NavLink>
              </div>
            </div>
            {/* <NavLink to="/" onClick={(e) => handleLinkClick(e, '#supply')}>SUPPLY</NavLink> */}
          </div>
            <NavLink to="/contact" className="btn-get-in" onClick={closeMobileMenu}>CONTACT</NavLink>
          <div className="hamburger" onClick={toggleMobileMenu}>
            <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
