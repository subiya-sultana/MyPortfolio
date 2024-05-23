import React, { useState } from 'react';
import '../styles/Projects2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faClose, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import cardImg from "../assets/logo inspiration.PNG";

const Projects = () => {
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const handleClick = (id)=>{
    setShowProjectDetails(prevState => ({...prevState, [id]: !prevState[id] }));
    console.log(id);
  }
  return (
    <div className='projects section' id="projects">
      <pre className="sub-title" data-aos="fade-up"> &lt; Projects /&gt; </pre>
      <h1 className="glitch title" data-aos="fade-up" data-aos-duration="1500">WHAT I BUILT?</h1>
      <div className="project-container">
        {/* <div className='myProject' data-aos="zoom-in" data-aos-duration="1500">
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
        </div> */}
        <div className='myProject' data-aos="zoom-in" data-aos-duration="1500">
          <div className="projectHead">
            <div className='left'>
              <h3>OrganizeU: online task management system</h3>
              <div className='project-links'>
                <button>View site <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
                <button>Github <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
              </div>
            </div>
            <div className='right'>
              {
                !showProjectDetails["box1"] ?
                <FontAwesomeIcon className='viewMoreIcon' icon={faAngleDown} onClick={() => handleClick("box1")} />
                : <FontAwesomeIcon className='viewMoreIcon' icon={faClose} onClick={() => handleClick("box1")} />
              }
            </div>
          </div>
          {
            //conditional rendering when state is true.. else don't render div
            showProjectDetails["box1"] && 
              <div className="projectBody">
                <div className="left">
                  <div className='img-container'>
                    <img src={cardImg} alt="projectImg"/>
                  </div>
                </div>
                <div className="right">
                  <div className='tech-stack'>
                    <h2>Tech Stack</h2>  
                    <button>html</button>
                    <button>css</button>
                    <button>Javascript</button>
                    <button>php</button>
                    <button>Mysql</button>
                  </div>
                  <hr />
                  <div className="description">
                    <h2>Description</h2>
                    <p>this is my perfect project bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eligendi!
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quidem!</p>
                  </div>

              </div>
          </div>
          }
        </div>
        <div className='myProject' data-aos="zoom-in" data-aos-duration="1500">
          <div className="projectHead">
            <div className='left'>
              <h3>OrganizeU: online task management system</h3>
              <div className='project-links'>
                <button>View site <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
                <button>Github <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
              </div>
            </div>
            <div className='right'>
              {
                !showProjectDetails["box2"] ?
                <FontAwesomeIcon className='viewMoreIcon' icon={faAngleDown} onClick={() => handleClick("box2")} />
                : <FontAwesomeIcon className='viewMoreIcon' icon={faClose} onClick={() => handleClick("box2")} />
              }
            </div>
          </div>
          {
            //conditional rendering when state is true.. else don't render div
            showProjectDetails["box2"] && 
              <div className="projectBody">
                <div className="left">
                  <div className='img-container'>
                    <img src={cardImg} alt="projectImg"/>
                  </div>
                </div>
                <div className="right">
                  <div className='tech-stack'>
                    <h2>Tech Stack</h2>  
                    <button>html</button>
                    <button>css</button>
                    <button>Javascript</button>
                    <button>php</button>
                    <button>Mysql</button>
                  </div>
                  <hr />
                  <div className="description">
                    <h2>Description</h2>
                    <p>this is my perfect project bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eligendi!
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quidem!</p>
                  </div>
              </div>
          </div>
          }
        </div>
        <div className='myProject' data-aos="zoom-in" data-aos-duration="1500">
          <div className="projectHead">
            <div className='left'>
              <h3>OrganizeU: online task management system</h3>
              <div className='project-links'>
                <button>View site <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
                <button>Github <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
              </div>
            </div>
            <div className='right'>
              {
                !showProjectDetails["box3"] ?
                <FontAwesomeIcon className='viewMoreIcon' icon={faAngleDown} onClick={() => handleClick("box3")} />
                : <FontAwesomeIcon className='viewMoreIcon' icon={faClose} onClick={() => handleClick("box3")} />
              }
            </div>
          </div>
          {
            //conditional rendering when state is true.. else don't render div
            showProjectDetails["box3"] && 
              <div className="projectBody">
                <div className="left">
                  <div className='img-container'>
                    <img src={cardImg} alt="projectImg"/>
                  </div>
                </div>
                <div className="right">
                  <div className='tech-stack'>
                    <h2>Tech Stack</h2>  
                    <button>html</button>
                    <button>css</button>
                    <button>Javascript</button>
                    <button>php</button>
                    <button>Mysql</button>
                  </div>
                  <hr />
                  <div className="description">
                    <h2>Description</h2>
                    <p>this is my perfect project bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eligendi!
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quidem!</p>
                  </div>
              </div>
          </div>
          }
        </div>
      </div>
    </div>
  );
}
export default Projects;
