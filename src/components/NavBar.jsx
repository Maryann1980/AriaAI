import { FaLinkedin, FaGithub } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className='nav-container'>
      <a href="www.linkedin.com/in/maryann-ifunanya-igwe-94083331b" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} className='navbar-icon'/>
      </a>
      <a href="https://github.com/Maryann1980" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} className='navbar-icon'/>
      </a>
    </div>
  );
}

export default NavBar;
