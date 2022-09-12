import React from 'react';
import { experienceData } from '../Data';

const Experience = () => {
  return (
    // <!-- ******************** Experience ******************** -->
        <section className="experince snap-item" id="experince">
            <h2 className="section-heading">Experience</h2>
            <div className="experince-container">
              {experienceData.map((item) => (
                <div className="exp" key={item.title}>
                    <h5>{item.duration}</h5>
                    <h3>{item.title}</h3>
                    <h4>{item.role}</h4>
                    <p>{item.description}</p>
                </div>
                ))}
            </div>
        </section>
  )
}

export default Experience