import { useState } from 'react';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');

  const handleNavigationClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <main>
      <header className="header">
        <h1>Developer Portfolio</h1>
        <nav className="navigation">
          <ul>
            <li className={currentSection === 'About Me' ? 'active' : ''}>
              <a href="#about" onClick={() => handleNavigationClick('About Me')}>
                About Me
              </a>
            </li>
            <li className={currentSection === 'Portfolio' ? 'active' : ''}>
              <a href="#portfolio" onClick={() => handleNavigationClick('Portfolio')}>
                Portfolio
              </a>
            </li>
            <li className={currentSection === 'Contact' ? 'active' : ''}>
              <a href="#contact" onClick={() => handleNavigationClick('Contact')}>
                Contact
              </a>
            </li>
            <li className={currentSection === 'Resume' ? 'active' : ''}>
              <a href="#resume" onClick={() => handleNavigationClick('Resume')}>
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {currentSection === 'About Me' && (
        <section className="about-me" id="about">
          <header className="about-me-title">About Me</header>
          <div className="avatar-container">
            <img src="./assets/images/avatar.jpg" alt="Tyler Avatar" className="avatar" />
          </div>
          <p>My name is Tyler Wright. I am a 23 year-old Canadian studying computer programming.</p>
        </section>
      )}
      {currentSection === 'Portfolio' && (
        <section className="portfolio" id="portfolio">
          <header className="portfolio-title">Portfolio</header>
          <div className="image-container">
            <img src="./assets/images/work1.jpg" alt="work1" className="image" />
            <img src="./assets/images/work2.jpg" alt="work2" className="image" />
            <img src="./assets/images/work3.jpg" alt="work3" className="image" />
          </div>
        </section>
      )}
      {currentSection === 'Contact' && (
        <section className="contact" id="contact">
          <header className="contact-title">Contact Me</header>
        </section>
      )}
      {currentSection === 'Resume' && (
        <section className="resume" id="resume">
          <header className="resume-title">Resume</header>
        </section>
      )}
      <footer className="footer">
        <ul>
          <li><a href="https://github.com/orosunn">GitHub</a></li>
        </ul>
      </footer>
    </main>
  );
}

export default App;