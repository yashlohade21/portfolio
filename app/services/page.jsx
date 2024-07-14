"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Full Stack Development',
    description: 'Developing end-to-end web applications using modern technologies like React, Node.js, and MongoDB.',
    href: "https://www.linkedin.com/in/yash-lohade/"
  },
  {
    num: '02',
    title: 'API Development',
    description: 'Creating robust and scalable APIs, ensuring seamless communication between different parts of your application.',
    href: "https://www.linkedin.com/in/yash-lohade/"
  },
  {
    num: '03',
    title: 'Blockchain Solutions',
    description: 'Implementing blockchain technology to build secure and decentralized applications, with expertise in Solidity and smart contracts.',
    href: "https://www.linkedin.com/in/yash-lohade/"
  },
  {
    num: '04',
    title: 'Responsive Web Design',
    description: 'Designing and developing responsive and user-friendly interfaces, enhancing user experience across all devices.',
    href: "https://www.linkedin.com/in/yash-lohade/"
  },  
];


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.dev initial = {{opacity: 0}} animate={{opacity:1 , 
        transition: {
          delay: 2.4, duration: 0.4, ease: "easeIn"}, 
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]" >
          {services.map((service, index) => {
            return (
             <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
              <div className="text-5xl font-extrabold text-outline
              text-transparent group-hover:text-outline-hover
              transition-all duration-500">{service.num}</div>
              <Link href={service.href} className="w-[70px] h-[70px]
              rounded-full bg-white group-hover:bg-accent transition-all
              duration-500 flex justify-center items-center hover:-rotate-45">
                <BsArrowDownRight className="text-primary text-3xl"/>
              </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none
              text-white group-hover:text-accent transition-all
              duration-500">{service.title}</h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full">
              
              </div>
            </div>
            );
          })}
        </motion.dev>
      </div>
    </section>
  )
}

export default Services