import React, { useState } from "react";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const openNav = () => {
    setMobileNav(!mobileNav);
    console.log(mobileNav);
  };

  const closeNav = () => {
    setMobileNav(false);
  };
  return (
    // <!-- ***************** navbar ********************** -->
    <header className="snap-item">
      <section className="navbar">
        <nav className="topnav" id="myTopnav">
          <a className="page-title" href="/">
            Uday Girhepunje
          </a>
          <ul className={`links ${mobileNav ? "active" : ""}`} id="links">
            <li>
              <a href="#about" id="main" onClick={closeNav}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" id="main" onClick={closeNav}>
                Projects
              </a>
            </li>
            <li>
              <a href="#experince" id="main" onClick={closeNav}>
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" id="main" onClick={closeNav}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" id="main" onClick={closeNav}>
                Contact
              </a>
            </li>
          </ul>
          <div
            className={`hamburger ${mobileNav ? "active" : ""}`}
            id="hamburger"
            onClick={openNav}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
