import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/ScrollToTop';
import Foot from './components/Foot';
import SocialLinks from './components/SocialLinks';

import Testimonials from './components/Testimonials';
import LineGradient from "./components/LineGradient";
import { motion } from "framer-motion";
import ScrollToTop from './components/ScrollToTop';
import Experience from './components/Experience';


const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      
      <Header />
      <Banner />
      <Nav />
      <About />
      <Experience/>

      <Services />
      <Work />
      <SocialLinks />

      <Contact />
      <div className="w-5/5 mx-auto md:h-full">
  <motion.div style={{ marginLeft: "190px" }}>
    <Testimonials />
  </motion.div>
</div>

         <ScrollToTop/>
         {/* <Foot/> */}
         
         
    </div>
  );
};

export default App;
