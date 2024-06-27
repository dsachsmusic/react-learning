  import React from 'react';
  import './App.css'; // Import CSS
  import Header from './Header';
  import About from './About';
  import Skills from './Skills';
  import Projects from './Projects';
  import Contact from './Contact';
  import Footer from './Footer';

  // App component combining all sections
  const App = () => {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="left-column">
            {/* Navigation or any other content */}
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="main-column">
            <About />
            <Skills />
            <Projects />
            {/* Add new sections here */}
          </div>
          <div className="contact-column">
            <Contact />
            {/* Add new sections here */}
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  export default App;
