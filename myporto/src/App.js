import React from 'react';

// components
import Header from './components/Header';
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import TechMatrix from './components/TechMatrix';        // NEW
import Work from './components/Work';
import DownloadCenter from './components/DownloadCenter'; // NEW
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import ScrollToTop from './components/ScrollToTop';
import AvailabilityBar from './components/AvailabilityBar'; // NEW
import Certifications from './components/Certifications';
import SocialProof from './components/SocialProof';
import Footer from "./components/Footer";


import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      {/* NEW: availability banner at the very top */}
      <AvailabilityBar />

      <Header />
      <Banner />
      <Nav />
      <About />
      <TechMatrix />
      
      <Experience />
      <Work />
     
      {/* <SocialProof />        NEW */}
      <Services />

      {/* NEW: Tech stack matrix */}
      

     

      {/* NEW: Download center (place wherever you prefer) */}
      {/* <DownloadCenter /> */}

      <SocialLinks />
      <Certifications />     {/* NEW */}
     

      {/* Keep your existing Testimonials layout */}
      <div className='w-5/5 mx-auto md:h-full'>
        <motion.div style={{ marginLeft: '190px' }}>
          <Testimonials />
        </motion.div>
      </div>
      <Contact />

      <Footer />
      <ScrollToTop />


    </div>
  );
};

export default App;
