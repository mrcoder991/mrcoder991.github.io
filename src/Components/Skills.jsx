import React from 'react'

const Skills = () => {
  return (
    // <!-- ********************  skills ************************ -->
        <section className="flex-container skills snap-item" id="skills">
            <h2 className="section-heading">Skills</h2>
            <div className="skills-container flex-container">
                {/* <!-- skill 1 --> */}
                <div className="skill-card">
                    <a href="#"><i className="fab fa-python"></i></a>
                    <p>Python</p>
                </div>
                {/* <!-- skill 2 --> */}
                <div className="skill-card">
                    <a href="#"><i className="fab fa-html5"></i></a>
                    <p>HTML5</p>
                </div>
                {/* <!-- skill 3 --> */}
                <div className="skill-card">
                    <a href="#"><i className="fab fa-css3"></i></a>
                    <p>CSS3</p>
                </div>
                {/* <!-- skill 4 --> */}
                <div className="skill-card">
                    <a href="#"><i className="fab fa-js"></i></a>
                    <p>JavaScript</p>
                </div>
                {/* <!-- skill 5 --> */}
                <div className="skill-card">
                    <a href="#"><i className="fab fa-react"></i></a>
                    <p>React</p>
                </div>
                {/* <!-- skill 6 --> */}
                <div className="skill-card">
                    <a href="#"><i className="fab fa-git"></i></a>
                    <p>Git & GitHub</p>
                </div>
                {/* <!-- skill 7 --> */}
                <div className="skill-card">
                    <a href="#"><i className="fas fa-database"></i></a>
                    <p>MySQL, MongoDB</p>
                </div>
                {/* <!-- skill 8 --> */}
                <div className="skill-card">
                    <a href="#"><i className="fab fa-figma"></i></a>
                    <p>Figma</p>
                </div>
            </div>
        </section>
  )
}

export default Skills