import React from 'react';
import ProjectItem from "../components/ProjectItem";
// importing images in react: import (chooseAName) from "path"
// use looping function so below two examples are redundant when helpers is incoporated
// import pic from "../assets/proj1.png";
// import Proj2 from "../assets/proj2.webp"
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1> My Projects </h1>
      <div className="projectList">  
        {ProjectList.map((project, index) => {
          return <ProjectItem id={index} name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
}

export default Projects