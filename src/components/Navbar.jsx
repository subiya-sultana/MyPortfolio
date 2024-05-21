import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faPhoneVolume, faLaptopCode, faGraduationCap} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offset = element.offsetTop - 150;
          const height = element.offsetHeight;
          if (scrollY >= offset && scrollY < offset + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    // Attaching scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Removing scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <Link to="home" smooth={true} duration={500} spy={true}  activeClass={activeSection === 'home' ? 'active' : ''}>
        <span className='icon'>
          <FontAwesomeIcon  icon={faHome} />
        </span>
        <span className='text'>Home</span>
      </Link>
      <Link to="about" smooth={true} duration={500} spy={true} offset={20}  activeClass={activeSection === 'about' ? 'active' : ''}>
        <span className='icon'>
          <FontAwesomeIcon  icon={faUser} />
        </span>
        <span className='text'>About</span>
      </Link>
      {/* <Link to="skills" smooth={true} duration={500} spy={true} offset={-70} activeClass={activeSection === 'skills' ? 'active' : ''}>
                <span className='icon'>
          <FontAwesomeIcon  icon={faSkills} />
        </span>
        <span className='text'>Skills</span>
      </Link> */}
      <Link to="education" smooth={true} duration={500} spy={true} offset={-200} activeClass={activeSection === 'education' ? 'active' : ''}>
        <span className='icon'>
          <FontAwesomeIcon  icon={faGraduationCap} />
        </span>
        <span className='text'>Education</span>
      </Link>
      <Link to="projects" smooth={true} duration={500} spy={true} offset={-200} activeClass={activeSection === 'projects' ? 'active' : ''}>
        <span className='icon'>
          <FontAwesomeIcon  icon={faLaptopCode} />
        </span>
        <span className='text'>Projects</span>
      </Link>
      <Link to="contact" smooth={true} duration={500} spy={true} offset={-200} activeClass={activeSection === 'contact' ? 'active' : ''}>
      <span className='icon'>
          <FontAwesomeIcon  icon={faPhoneVolume} />
        </span>
        <span className='text'>Contact</span>
      </Link>
    </nav>
  );
};
export default Navbar;
