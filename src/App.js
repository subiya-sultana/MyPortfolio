import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  // Torch effect on mouse move event
  useEffect(() => {
    const handleMouseMove = (e) => {
      const torch = document.querySelector('.torch');
      if (torch) {
        torch.style.left = `${e.clientX}px`;
        torch.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className="App">
      <div className="torch"></div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>

    {/* add Experience component */}
    {/* add testimonial component */}
    {/* services component */}
    {/* add certificates component {What i Have achived?} */}

    {/* add logo */}
    {/* add loader component reference: https://dev.nazmul.co/ */}
    {/* mouse highlight effect ... reference: https://dunks1980.com/   */}
    {/* update resume */}

    {/* add toggle dark/light mode component */}
    {/* add text effect on my name which i have seen on insta that random words coming then actual words showing*/}
    {/* change color theme */}
    {/* Home page edit*/}
    {/* check responsiveness of all components and clean the code before finalizing  */}

    </div>
  );
}
export default App;
