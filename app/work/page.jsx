"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import ImageOne from '../../public/assets/work/thumb1.png'; 
import ImageTwo from '../../public/assets/work/thumb2.png'; 
import ImageThree from '../../public/assets/work/thumb3.png'; 
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'Built Time Series Model for Future Stock Prices prediction',
    title: 'Built Time Series Model for Future Stock Prices prediction',
    description: "• Developed a predictive model for forecasting future stock prices based on historical data. This involvedextensive data analysis and application of machine learning algorithms. <br /> Used the ARIMA (Auto-Regressive Integrated Moving Average) model, a statistical analysis tool",
    stack: [{ name: "Python" }, { name: "Time Series algo" }, { name: "JavaScript" }],
    image: ImageOne,
    live: "https://github.com/yashlohade21/Stock-Price-Prediction-Using-Time-Series",
    github: "https://github.com/yashlohade21/Stock-Price-Prediction-Using-Time-Series",
  },
  {
    num: '02',
    category: 'Online Marketplace',
    title: 'Online Marketplace',
    description: "Develop an online marketplace where users can buy and sell products.",
    stack: [
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "Express" },
      { name: "MongoDB" }
    ],
    image: ImageTwo, 
    live: "https://github.com/yashlohade21?tab=repositories", 
    github: "https://github.com/yashlohade21?tab=repositories", 
  },
  {
    num: '03',
    category: 'Portfolio Website',
    title: 'Portfolio Website',
    description: "Create a portfolio website showcasing your projects, skills, and resume.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Node.js" }
    ],
    image: ImageThree,
    live: "https://yashlohade21.github.io/portfolio",
    github: "https://github.com/yashlohade21/portfolio", 
  },
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && " , "}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt={project.title} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl-justify-none" 
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
