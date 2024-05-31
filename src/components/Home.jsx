import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import homeBg from '../assets/homeBg.mp4';
import bgPosterImg from "../assets/bgPosterImg.PNG";
import Preloader from './PreLoader';
// import resume from "../assets/SubiyaSultanaResume.pdf"
import resume from "../assets/Subiya Sultana Resume.pdf"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling when the preloader is active
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to reset overflow style
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  const handleVideoLoaded = () => {
    // Showing preloader until video is loaded
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };
  return (
    <>
    {
      isLoading && <Preloader />
    }    
    <header className="App-header section" id='home'>
        <video autoPlay muted loop src={homeBg} poster={bgPosterImg} type="video/mp4" onLoadedData={handleVideoLoaded}/>
        <div className="overlay"></div>
        <div className="home-content" >
            <div className='home-left' data-aos="fade-down-right" data-aos-duration="2000"> 
              <div className='intro'>
                <h1 >Hello, I Am <span  className='glitch'>Subiya Sultana.</span></h1>
                  <h1 data-aos="fade-left" data-aos-duration="2000">And I Build Interactive Websites.</h1>
              </div>
              <div className='viewWork'>
                <a href='#projects'>View My Work <FontAwesomeIcon className='icon' icon={faAngleDown} /></a>
              </div>
            </div>
            <div className='home-right'>
         
              <button data-aos="flip-left" data-aos-duration="2000"><a href={resume} download>Download Resume 
                <FontAwesomeIcon className='icon' icon={faArrowRight} /></a></button>
              <button data-aos="flip-left" data-aos-duration="2000"><a href='#about'>Explore About Me 
                <FontAwesomeIcon className='icon' icon={faArrowRight} /></a></button>
            
            </div>
        </div>
        
      </header>
    </>
  )
}
