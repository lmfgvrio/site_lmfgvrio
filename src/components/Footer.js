import React from 'react';
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import '../styles/components/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Logo color="black"/>

        <div className="footer-contact">
            <p><strong>Endereço:</strong> <br />Praia de Botafogo, 190, Rio de Janeiro, RJ</p>
            <p><strong>Contato:</strong> <br />ligademercadofgvrio@gmail.com</p>
        </div>

        <SocialLinks color="black"/>
      </div>

      <div className="footer-bottom">
        <p>&copy; Developed by FGV JR</p>
      </div>
    </footer>
  );
}

export default Footer;
