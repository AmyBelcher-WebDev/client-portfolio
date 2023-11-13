import React from 'react';



const Contact = () => {
  return (
    
    <div>
      
      <h2 className= "contactMe">Contact Me</h2>
      <section id="contact">
        <div className= "contactHeading">
          Contact Details          
        </div>
        <div className="social-icons">
          <a href="https://github.com/AmyBelcher-WebDev" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
            <p>GitHub</p>
          </a>
          <a href="https://www.linkedin.com/in/amy-belcher" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
            <p>LinkedIn</p>
          </a>
          <a href="mailto:amylei7@hotmail.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-envelope-at-fill"></i>
            <p>Email</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;