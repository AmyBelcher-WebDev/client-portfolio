import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className= "homePage">
      
      
        <Navbar className= "navBar">
          <Nav>
          <button>
          <Link to="/">Home</Link>
          </button>
          <button>
          <Link to="/about">About</Link>
          </button>
          <button>
          <Link to="/portfolio">Portfolio</Link>
          </button>
          <button>
          <Link to="/resume">Resume</Link>
          </button>
          <button>
          <Link to="/contact">Contact</Link>
          </button>
          </Nav>
        </Navbar>
    
      <section>
        <h1 className= "homeTitle">Amy Belcher's Portfolio</h1>
        <h3 className="homeDetails">I'm a full-stack web developer Proficient in Javascript, HTML, CSS, MERN, GitHub, Jira, Clickup. I'm constantly keeping the mind sharp in
            researching, learning, and practicing new concepts and skills. Seeking work that will put my strong analytical
            and problem-solving skills to use. I look forward to learning something new every day!</h3>
            </section>
    <div className= "portfolioSection">
      <h2 className= "portfolioHeader">
      <Link to="/portfolio">My Portfolio</Link></h2>
      </div>
    </div>
  );
};

export default Home;