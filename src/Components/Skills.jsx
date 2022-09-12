import React from 'react';
import { skillsData } from '../Data';

const Skills = () => {
  return (
    // <!-- ********************  skills ************************ -->
        <section className="flex-container skills snap-item" id="skills">
            <h2 className="section-heading">Skills</h2>
            <div className="skills-container flex-container">
              {skillsData.map((item) => (
                <div className="skill-card" key={item.title}>
                   <a href="/"><i className={item.icon}></i></a>
                   <p>{item.title}</p>
                </div> 
                ))}
            </div>
        </section>
  )
}

export default Skills