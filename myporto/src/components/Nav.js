import React from 'react';
import { BiBriefcase, BiClipboard, BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText, BsHeart,BsChatDots } from 'react-icons/bs';
import { FaBuilding } from 'react-icons/fa'; // Import the FaBriefcase icon
import { Link } from 'react-scroll';
import { AiOutlineStar } from 'react-icons/ai';


const Nav = () => {
  const activeLinkStyle = {
    color: '',
    backgroundColor: '',
  };

  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50' style={{ color: '#3498db' }}>
      <div className='container mx-auto' style={{ color: '#3498db' }}>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl max-w-[460px] mx-auto px-5 flex justify-between
        text-2xl text-white/50' >
          <Link
            to='home'
            activeClass='active'
            smooth={true}
            offset={-200}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            style={{ color: '#3498db' }}
            activeStyle={activeLinkStyle}
          >
            <BiHomeAlt />
          </Link>
          <Link
            to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            style={{ color: '#3498db' }}
            activeStyle={activeLinkStyle}
          >
            <BiUser />
          </Link>
          <Link
            to='experience'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            style={{ color: '#3498db' }}
            activeStyle={activeLinkStyle}
          >
            <FaBuilding />
          </Link>
          <Link
            to='services'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            style={{ color: '#3498db' }}
            activeStyle={activeLinkStyle}
          >
            <BsClipboardData />
          </Link>
          <Link
            to='work'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            style={{ color: '#3498db' }}
            activeStyle={activeLinkStyle}
          >
            <BsBriefcase />
          </Link>
          <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            style={{ color: '#3498db' }}
            activeStyle={activeLinkStyle}
          >
            <BsChatSquareText />
          </Link>
          <Link
            to='testimonials'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            style={{ color: '#3498db' }}
            activeStyle={activeLinkStyle}
          >
            <AiOutlineStar />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
