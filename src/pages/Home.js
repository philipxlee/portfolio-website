import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Home.css";
// import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home">
    <div className="about">
      <h2> Hi, I'm Philip.</h2>
      <div className="prompt"> 
        <p> 
         A student at Duke University majoring in Computer Science.
        </p>
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
    </div>
    <div className="skills"> 
    <h1>About Me</h1>
    <br />
    <br />
    <div style={{ maxWidth: "100%", textAlign: "center", margin: 20 }}>
      <span
            style={{
              maxWidth: "800px",
              fontSize: "1.0em",
              textAlign: "justify",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "24pt",
            }}
          >
            I'm a current sophomore at Duke University majoring in Computer Science. I am passionate about
            exploring new technologies and learning to best use them to build
            innovative projects.
            <br />
            <br />
            I transferred to Duke as a rising sophomore in Computer Science. Before Duke, I was
            a student at the University of California, Los Angeles (UCLA). There, I began my 
            Computer Science journey and gained a deeper appreciation for technology.
            <br />
            <br />
            When I'm not working on my own projects, you'll probably find me playing basketball, 
            watching Formula 1, or exploring the outdoors.
          </span>
          </div>
        <br />
      <h1>&nbsp; &nbsp; Technical Skills</h1> 
      <ol className="list">
        <li className="item">
          <h2>Languages</h2>
          <span>C++, Python, Java, JavaScript</span> 
        </li>
        <li className="item">
          <h2>Web</h2>
            <span>ReactJS, HTML, CSS</span>
        </li>
        <li className="item">
          <h2>Miscellaneous</h2>
            <span>Git, GitHub, LaTeX</span>
        </li>
      </ol>
      </div>
    </div>
  );
}

export default Home