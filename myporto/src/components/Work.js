import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import Img1 from '../assets/p4.png';
import Img2 from '../assets/p5.jpg';
import Img3 from '../assets/e22.jpg';


const Work = () => {
  return (
  <section className='section' id='work'>
<div className="container mx-auto">
<div className='flex flex-col lg:flex-row gap-x-10'>

<div className='flex-1 flex flex-col gap-y-4 mb-10 lg:mb-0'>
  <div>
    <h2 className='h2 leading-tight text-accent' style={{ color: '#3498db' }}>Discover <br/>
    My Latest Work.
    </h2>
    <div>
    <p className='text-lg mb-8' >
      Delve into my recent work — a fusion of innovation and technical excellence. From spearheading Java-based solutions at Sharonat International to creating an enterprise-level billing system, each project is a testament to my dedication to delivering robust and impactful software.
    </p>
    <p className='text-lg mb-8' >
      Explore key features such as AWS integration, cutting-edge CI/CD pipelines, and Test-Driven Development in projects like the Event Management Platform and Billing System for City. These showcase my proficiency in Full Stack Java Development, UI/UX Design, and more.
    </p>
    
   
</div>

    {/* <button className='btn btn-sm'>View all projects</button> */}
  </div>

 <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
  <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
    
  </div>
  
  <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
    <span className='text-gradient' style={{ color: '#3498db' }}> Java  Developer</span>
    </div>
  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
    <span className='text-3x1 text-white' >E-Commerce</span>
    </div>

 </div>
</div>

<motion.div 
variants={fadeIn('left',0.2)}
initial='hidden'
whileInView={'show'}
viewport={{once:false,amount:0.3}}
className='flex-1 flex flex-col gap-y-1o mb-10 '>
<div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
  <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
  <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
    <span className='text-gradient' style={{ color: '#3498db' }}> Java developer||React</span></div>
  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
    <span className='text-3x1 text-white' >Billing System for City</span></div>

    

 </div>
 <br></br>
 
<div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>
  <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
  <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
    <span className='text-gradient'style={{ color: '#3498db' }}> Java Full-Stack Developer</span></div>
  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
    <span className='text-3x1 text-white'>Event Management</span></div>

 </div>
 
</motion.div>

</div>
</div>
</section>
  );
};

export default Work;