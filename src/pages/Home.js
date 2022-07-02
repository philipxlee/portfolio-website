import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
    <div className="about">
      <h2> Hi, I'm Philip.</h2>
      <div className="prompt"> 
        <p> 
         A student at Duke University majoring in Computer Science.
        </p>
          <LinkedInIcon /> 
          <GitHubIcon />
          <EmailIcon />
      </div>
    </div>
    <div className="skills"> </div>
      <h1>&nbsp; &nbsp; Technical Skills</h1> 
      <ol className="list">
        <li className="item">
          <h2>Languages</h2>
          <span> 
            C++, Python, Java
          </span>
        </li>
        <li className="item">
          <h2>Web</h2>
          <span> 
            ReactJS, HTML, CSS
          </span>
        </li>
        <li className="item">
          <h2>Miscellaneous</h2>
          <span> 
            LaTeX, Git, GitHub
          </span>
        </li>
      </ol>
    
    
    </div>

  )
}

export default Home