import React from 'react';
import '../styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faWordpress, faSass, faPhp, faLaravel, faNodeJs, faGitAlt, faGithub, faJava, faPython  } from '@fortawesome/free-brands-svg-icons'
import { faC, faCode, faDatabase, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  // function to switch tabs
  function switchTab(event, tabName) {
    const tab = document.getElementsByClassName("tab");
    const tabBody = document.getElementsByClassName("tab-body");
    for (let i = 0; i < tab.length; i++) {
      tab[i].className = tab[i].className.replace(" selected-tab", " ");
    }
    for (let i = 0; i < tabBody.length; i++) {
      tabBody[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " selected-tab";
  }
  return (
    <div className='skills section' id='skills'>
      <pre className='sub-title' data-aos="fade-up" >&lt; Skills /&gt;</pre>
      <h1 className='glitch title' data-aos="fade-up" data-aos-duration="1500">WHAT I USE?</h1>
      <div className='tab-header' data-aos="fade-up" data-aos-duration="2000">
        <div className='tab selected-tab' onClick={event => switchTab(event, 'frontend-body')}> Frontend </div>
        <div className='tab' onClick={event => switchTab(event, 'backend-body')}> Backend </div>
        <div className='tab' onClick={event => switchTab(event, 'other-body')}> Other </div>
      </div>
      <div className='container' data-aos="fade-up" data-aos-duration="2000">
        <div className='tab-body' id='frontend-body'>
          <p>List of frontend technologies which I am familiar with:  </p>
          <div className='skills-container'>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faHtml5} />
              <p>HTML5</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faCss3Alt} />
              <p>CSS3</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faJs} />
              <p>JS</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faSass} />
              <p>Sass</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faBootstrap} />
              <p>Bootstrap</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faCode} />
              <p>Tailwind</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faCode} />
              <p>JQuery</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faReact} />
              <p>React.js</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faJs} />
              <p>Next.Js</p>
            </div>
          </div>
        </div>
        <div className='tab-body' id='backend-body'>
          <p>List of backend technologies which I am familiar with:</p>
          <div className='skills-container'>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faPhp} />
              <p>PHP</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faLaravel} />
              <p>Laravel</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faNodeJs} />
              <p>Node.Js</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faJs} />
              <p>Express.Js</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faDatabase} />
              <p>Mysql</p>
            </div>
            <div className='skill'>
              <FontAwesomeIcon className='icon' icon={faDatabase} />
              <p>MongoDB</p>
            </div>
          </div>
        </div>
        <div className='tab-body' id='other-body'>
          <p>Other tools and technologies which I am familiar with:</p>
          <div className='skills-container'>
              <div className='skill'>
                <FontAwesomeIcon className='icon' icon={faWordpress} />
                <p>Wordpress</p>
              </div>
              <div className='skill'>
                <FontAwesomeIcon className='icon' icon={faGitAlt} />
                <p>Git</p>
              </div>
              <div className='skill'>
                <FontAwesomeIcon className='icon' icon={faGithub} />
                <p>Github</p>
              </div>
              <div className='skill'>
                <FontAwesomeIcon className='icon' icon={faLaptopCode} />
                <p>VS code</p>
              </div>
              <div className='skill'>
                <FontAwesomeIcon className='icon' icon={faJava} />
                <p>Java</p>
              </div>
              <div className='skill'>
                <FontAwesomeIcon className='icon' icon={faPython} />
                <p>Python</p>
              </div>
              <div className='skill'>
                <FontAwesomeIcon className='icon' icon={faC} />
                <p>C/C++</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
