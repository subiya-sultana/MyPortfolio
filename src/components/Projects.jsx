import React from 'react';
import '../styles/Projects.css';
import Project from './Project';
import cardImg from "../assets/logo inspiration.PNG";

const Projects = () => {
  const projectData = [
    {
      id: "box1",
      title: "OrganizeU: online task management system",
      siteLink: "#", // Provide link or null
      githubLink: "#", // Provide link or null
      imgSrc: cardImg,
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      description: "This is my perfect project bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quidem!"
    },
    {
      id: "box2",
      title: "Another Project",
      siteLink: null, // No link provided
      githubLink: "#",
      imgSrc: cardImg,
      techStack: ["HTML", "CSS", "JavaScript"],
      description: "Another project description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quidem!"
    },
    {
      id: "box3",
      title: "Yet Another Project",
      siteLink: "#",
      githubLink: null, // No link provided
      imgSrc: cardImg,
      techStack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      description: "Yet another project description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quidem!"
    }
  ];
  return (
    <div className='projects section' id="projects">
      <pre className="sub-title" data-aos="fade-up"> &lt; Projects /&gt; </pre>
      <h1 className="glitch title" data-aos="fade-up" data-aos-duration="1500">WHAT I BUILT?</h1>
      <div className="project-container">
        {/* <div className='myProject' data-aos="zoom-in" data-aos-duration="1500">
          <div className="projectHead">
            <div className='left'>
              <h3>OrganizeU: online task management system</h3>
              <div className='project-links'>
                <a href="https://subiya-sultana.github.io/MyPortfolio/" target='_blank' rel="noopener noreferrer">
                  <button>View site <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
                </a>
                <a href="https://github.com/subiya-sultana" target='_blank' rel="noopener noreferrer">
                  <button>Github <FontAwesomeIcon className='icon' icon={faArrowRight} /></button>
                </a>
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
        </div> */}
        {projectData.map(project => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            siteLink={project.siteLink}
            githubLink={project.githubLink}
            imgSrc={project.imgSrc}
            techStack={project.techStack}
            description={project.description}
          />
          
        ))}
        <Project
          key="box5"
          id="box5"
          title="OrganizeU: online task management system"
          siteLink="#"
          githubLink="#"
          imgSrc={cardImg}
          techStack={["HTML", "CSS", "JavaScript", "PHP", "MySQL"]}
          description="This is my perfect project bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quidem!"
        />

      </div>
    </div>
  );
}
export default Projects;
