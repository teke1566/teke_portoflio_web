import React, { useState } from 'react';
import htmlIcon from '../assets/html.png';
import reactIcon from '../assets/React-icon.png';
import javaIcon from '../assets/java.png';
import jsIcon from '../assets/js.webp';
import springIcon from '../assets/spring.png';
import postgresIcon from '../assets/postgres.webp';
import kubernatesIcon from '../assets/kubernates.png';
import dockerIcon from '../assets/Docker.png';
import mongodbIcon from '../assets/mongodb.svg';

import aws from '../assets/aws.png';


const techs = [
  {
    id: 1,
    src: htmlIcon,
    title: 'HTML',
    style: 'shadow-orange-500',
  },
  {
    id: 2,
    src: reactIcon,
    title: 'React',
    style: 'shadow-indigo-700',
    
  },
  {
    id: 3,
    src: javaIcon,
    title: 'Java',
    style: 'shadow-gray-500',
  },
  {
    id: 4,
    src: springIcon,
    title: 'SpringBoot',
    style: 'shadow-green-500',
  },
  {
    id: 5,
    src: jsIcon,
    title: 'JavaScript',
    style: 'shadow-yellow-500',
  },
  {
    id: 6,
    src: kubernatesIcon,
    title: 'Kubernates',
    style: 'shadow-indigo-500',
  },
  {
    id: 7,
    src: dockerIcon,
    title: 'Docker',
    style: 'shadow-indigo-400',
    
  },
  {
    id: 8,
    src: mongodbIcon,
    title: 'Mongodb',
    style: 'shadow-green-500',
  },
  {
    id: 9,
    src: aws,
    title: 'AWS',
    style: 'shadow-orange-400',
  },
];

const services = [
  {
    name: 'Full Stack Java Development ',
    description: 'Expertise in Full Stack Java Development with a focus on delivering robust and efficient solutions. Proficient in Java, Spring Boot, Microservices, REST API, and J2EE ',
    link: 'Learn More' ,
    additionalInfo: [
      'Successfully integrated third-party APIs into Java web applications.',
      'Implemented AWS services for optimized application scalability.',
      'Introduced cutting-edge CI/CD pipelines using Jenkins for automated deployments.',
    ],
  },

  {
    name: 'Microservices',
    description: 'Expertise in designing and implementing scalable and modular Microservices architecture. Proficient in Spring Boot, Spring Cloud, and related technologies. Key achievements include: ',
    link: 'Learn More',
    additionalInfo: [
      'Contributed to the design and implementation of Microservices & Service Oriented Architecture (SOA).',
      'Utilized messaging frameworks (MQ and Kafka) for enhanced real-time communication capabilities.',
      'Implemented RESTful services, resulting in a 40% improvement in API response times.',
    ],
  },
  {
    name: 'Cloud Optimization and DevOps',
    description: 'Specialized in optimizing applications for cloud environments and implementing robust DevOps practices. Proficient in AWS Cloud, CI/CD pipelines, and containerization',
    link: 'Learn More',
    additionalInfo: [
      'Implemented AWS services such as Amazon EC2 and RDS for optimal application scalability.',
      'Spearheaded cutting-edge CI/CD pipelines with Jenkins, automating resource deployment across environments.',
      'Acquainted with containerization tools like Docker and Kubernetes for efficient application deployment.',
    ],
  },
];

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const handleLearnMoreClick = (index, event) => {
    event.preventDefault();
    setExpandedService((prev) => (prev === index ? null : index));
  };

  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0' style={{ marginRight: '20px' }}>
            <h2 className='h2 text-accent mb-6' style={{ color: '#3498db' }}>
              What I Do
            </h2>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 px-5 sm:px-0'>
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt='' className='w-12 mx-auto' />
                  <p className='mt-4'>{title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='flex-1' style={{ marginLeft: '20px' }}>
            <div>
              {services.map((service, index) => {
                const { name, description, link, additionalInfo } = service;
                const isExpanded = expandedService === index;

                return (
                  <div
                    className={`border-b border-white/20 mb-[38px] ${
                      isExpanded ? 'pb-4' : ''
                    }`}
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                        {isExpanded && (
                          <ul className='list-disc ml-6 mt-2'>
                            {additionalInfo.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a
                        href='javascript:void(0)'
                        style={{
                          color: isExpanded ? '#2980b9' : '#3498db',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease',
                        }}
                        onClick={(event) => handleLearnMoreClick(index, event)}
                      >
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
