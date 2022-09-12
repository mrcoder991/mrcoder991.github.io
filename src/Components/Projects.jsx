import React from "react";
import { projectsData } from "../Data";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    // <!--***************** projects *******************************-->
      <section id="projects" className="projects flex-container snap-item">
            <h2 className="section-heading">Projects</h2>
            <div className="projects-container flex-container snaps-inline">
                {projectsData.reverse().map((item) => (
                    <ProjectCard
                    key={item.title}
                    demoLink={item.demoLink}
                    repoLink={item.repoLink}
                    description={item.description}
                    title={item.title}
                    backgroundImg={item.backgroundImg}
                    />
                ))}
            </div>
    </section>
  );
};

export default Projects;
