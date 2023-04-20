import React from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


import { makeStyles } from '@mui/styles';
import { Code, People, Star } from '@mui/icons-material';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
});



const About = () => {

  const classes = useStyles();

  return (
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="./assets/about-pic.png"
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div >
              <div className="details-container">

                <div className={classes.root}>
                  <Star />
                  <Code /> 
                  <People />
                    <span>
                    I am an extremely motivated software developer with a passion for learning and creating. 
                    I am always looking for new opportunities to develop my skills and evolve professionally. 
                    As a full-stack developer with primary focus on Django + React, I have experience in developing 
                    complex applications with robust backends and dynamic user interfaces. 
                    I am a fan of collaborative work and believe that working with others is key to achieving great results. 
                    Whether I am working on a complex project or learning a new programming language, 
                    I approach every challenge with enthusiasm and a desire to learn. 
                    If you are looking for a dedicated and skilled software developer, 
                    I would love to hear from you!
                    </span>
                </div>

            </div>
            </div>

          </div>
        </div>

        <KeyboardDoubleArrowDownIcon
        className="icon arrow"
        style={{ fontSize: '40px' }}
        onClick={() => { window.location.href='./#experience' }}
        />
      </section>
  )
}

export default About;


