import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ setIsContactActive }) => {
  const setContactActive = () => {
    setIsContactActive(true);
  };

  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if any field is empty before sending the email
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    emailjs
      .sendForm('service_1isanzg', 'template_y20knsj', formRef.current, 'sulEXRGBpriiQ0AD8')
      .then((result) => {
        console.log(result.text);
        toast.success('Message sent successfully!');
        // Optionally, you can reset the form here
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.log(error.text);
        toast.error('Error sending message. Please try again later.');
      });
  };

  return (
    <section className='py-16 lg:section' id='contact'  name='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase  font-medium mb-2 tracking-wide' style={{ color: 'white' }}>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12' style={{ color: '#3498db' }}>Collaborate<br />for Success</h2>
            </div>
          </motion.div>
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
            <input
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent trabsition-all'
              type='text'
              placeholder='Your name'
            />
            <input
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent trabsition-all'
              type='email'
              placeholder='Your email'
            />
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='bg-transparent border-b py-10 outline-none w-full placeholder:text-white focus:border-accent trabsition-all resize-none mb-12'
              type='text'
              placeholder='Your message'
            ></textarea>
          <button
  className='btn btn-lg'
  type='submit'
  style={{
    backgroundColor: '#3498db', // Default background color
    color: '#fff', // Default text color
    transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition on hover
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = '#2980b9'; // Hover background color
    e.target.style.color = '#fff'; // Hover text color
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = '#3498db'; // Restore original background color on mouse out
    e.target.style.color = '#fff'; // Restore original text color on mouse out
  }}
>
  Send Message
</button>

          </motion.form>
        </div>
      </div>
      <ToastContainer position='top-right' autoClose={3000} hideProgressBar />
    </section>
  );
};

export default Contact;
