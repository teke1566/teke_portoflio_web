import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import { useContent } from '../content/ContentContext';

const About = () => {
  const { content } = useContent();
  const { ref, inView } = useInView({ threshold: 0.5 }); // <-- hook runs unconditionally

  const about = content?.about || null;
  const years = about?.counters?.years;
  const projects = about?.counters?.projects;
  const desc = about?.description || '';

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          />

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* Render nothing if about is missing, but keep hooks order intact */}
            {about && (
              <>
                <h2 className="h2 text-accent" style={{ color: '#3498db' }}>
                  About me
                </h2>

                {/* font-size fix only */}
                <h3 className="mb-4 text-base leading-7 md:text-lg md:leading-8 lg:text-xl lg:leading-8 font-normal text-white/90">
                  {desc}
                </h3>

                <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                  {years != null && (
                    <div>
                      <div
                        className="text-[40px] font-teritary text-gradient mb-2"
                        style={{ color: '#3498db' }}
                      >
                        {inView ? <CountUp start={0} end={years} duration={3} /> : null}+
                      </div>
                      <div
                        className="font-primary text-sm tracking-[2px]"
                        style={{ color: '#3498db' }}
                      >
                        Years of <br />
                        Experience
                      </div>
                    </div>
                  )}

                  {projects != null && (
                    <div>
                      <div
                        className="text-[40px] font-teritary text-gradient mb-2"
                        style={{ color: '#3498db' }}
                      >
                        {inView ? <CountUp start={0} end={projects} duration={3} /> : null}+
                      </div>
                      <div
                        className="font-primary text-sm tracking-[2px]"
                        style={{ color: '#3498db' }}
                      >
                        Projects <br />
                        Completed
                      </div>
                    </div>
                  )}
                </div>

                <Link to="contact" smooth={true} duration={500}>
                  <button
                    style={{
                      fontSize: '18px',
                      backgroundColor: '#3498db',
                      color: '#fff',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Contact me
                  </button>
                </Link>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
