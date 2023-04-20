import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


const Profile = () => {
  return (
      <section id="profile">
        <div className="section__pic-container">
          <img src="./assets/profile-pic.png" alt="John Doe profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Abdennour ZOUAZOU</h1>
          <p className="section__text__p2">Full Stack Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open('./assets/resume-example.pdf')}
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => (window.location.href = './#contact')}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <LinkedInIcon 
            className="icon"
            style={{ fontSize: '40px' }}
            onClick={() => (window.location.href = 'https://linkedin.com/in/zouazou')}
            />
            <GitHubIcon 
            className="icon"
            style={{ fontSize: '40px' }}
            onClick={() => (window.location.href = 'https://github.com/zouazo')}
            />
            <EmailIcon 
            className="icon"
            style={{ fontSize: '40px' }}
            onClick={() => window.location.href = 'mailto:zouazouabdennour@gmail.com'}
            />
          
          </div>
        </div>
      </section>
  );
};

export default Profile;

