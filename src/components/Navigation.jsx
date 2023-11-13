import { Link } from "react-router-dom"
import { Button, Container } from "react-bootstrap"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"



const Navigation = () => {
  return (
    <div>
    <Navbar bg="dark" variant= "dark" className= "navBar">
      <Navbar.brand as="h2"></Navbar.brand>
        
          <Button>
          <Link to="/">Home</Link>
          </Button>
          <Button>
          <Link to="/about">About</Link>
          </Button>
          <Button>
          <Link to="/portfolio">Portfolio</Link>
          </Button>
          <Button>
          <Link to="/resume">Resume</Link>
          </Button>
          <Button>
          <Link to="/contact">Contact</Link>
          </Button>
          
        </Navbar>
    </div>
  )
}

export default Navigation