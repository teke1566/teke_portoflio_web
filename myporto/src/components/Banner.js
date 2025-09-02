import Image from '../assets/2.svg';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import { useContent } from '../content/ContentContext';

const Banner = () => {
  const { content } = useContent();
  const hero = content?.hero || null;
  const roles = Array.isArray(hero?.roles) ? hero.roles : [];

  return (
    <section className="min-h-[85vh] lg:min-h-[75vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            {hero?.name && (
              <motion.h1
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="text-[45px] font-bold leading-[0.8] lg:text-[80px]"
              >
                {hero.name}
              </motion.h1>
            )}

            {(roles.length > 0 || hero?.tagline) && (
              <>
                {roles.length > 0 && (
                  <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
                  >
                    <span className="text-white mr-4">I'm a </span>
                    <TypeAnimation
                      sequence={roles.flatMap((r) => [r, 2000])}
                      speed={40}
                      className="text-accent"
                      style={{ color: '#ffcc00' }}
                      wrapper="span"
                      repeat={Infinity}
                    />
                  </motion.div>
                )}

                {hero?.tagline && (
                  <motion.p
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className="mb-8 max-w-lg mx-auto lg:mx-0"
                  >
                    {hero.tagline}
                  </motion.p>
                )}
              </>
            )}

            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[35px] gap-x-6 max-w-max mx-auto lg:max-0"
            >
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
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#7980b9')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3498db')}
                >
                  Contact me
                </button>
              </Link>

              {/* keep these icons if you still want them here (you also have SocialLinks component) */}
              <a href="https://www.linkedin.com/in/teketselbeyene/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/teke1566">
                <FaGithub />
              </a>
              <a href="https://wa.me/16412339167" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]" /* fixed class typo */
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
