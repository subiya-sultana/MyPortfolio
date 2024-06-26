import React from 'react';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='contact section' id='contact'>
      <div className='arrow'> </div>
      <pre className='sub-title' data-aos="fade-up" >&lt; Contact /&gt;</pre>
      <h1 className='glitch title' data-aos="fade-up" data-aos-duration="1500">WAYS TO CONTACT ME?</h1>
      <p className="text-style" data-aos="fade-up" data-aos-duration="1500">
        I'm eager to connect with fellow developers,
        designers, and anyone who shares a passion for technology and
        creativity. Let's collaborate, learn, and build a better digital world
        together.
      </p>
      <div className='container' data-aos="flip-up" data-aos-duration="1500">
        <div className='left-container'>
          <a href="mailto:itsmesubiya@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='icon' icon={faEnvelope} />
          </a>
          <a href="tel:+917995749118">
            <FontAwesomeIcon className='icon' icon={faPhoneAlt} />
          </a>
          <a href="https://github.com/subiya-sultana" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className='icon' icon={faGithub} />
          </a>
          <a href="https://wa.me/+917995749118" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className='icon' id="faWhatsapp" icon={faWhatsapp} />
          </a>
          <a href="https://www.linkedin.com/in/subiya-sultana-00512630a/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className='icon' icon={faLinkedin} />
          </a>
        </div>
        <div className='right-container'>
          <form action="https://formspree.io/f/mdorpljg" method="post" onsubmit="showModal(); return false;">
            <input type="text" id="name" name="name" required placeholder='Enter Full Name'/>
            <input type="email" id="email" name="email" required placeholder='Your Email'/>
            <textarea id="message" name="message" required placeholder='Type your message here.....' rows="8" ></textarea>
            <input id="submit" type="submit" value="Send Message!"></input>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
