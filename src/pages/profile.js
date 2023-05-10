import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import pic1 from "../assets/profile-pic.png";
import pdf1 from "../assets/resume-example.pdf";
import "../styles/profile.css";


const Profile = () => {
  return (
      <section id="profile">
        <div className="section__pic-container">
          <img src={pic1} alt="Abdennour ZOUAZOU's profile picture" 
          />
        </div>
        <div className="section__text">
          <p>Hello, I'm</p>
          <h1>Abdennour ZOUAZOU</h1>
          <p className="p2">Software Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open(pdf1)}
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


