import React, { useState, useEffect, useRef} from 'react';
import Hero from './Comps/Hero.jsx';
import Navigation from './Comps/Navigation.jsx';
import About from './Comps/About.jsx';
import Resume from './Comps/Resume.jsx';
import Portfolio from './Comps/Portfolio.jsx';
import Contact from './Comps/Contact.jsx';
import Footer from './Comps/Footer.jsx';


const App = () => {
  const [backgroundChanged, setBackgroundChanged] = useState(false);
  const [isEasterEggModalOpen, setIsEasterEggModalOpen] = useState(false);
  const sequence = "1337";
  const currentInput = useRef("");

  useEffect(() => {
      const handleKeyDown = (e) => {
          currentInput.current += e.key; 
          if (currentInput.current.endsWith(sequence)) {
              setIsEasterEggModalOpen(true);
              currentInput.current = ""; 
          }
          setTimeout(() => currentInput.current = "", 5000);
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => window.removeEventListener('keydown', handleKeyDown);
  }, []); 

  const toggleBackground = () => setBackgroundChanged(!backgroundChanged);
  const closeModal = () => setIsEasterEggModalOpen(false);

  return (
      <div className={backgroundChanged ? 'changedBackground' : ''}>
          <Navigation toggleBackground={toggleBackground} />
          {isEasterEggModalOpen && (
              <div className="modal">
                  <div className="modal-content">
                      <span className="close" onClick={closeModal}>&times;</span>
                      <p>Du hitta den var inte så svårt</p>
                  </div>
              </div>
          )}
      <Hero />
      <About />
      <Resume />
      <Portfolio/>
      <Contact/>
      <Footer />
      {}
    </div>
  );
}

export default App;
