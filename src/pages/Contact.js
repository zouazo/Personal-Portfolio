import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
        <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <EmailIcon 
            className="icon contact-icon email-icon"
            style={{ fontSize: '30px' }}
            />
            <p><a href="mailto:zouazouabdennour@gmail.com">zouazouabdennour@gmail.com</a></p>
          </div>
          <div className="contact-info-container">
            <LinkedInIcon 
            className="icon contact-icon"
            style={{ fontSize: '30px' }}
            />
            <p><a href="https://www.linkedin.com/in/zouazou">LinkedIn</a></p>
          </div>
        </div>
      </section>
  )
}

export default Contact
