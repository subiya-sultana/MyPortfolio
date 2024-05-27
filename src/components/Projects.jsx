import React from 'react';
import '../styles/Projects.css';
import Project from './Project';
import projectImg from '../assets/projectImg.png';
import caseConvertorImage from '../assets/CaseConvertorImage.png'
import jokeGeneratorImage from '../assets/JokeGeneratorImage.png'

const Projects = () => {
  // const projectDataFormat = [
  //   {
  //     id: "box1",
  //     title: "Project Title",
  //     siteLink: "#", // Provide link or null
  //     githubLink: "#", // Provide link or null
  //     imgSrc: projectImg, // Provide Image 
  //     techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"], 
  //     description: "Write project description here"
  //   }
  // ];
  return (
    <div className='projects section' id="projects">
      <pre className="sub-title" data-aos="fade-up"> &lt; Projects /&gt; </pre>
      <h1 className="glitch title" data-aos="fade-up" data-aos-duration="1500">WHAT I BUILT?</h1>
      <div className="project-container">
        {/* {projectDataFormat.map(project => (
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
        ))} */}

        {/* my projects */}
        {/* <Project
          key="box1"
          id="box1"
          title="MERN BLOGING WEBSITE"
          siteLink="#"
          githubLink="https://github.com/subiya-sultana/"
          imgSrc={projectImg}
          techStack={["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js"]}
          description="blogging website using mern stack"
        /> */}
        <Project
          key="box1"
          id="box1"
          title="CASE CONVERTOR"
          siteLink="https://subiya-sultana.github.io/case-converter/"
          githubLink="https://github.com/subiya-sultana/case-converter"
          imgSrc={caseConvertorImage}
          techStack={["HTML", "CSS", "bootstrap", "JavaScript", "React.js"]}
          description="Case Converter: convert text between lower case, upper case, capitalized, or alternating case easily. Instead of retyping your message having caps lock enabled and disabled again and again, just copy and paste your text and set the case transform you need. And many more features."
        />
        <Project
          key="box2"
          id="box2"
          title="ORGANIZEU: ONLINE TASK MANAGEMENT SYSTEM"
          // siteLink="#"
          githubLink="https://github.com/subiya-sultana/TaskManagementSystem"
          imgSrc={projectImg}
          techStack={["PHP", "MySQL", "HTML", "CSS", "JavaScript", "jQuery"]}
          description="A Task Management Website with features such as user authentication (sign-up, sign-in), user profile management (updating and deleting profile), form validations, CRUD operations, responsive design, and comprehensive task management (creating, updating, deleting, scheduling, and filtering tasks) etc..."
        />
        <Project
          key="box3"
          id="box3"
          title="RANDOM JOKE GENERATOR"
          siteLink="https://subiya-sultana.github.io/Joke-Generator/"
          githubLink="https://github.com/subiya-sultana/Joke-Generator"
          imgSrc={jokeGeneratorImage}
          techStack={["React.js", "CSS", "HTML"]}
          description="simple react app to generate random jokes and programming jokes using joke API."
        />
        <Project
          key="box4"
          id="box4"
          title="STUDENT DATABASE MANAGEMENT SYSTEM"
          // siteLink="https://subiya-sultana.github.io/Joke-Generator/"
          githubLink="https://github.com/subiya-sultana/StudentDBMS"
          imgSrc={projectImg}
          techStack={["jQuery", "JavaScript", "Bootstrap", "CSS", "HTML"]}
          description="Designed frontend for student database management website, created home page, register page, login page, services page, etc."
        />
      </div>
    </div>
  );
}
export default Projects;
