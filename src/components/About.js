import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const readMore = () => {
    var dots = document.getElementById("dots");
    var moreText = document.querySelectorAll(".moreText");
    var readMore = document.getElementById("readMore");
    var readLess = document.getElementById("readLess");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      readMore.style.display = "inline";
      readLess.style.display = "none";
      moreText.forEach((element) => {
        element.style.display = "none";
      });
    } else {
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
      <pre className="sub-title"> &lt; About /&gt; </pre>
      <h1 className="glitch title">WHO I AM?</h1>
      <div className="about-content">
        <p className="text-style">
          I am a second-year student pursuing a degree in Artificial Intelligence
          and Data Science with a passion for web development.
        </p>
        <p className="text-style">
          Back in 2020, my journey as a web developer began with simple curiosity,
          and it has since grown into a deep-seated love for building elegant and
          functional websites. Web development allows me to combine my creativity
          with my technical skills to bring ideas to life. Although I am
          well-versed in using popular libraries and frameworks, my websites are
          primarily hard-coded using HTML5, CSS3, JavaScript, PHP, and MySQL.<span id="dots">...</span>
        </p>

        <div className="moreText">
          
          <p className="text-style" >
            Whether it's designing user-friendly interfaces or writing clean and
            efficient code, I thrive on the challenge of creating digital
            experiences that are both visually appealing and highly functional. With
            a strong emphasis on 'progressive enhancement', I look for creative ways
            to push the boundaries of website code without compromising on browser
            support and performance. 
          </p>
          {/* <p className="text-style">
            When I'm not immersed in the world of web development, you can find me
            exploring new hobbies, reading suspense/thriller novels, hanging out
            with my family and close friends, drawing, journaling, or watching the
            John Wick movie series for the 50th time.
          </p> */}
          <p className="text-style">
            I'm eager to connect with fellow developers,
            designers, and anyone who shares a passion for technology and
            creativity. Let's collaborate, learn, and build a better digital world
            together.
          </p>
        </div>
        <span className="ReadMoreBtn" id="readMore" onClick={readMore}>Read More<FontAwesomeIcon className='icon' icon={faAngleDown} /></span>
        <span className="ReadMoreBtn" id="readLess" onClick={readMore}>Read Less<FontAwesomeIcon className='icon' icon={faAngleUp} /></span>

      </div>

    </div>
  );
}
