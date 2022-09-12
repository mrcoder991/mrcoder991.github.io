import React from "react";

const ProjectCard = ({demoLink, repoLink, description, title, backgroundImg}) => {
  return (
    <div className="project-card" style={{backgroundImage: `url(${backgroundImg})`}}>
      <div className="project-details">
        <h3>{title}</h3>
        <p>
          {description}
        </p>
        <a
          href={repoLink}
          title="GitHub Repo Link"
          target="blank"
        >
          <i className="fa fa-github"></i> {demoLink ? '' : 'Github Repo'}
        </a>
        <a style={{display: demoLink ? 'inline' : 'none'}}
          href={demoLink}
          title="View Project Demo"
          target="blank"
        >
          View Project <i className="fa fa-external-link"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
