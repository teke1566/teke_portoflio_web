import React from 'react';
import Logo from '../assets/logo.svg';
import { FaDownload } from 'react-icons/fa';
import { useContent } from '../content/ContentContext';

const Header = () => {
  const { content } = useContent();
  const resumeUrl = content?.resumeUrl || "/BEYENE_Teketsel_Resume1.pdf";

  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Logo} alt='Logo' />
          </a>

          <a
            href={resumeUrl}
            download
            style={{
              fontSize: '16px',
              backgroundColor: '#3498db',
              color: '#fff',
              border: '1px solid #3498db',
              padding: '10px 20px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2980b9')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3498db')}
          >
            <span className='inline-flex items-center gap-2'>
              <FaDownload /> Download Resume
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
