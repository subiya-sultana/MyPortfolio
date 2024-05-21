import React from 'react';
import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import cardImg from "../assets/logo inspiration.PNG";

const Projects = () => {
  return (
    <div className='projects section' id="projects">
      <pre className="sub-title" data-aos="fade-up"> &lt; Projects /&gt; </pre>
      <h1 className="glitch title" data-aos="fade-up" data-aos-duration="1500">WHAT I BUILT?</h1>
      <div className="project-container">
        <div className='myProject' data-aos="zoom-in" data-aos-duration="1500">
          <div className='img-container'>
            <img src={cardImg} alt="projectImg"/>
          </div> 
          <div className='myProject-desc'>
            <h3>OrganizeU: online task management system</h3>
            <div className='tech-stack'>
              <button>html</button>
              <button>css</button>
              <button>Javascript</button>
              <button>php</button>
              <button>Mysql</button>
            </div>
            <div className='project-links'>
              <button>View site <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
              <button>Github <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
            </div>
          </div>
        </div>
        <div className='myProject' data-aos="zoom-in" data-aos-duration="1500">
          <div className='img-container'>
            <img src={cardImg} alt="projectImg"/>
          </div> 
          <div className='myProject-desc'>
            <h3>OrganizeU: online task management system</h3>
            <div className='tech-stack'>
              <button>html</button>
              <button>css</button>
              <button>Javascript</button>
              <button>php</button>
              <button>Mysql</button>
            </div>
            <div className='project-links'>
              <button>View site <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
              <button>Github <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
            </div>
          </div>
        </div>
        <div className='myProject' data-aos="zoom-in" data-aos-duration="1500">
          <div className='img-container'>
            <img src={cardImg} alt="projectImg"/>
          </div> 
          <div className='myProject-desc'>
            <h3>OrganizeU: online task management system</h3>
            <div className='tech-stack'>
              <button>html</button>
              <button>css</button>
              <button>Javascript</button>
              <button>php</button>
              <button>Mysql</button>
            </div>
            <div className='project-links'>
              <button>View site <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
              <button>Github <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
