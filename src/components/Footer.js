import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia"> 
        <a href="https://www.linkedin.com/in/philipxlee/" target="_blank">
            <LinkedInIcon /> 
        </a>
        <a href="https://github.com/philipxlee" target="_blank">
            <GitHubIcon />
        </a>
        <a href="mailto:philip.lee@duke.edu">
            <EmailIcon />
        </a>
        </div>
            <p> &copy; Philip Lee 2022</p>
        
    </div>
  )
}

export default Footer