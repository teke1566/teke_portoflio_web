import React from 'react';
import { BiHomeAlt, BiUser, BiClipboard } from 'react-icons/bi';
import { BsBriefcase,BsClipboardData, BsChatSquareText } from 'react-icons/bs';
import { FaBuilding } from 'react-icons/fa'; 
import { AiOutlineStar } from 'react-icons/ai';
import { MdWorkspacePremium } from 'react-icons/md';
import { Link } from 'react-scroll';

const Nav = () => {
  const activeLinkStyle = {
    color: '',
    backgroundColor: '',
  };

  // Helper: NavItem with tooltip
  const NavItem = ({ to, icon, label, offset }) => (
    <Link
      to={to}
      activeClass="active"
      smooth={true}
      spy={true}
      offset={offset || -100}
      className="group relative cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
      style={{ color: '#3498db' }}
      activeStyle={activeLinkStyle}
    >
      {icon}
      {/* Tooltip */}
      <span
        className="absolute bottom-14 text-xs bg-black/80 text-white px-2 py-1 rounded opacity-0 
                   group-hover:opacity-100 transition whitespace-nowrap"
      >
        {label}
      </span>
    </Link>
  );

  return (
    <nav
      className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50"
      style={{ color: '#3498db' }}
    >
      <div className="container mx-auto" style={{ color: '#3498db' }}>
        <div
          className="w-full bg-black/20 h-[96px] backdrop-blur-2xl max-w-[520px] mx-auto px-5 flex justify-between
          text-2xl text-white/50"
        >
          <NavItem to="home" icon={<BiHomeAlt />} label="Home" offset={-200} />
          <NavItem to="about" icon={<BiUser />} label="About" />
          <NavItem to="tech" icon={<BiClipboard />} label="Tech Stack" />
          <NavItem to="work" icon={<BsBriefcase />} label="Projects" />
          <NavItem to="services" icon={<BsClipboardData />} label="Services" />
          <NavItem to="experience" icon={<FaBuilding />} label="Experience & Education" />
          <NavItem to="certs" icon={<MdWorkspacePremium />} label="Certifications" />
          <NavItem to="testimonials" icon={<AiOutlineStar />} label="Testimonials" />
          <NavItem to="contact" icon={<BsChatSquareText />} label="Contact" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
