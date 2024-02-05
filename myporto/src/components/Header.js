import React from 'react';
import Logo from '../assets/logo.svg';
import { FaDownload } from 'react-icons/fa';

const Header = () => {
  const PDF_FILE_URL = "/BEYENE_Teketsel_Resume1.pdf";

  const downloadFileAtURL = (URL) => {
    fetch(URL)
      .then((Response) => Response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const filename = URL.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = blobURL;
        aTag.setAttribute('download', filename);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });

  }

  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Logo} alt='Logo' />
          </a>
          <button
  style={{
    fontSize: '16px',
    backgroundColor: '#3498db', // Change to your desired background color
    color: '#fff', // Change to your desired text color
    border: '1px solid #3498db', // Matching border color for better visibility
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition on hover
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = '#2980b9'; // Hover background color
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = '#3498db'; // Restore original background color on mouse out
  }}
  onClick={() => { downloadFileAtURL(PDF_FILE_URL) }}
>
  <FaDownload className='mr-2' /> Download Resume
</button>

        </div>
      </div>
    </header>
  );
};



export default Header;
