import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* Map over the projects array and render ProjectItem components */}
        {projects.map((project, index) => (
          <ProjectItem
            key={index} // Use a unique key for each ProjectItem
            name={project.name}
            about={project.about}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
