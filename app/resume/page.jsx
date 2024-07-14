"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaAngular, FaDatabase, FaPython} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiFirebase, SiTypescript } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TooltipContent, Tooltip,  TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const about = {
  title: "About Me",
  description:
  "I am Yash Lohade, a passionate Computer Engineering graduate eager to establish myself in the field of Software Engineering and Full Stack Development. With hands-on experience in frontend and backend technologies, including React, Node.js, and MongoDB, I am dedicated to crafting efficient and user-centric web applications.",
  info: [
  {  
    fieldName: "Name:",
    fieldValue: "Yash Lohade"
  },
  {  
    fieldName: "Phone:",
    fieldValue: "+91 9403320356"
  },  
  {  
    fieldName: "Email:",
    fieldValue: "yashlohade2502@gmail.com"
  },
  {  
    fieldName: "Experience:",
    fieldValue: "6 Months"
  },
  {  
    fieldName: "Nationality:",
    fieldValue: "Indian"
  },
  ]
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: 'I have gained valuable industry experience through internships that have honed my skills in full-stack development and web technologies. These opportunities have equipped me with practical knowledge in building robust web applications using technologies such as MERN stack (MongoDB, Express.js, React.js, Node.js).',
  items: [
    {    
      company : "Propel Mentorship",
      position: "MERN Stack Intern",
      duration: "April 2024 - July 2024"
    },
    {    
      company : "BitWise Academy",
      position: "Web Developer Intern",
      duration: "Sep 2023 - Jan 2024"
    },
  ]
};

const education = {
  icon: '/assets/resume/badge.svg',
  title: 'My Education',
  description: 'I have pursued a comprehensive education in Computer Engineering, combining theoretical knowledge with practical skills. My academic journey includes a Bachelor’s degree in Computer Engineering from Savitribai Phule Pune University, where I have deepened my understanding of computer systems and software development. Prior to this, I completed a Diploma in Computer Engineering from Maharashtra State Board of Technical Education, which provided a solid foundation in programming and system design.',
  items: [
    {    
      university : "Savitribai Phule Pune University",
      degree: "Bachelor's of Computer Engineering",
      duration: "2021 - 2025"
    },
    {    
      university : "Maharashtra State Board of Technical Education",
      degree: "Diploma in Computer Engineering",
      duration: "2019 - 2021"
    },
  ]
};


const skills = {
  title: "My Skills",
  description: "I have developed proficiency in a variety of technologies and frameworks essential for modern web development. My skill set includes:",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaNodeJs />,
      name: "Nodejs",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS"
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB"
    },
    {
      icon: <SiFirebase />,
      name: "Firebase"
    },
    {
      icon: <SiTypescript />,
      name: "Typescript"
    },
    {
      icon: <FaDatabase />,
      name: "SQL"
    },
    {
      icon: <FaPython />,
      name: "Python"
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
  ]
};

const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{
      opacity:1,
      transition: {
        delay:2.4,
        duration: 0.4,
        ease: "easeIn"
      },
    }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0" >
      <div className="container mx-auto">
        <Tabs defaultValue="experience"
              className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value = "experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ui className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                      <li key={index} 
                        className="bg-[#232329] h-[184px] py-6
                          px-10 rounded-xl flex flex-col justify-center items-center
                          lg:items-start gap-1 ">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left ">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px]
                            rounded-full bg-accent "></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ui>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value = "education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ui className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                      <li key={index} 
                        className="bg-[#232329] h-[184px] py-6
                          px-10 rounded-xl flex flex-col justify-center items-center
                          lg:items-start gap-1 ">
                        <span className="text-accent">{item.university}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left ">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px]
                            rounded-full bg-accent "></span>
                          <p className="text-white/60">{item.duration}</p>
                        </div>
                      </li>
                      );
                    })}
                  </ui>
                </ScrollArea>
              </div>
              </TabsContent>
            <TabsContent value = "skills" className="w-full h-full">
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                          {skills.description}
                        </p>
                      </div>
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {skills.skillList.map((skill, index) => {
                          return (
                            <li key={index}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip> 
                                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                      {skill.icon}
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="capitalize">{skill.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
            </TabsContent>
            <TabsContent value = "about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl fond-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                      mx-auto xl:mx-0">
                    {about.info.map((item, index)=>{
                      return (
                        <li key={index} className="flex items-center justify-center
                          xl-justify-start gap-4">
                          <span>{item.fieldName}</span>
                          <span>{item.fieldValue}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume