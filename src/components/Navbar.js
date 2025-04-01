import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import '../styles/components/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Controla o estado da navbar
  const handleScroll = () => {
    if (window.scrollY < 150) {
      setScrolled(false);
      setHidden(false);
    }
    else if (window.scrollY < lastScrollY) {
      setScrolled(true);
      setHidden(false);
    } else {
      setScrolled(false);
      setHidden(true);
    }
    setLastScrollY(window.scrollY);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, lastScrollY, hidden]);

  return (
    <header className={`navbar-container ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <div className='navbar'>
        <Logo/>

        <button 
          className='botao'
          onClick={toggleMenu}
          aria-label='Menu'
        >
          <div className={`botao-line ${isOpen ? 'open' : ''}`} />
          <div className={`botao-line ${isOpen ? 'open' : ''}`} />
          <div className={`botao-line ${isOpen ? 'open' : ''}`} />
        </button>

        <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to='/' onClick={() => setIsOpen(false)}>Início</Link></li>
            <li><Link to='/processoSeletivo' onClick={() => setIsOpen(false)}>Processo Seletivo</Link></li>
            <li><Link to='/projetos' onClick={() => setIsOpen(false)}>Projetos</Link></li>
            <li><Link to='/equipe' onClick={() => setIsOpen(false)}>Equipe</Link></li>
            <li><Link to='/alumni' onClick={() => setIsOpen(false)}>Alumni</Link></li>
          </ul>
          
          <SocialLinks/>
        </nav>
      </div>
      <hr className={`header-divider ${hidden || scrolled ? 'hidden' : ''}`} />
    </header>
  );
};

export default Navbar;
