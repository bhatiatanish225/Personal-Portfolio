import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  // Function to check if the device is a mobile device
  const isMobileDevice = () => {
    return window.innerWidth <= 768; // You can adjust the threshold as per your requirements
  };

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg bg-cover bg bg-no-repeat bg bg-center'>
          <Navbar />
          <Hero />
        </div>

        <About />
        {isMobileDevice() ? null : <Tech />} {/* Render Tech component only if not a mobile device */}
        {isMobileDevice() ? null : <Works />} {/* Render Works component only if not a mobile device */}

        <div className='relative z-0'>
          <Contact />
          {isMobileDevice() ? null : <StarsCanvas />} {/* Render StarsCanvas component only if not a mobile device */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
