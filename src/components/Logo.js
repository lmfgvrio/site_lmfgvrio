import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Logo.css';

const Logo = ({ color = 'white'}) => {
  return (
    <div className="logo">
      <Link to="/">
        <img
          src="/logoo.png"
          alt="Logo LMF"
          className="logo-imagem"
        />
        <div className="separator" style={{ backgroundColor: color }}></div>
        <div className="logo-name">
          <span className="lmf" style={{ color: color }}>LMF</span>
          <span className="fgv-rio" style={{ color: color }}>FGV RIO</span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
