import Image from '../assets/2.svg';
import {FaGithub,FaYoutube,FaDribbble, FaLinkedin,FaWhatsapp} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import{motion} from 'framer-motion';
import {fadeIn} from '../variants';
import { Link } from 'react-scroll';
import LineGradient from "./LineGradient";
import SocialLinks from "./SocialLinks";
import Testimonials from "./Testimonials";




const Banner = () => {
  return (
  <section  className='min-h-[85vh] lg:min-h-[75vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
      <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h1 
         variants={fadeIn('up', 0.3)}
          initial="hidden" 
          whileInView={'show'}
        viewport={{once:false,amount:0.7}}
        className='text-[45px] font-bold leading-[0.8] lg:text-[80px]'>
        Teketsel<span> Beyene</span>
        </motion.h1>
        <motion.div 
        variants={fadeIn('up', 0.4)}
        initial="hidden" 
        whileInView={'show'}
      viewport={{once:false,amount:0.7}}
      className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
          <span className='text-white mr-4' >I'm a </span>
          <TypeAnimation sequence={[
            'Java Developer',
            2000,
            'BackEnd &',
            2000,
            'FrontEnd',
            2000,
          ]}
          speed={40}
          className='text-accent' style={{ color: '#ffcc00' }}
          wrapper='span'
          repeat={Infinity}/>
        </motion.div>
        <motion.p 
        variants={fadeIn('up', 0.5)}
        initial="hidden" 
        whileInView={'show'}
      viewport={{once:false,amount:0.7}}
      className='mb-8 max-w-lg mx-auto lg:mx-0'>
       Experienced Java Developer||Spring Boot, AWS | Agile (SCRUM) Available for Full-time W-2 Employment||Willing to Relocate    </motion.p>
           <motion.div 
           variants={fadeIn('up', 0.6)}
           initial="hidden" 
           whileInView={'show'}
         viewport={{once:false,amount:0.7}}
         className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:max-0'>
            {/* <button className='btn btn-lg'>Contact Me</button> */}
            {/* <a href='#' className='text-gradient btn-link'>My Portofolio</a> */}
           </motion.div>
           
           <motion.div
           variants={fadeIn('up', 0.7)}
           initial="hidden" 
           whileInView={'show'}
         viewport={{once:false,amount:0.7}}
          className='flex text-[35px] gap-x-6 max-w-max mx-auto lg:max-0'>
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
  </button>
</Link>


            <a href='https://www.linkedin.com/in/teketselbeyene/'>
              <FaLinkedin/>
            </a>
            <a href='https://github.com/teke1566'>
            <FaGithub/>

            </a>
            <a href='https://wa.me/16412339167' target='_blank' rel='noopener noreferrer'>
  <FaWhatsapp />
</a>

            
           </motion.div>
        </div>
      <motion.div
       variants={fadeIn('down', 0.5)}
       initial="hidden" 
       whileInView={'show'}
     viewport={{once:false,amount:0.7}} 
      className='hidden lg:flex flex-1 max-w-[320] lg:max-w[320px] lg:max-w-[482px]'>
        <img src={Image} alt=''/>
        </motion.div>

      </div>

    </div>
    </section>
   );
};

export default Banner;

