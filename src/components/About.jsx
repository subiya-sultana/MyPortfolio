import React from "react";
import '../styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const readMore = () => {
    var dots = document.getElementById("dots");
    var moreText = document.querySelectorAll(".moreText");
    var readMore = document.getElementById("readMore");
    var readLess = document.getElementById("readLess");

    if (dots.style.display === "none"){
      dots.style.display = "inline";
      readMore.style.display = "inline";
      readLess.style.display = "none";
      moreText.forEach((element) => {
        element.style.display = "none";
      });
    }
    else{
      dots.style.display = "none";
      readMore.style.display = "none";
      readLess.style.display = "inline";
      moreText.forEach((element) => {
        element.style.display = "block";
      });
    }
  }
  return (
    <div className="about section" id="about">
      <pre className="sub-title" data-aos="fade-up" > &lt; About /&gt; </pre>
      <h1 className="glitch title" data-aos="fade-up" data-aos-duration="1500">WHO I AM?</h1>
      <div className="about-content" data-aos="fade-up" data-aos-duration="2500">
        <p className="text-style">
          I am a second-year student pursuing a degree in Artificial Intelligence
          and Data Science with a passion for web development.
        </p>
        <p className="text-style">
          Back in 2020, my journey as a web developer began with simple curiosity,
          and it has since grown into a deep-seated love for building elegant and
          functional websites. Web development allows me to combine my creativity
          with my technical skills to bring ideas to life.
          {/* Although I am well-versed in using popular libraries and frameworks, my websites are
          primarily hard-coded using HTML5, CSS3, JavaScript, PHP, Node.js, and MySQL. */}
          <span id="dots">...</span>
        </p>
        <div className="moreText">
          <p className="text-style" >
            Whether it's designing user-friendly interfaces or writing clean and
            efficient code, I thrive on the challenge of creating digital
            experiences that are both visually appealing and highly functional. With
            a strong emphasis on progressive enhancement, I look for creative ways
            to push the boundaries of website code without compromising on browser
            support and performance. 
          </p>
          <p className="text-style">
            When I'm not immersed in the world of web development, you can find me exploring new hobbies, reading suspense/thriller novels, hanging out with my family and close friends, drawing, journaling, or rewatching movies I've already seen multiple times.
          </p>
        </div>
        <span className="ReadMoreBtn" id="readMore" onClick={readMore}>
          Read More
          <FontAwesomeIcon className='icon' icon={faAngleDown} />
        </span>
        <span className="ReadMoreBtn" id="readLess" onClick={readMore}>
          Read Less
          <FontAwesomeIcon className='icon' icon={faAngleUp} />
        </span>
      </div>
    </div>
  );
}
