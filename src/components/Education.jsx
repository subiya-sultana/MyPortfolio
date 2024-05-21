import React from 'react'
import '../styles/Education.css';

export default function Education() {
  return (
    <div className='education section' id='education'>
      <pre className='sub-title' data-aos="fade-up">&lt; Education /&gt;</pre>
      <h1 className='glitch title' data-aos="fade-up" data-aos-duration="1500">WHAT I STUDY?</h1>
      <div className='timeline' >
        <div className='container left-container' >
          <span className='circle'></span>
          <div className='text-box box-left' data-aos="fade-up" data-aos-duration="1500">
            <small>2023 - present </small>
            <h1>Engineering</h1>
            <p className='text-style'>
            <strong>College:</strong> ISL Engineering college in Hyderabad, Telangana.<br/> 
            <strong>Course:</strong> Artificial intelligence and data science. <br/> 
            <strong>Affiliation:</strong> Osmania University. <br/> 
            </p>
            <span className='left-container-arrow'></span>
          </div>
        </div>
        <div className='container right-container'>
          <span className='circle'></span>
          <div className='text-box box-right' data-aos="fade-up" data-aos-duration="1500">
          <small>2020 - 2023 (3 years)</small>
            <h1>Diploma</h1>
            <p className='text-style'>
            <strong>College:</strong> Quli Qutub Shah Government Polytechnic in Hyderabad, Telangana.<br/> 
            <strong>Course:</strong> Computer science<br/> 
            <strong>Board:</strong> SBTET <br/> 
            <strong>GPA:</strong> 9.32%<br/> 
            </p>
            <span className='right-container-arrow'></span>
          </div>
        </div>
        <div className='container left-container'>
          <span className='circle'></span>
          <div className='text-box box-left' data-aos="fade-up" data-aos-duration="1500" >
          <small>June 2022 - November 2022 (6 months)</small>
            <h1>Industrial Training</h1>
            <p className='text-style'>
            <strong>Company:</strong> Industech Solutions in koti, Hyderabad, Telangana.<br/> 
            <strong>Course:</strong> Application development <br/> 
            <strong>Worked on:</strong> Full stack website using php.<br/> 
            </p>
            <span className='left-container-arrow'></span>
          </div>
        </div>
        <div className='container right-container'>
          <span className='circle'></span>
          <div className='text-box box-right' data-aos="fade-up" data-aos-duration="1500">
          <small>2019 - 2020 (Passed year)</small>
            <h1>High School</h1>
            <p className='text-style'>
            <strong>School:</strong> Adams High School in Hyderabad, Telangana.<br/> 
            <strong>Board:</strong> SSC <br/> 
            <strong>GPA:</strong> 9.2%<br/> 
            </p>
            <span className='right-container-arrow'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
