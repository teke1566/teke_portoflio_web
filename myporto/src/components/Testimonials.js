import React from 'react';
import LineGradient from "./LineGradient";
import { motion } from "framer-motion";
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Data } from './data';
import "./testimonial.css"

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-52 pb-10 min-h-[105vh] lg:min-h-[120vh] ml-18"> {/* Add a class for background color and ml-5 for left margin */}
      <motion.div
        className="md:w-1/4 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className='h2 text-accent' style={{ color: '#3498db' }}>
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-3/5" />
        <p className="mt-10">
        "Discover firsthand testimonials on my work. With precision and warmth, my approach is well-received."
        </p>
      </motion.div>

      <Swiper
        className='testimonial_container '
        grabCursor={true}
        loop={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1, // Change the number of slides per view
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className='testimonial_card' key={id} style={{ backgroundColor: '#4682B442' }}>
              {/* Change the background color */}
              <img src={image} alt="" className="testimonial_img" />
              <h3 className='testimonial_name'>{title}</h3>
              <p className='text-white-100 text-[14px] pl-1 tracking-wider'>{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
