import React, { useState } from 'react';
import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faClose, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Project = ({ id, title, siteLink, githubLink, imgSrc, techStack, description }) => {

  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const handleClick = () => {
    setShowProjectDetails(prevState => !prevState);
  }

  return (
    <div className='myProject' data-aos="zoom-in" data-aos-duration="1500">
      <div className="projectHead" onClick={handleClick}>
        <div className='left'>
          <h3>{title}</h3>
          <div className='project-links'>
            {siteLink && (
              <a href={siteLink} target='_blank' rel="noopener noreferrer">
                <button>View site <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target='_blank' rel="noopener noreferrer">
                <button>Github <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
              </a>
            )}
          </div>
        </div>
        <div className='right'>
          {
            !showProjectDetails ?
            <FontAwesomeIcon className='viewMoreIcon' icon={faAngleDown}  />
            : <FontAwesomeIcon className='viewMoreIcon' icon={faClose}  />
          }
        </div>
      </div>
      {
        showProjectDetails && 
        <div className="projectBody">
          {
          imgSrc &&
            <div className="left">
              <div className='img-container'>
                <img src={imgSrc} alt="projectImg"/>
              </div>
            </div>
          }
          <div className="right">
            {
              techStack && 
                <div className='tech-stack'>
                <h2>Tech Stack</h2>  
                {techStack.map((tech, index) => (
                  <button key={index}>{tech}</button>
                ))}
              </div>
            }
            <hr />
            {
              description &&
                <div className="description">
                  <h2>Description</h2>
                  <p>{description}</p>
                </div>
            }
          </div>
        </div>
      }
    </div>
  );
}

export default Project;
