import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';


const About = () => {
  const [ref, inView]=useInView({
    threshold:0.5,
  });
  return (<section className='section' id='about' ref={ref}>
    <div className="container mx-auto">

    <div  className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
    <motion.div 
    variants={fadeIn('right',0.3)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.3}}
    className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
      </motion.div>
    <motion.div 
     variants={fadeIn('left',0.5)}
     initial='hidden'
     whileInView={'show'}
     viewport={{once:false,amount:0.3}}
     className='flex-1'>
<h2 className='h2 text-accent' style={{ color: '#3498db' }}>About me</h2>
      <h3 classname='h3 mb-4'>
      Experienced Java Developer with a proven track record of delivering robust software solutions and spearheading successful data pipeline migrations to the AWS Cloud. Equipped with extensive expertise in Java, Spring Boot, Microservices, REST API, and J2EE, complemented by adeptness in frontend development using React, JavaScript, HTML, and CSS. An Agile practitioner who excels in collaborative environments, driving efficiency and innovation through agile methodologies </h3>
      {/* <p className='mb-6'>
      If you cannot provide a valid href, but still need the element to resemble a link, use a button and change
      </p > */}
      <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
      <div>
          <div className='text-[40px] font-teritary text-gradient mb-2'style={{ color: '#3498db' }}>
            
            {inView?<CountUp start={0} end={5} duration={3}/> :null}
            +
          </div>
          <div className='font-primary text-sm tracking-[2px]'style={{ color: '#3498db' }}>
            Years of <br/>
            Experience

          </div>
          </div>
        <div>
          <div className='text-[40px] font-teritary text-gradient mb-2'style={{ color: '#3498db' }}>
            
            {inView?<CountUp start={0} end={4} duration={3}/> :null}
            +
          </div>
          <div className='font-primary text-sm tracking-[2px] 'style={{ color: '#3498db' }}>
            Projects  <br/>
            Completed

          </div>
          </div>
          <div>
          {/* <div className='text-[40px] font-teritary text-gradient mb-2'>
            
            {inView?<CountUp start={0} end={13} duration={3}/> :null}
            k+
          </div> */}
          {/* <div className='font-primary text-sm tracking-[2px]'>
            Satisfied <br/>
            Client

          </div> */}
          </div>
          
      </div>
      <Link to='contact' smooth={true} duration={500}>
      <button
    style={{
      fontSize: '18px',
      backgroundColor: '#3498db',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease', // Smooth transition on hover
    }}
    onMouseOver={(e) => e.target.style.backgroundColor = '#7980b9'} // Hover style
    onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'} // Restore original color on mouse out
  >
    Contact me
  </button></Link>

    </motion.div>

    </div>
    </div>
    </section>
  );
};

export default About;