import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/components/SocialLinks.css';

const SocialLinks = ({ color = 'white' }) => {
  return (
    <div className='SocialLinks'>
      <a
        href='https://www.instagram.com/lmfgvrio'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaInstagram className={`social-icon ${color}`} />
      </a>
      <a
        href='https://www.linkedin.com/company/liga-de-mercado-financeiro-fgv-rio'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaLinkedin className={`social-icon ${color}`} />
      </a>
    </div>
  );
};

export default SocialLinks;