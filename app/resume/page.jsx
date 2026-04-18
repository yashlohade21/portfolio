"use client";

import dynamic from "next/dynamic";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDotnet,
  SiFastapi,
  SiGooglecloud,
  SiMysql,
  SiExpress,
  SiGithubactions,
} from "react-icons/si";
import { BsArrowUpRight, BsGithub, BsGooglePlay } from "react-icons/bs";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Link from "next/link";
import {
  TooltipContent,
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const Letter3D = dynamic(() => import("@/components/Letter3D"), {
  ssr: false,
  loading: () => (
    <div className="w-[120px] h-[120px] xl:w-[160px] xl:h-[160px] flex items-center justify-center">
      <span className="text-7xl xl:text-8xl font-bold gradient-text">Y</span>
    </div>
  ),
});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const experience = [
  {
    company: "Win Information Technology",
    location: "Hyderabad, India",
    position: "Software Developer",
    duration: "Aug 2025 - Present",
    highlights: [
      "Build and maintain web applications with ASP.NET Core (C#), Next.js (React), PostgreSQL, and MS SQL for enterprise clients including PepsiCo Dubai, Coca-Cola, and Emirates Snack Foods",
      "Developed a Python (FastAPI) email classification service that processes around 200 emails per day and cut manual triage work for the support team",
      "Implemented role-based access control and audit logging for an internal distribution platform used by 500+ daily users",
      "Maintain CI/CD pipelines on GitHub and GitLab with automated builds, tests, and Docker deployments, and participate in code reviews and Agile sprint planning",
    ],
  },
  {
    company: "ArgyleEnigma Tech Labs",
    location: "Pune, India",
    position: "Full-Stack Developer Intern",
    duration: "Aug 2024 - Nov 2024",
    highlights: [
      "Developed features for a React Native mobile application with back-end services on AWS",
      "Redesigned the entire app UI, rebuilding screens and components for a cleaner user experience",
      "Integrated Razorpay payments with checkout flow, webhook verification, and success/failure handling",
      "Diagnosed and fixed recurring production crashes to improve app stability",
    ],
  },
];

const education = [
  {
    university: "Savitribai Phule Pune University",
    degree: "B.E. Computer Engineering",
    duration: "Aug 2021 - Jun 2025",
    coursework:
      "Data Structures & Algorithms, Object-Oriented Design, Databases, Software Engineering, Operating Systems, Computer Networks",
  },
  {
    university: "Maharashtra State Board of Technical Education",
    degree: "Diploma in Computer Technology",
    duration: "2019 - May 2021",
  },
];

const skillCategories = [
  {
    name: "Languages",
    items: [
      { icon: <FaPython />, name: "Python" },
      { icon: <SiDotnet />, name: "C#" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
    ],
  },
  {
    name: "Frameworks",
    items: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <FaReact />, name: "React Native" },
      { icon: <SiDotnet />, name: "ASP.NET Core" },
      { icon: <SiFastapi />, name: "FastAPI" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
    ],
  },
  {
    name: "Databases",
    items: [
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMysql />, name: "MS SQL" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiRedis />, name: "Redis" },
    ],
  },
  {
    name: "DevOps & Cloud",
    items: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaDocker />, name: "Docker" },
      { icon: <SiGithubactions />, name: "CI/CD" },
      { icon: <FaAws />, name: "AWS" },
      { icon: <SiGooglecloud />, name: "GCP" },
    ],
  },
];

const projects = [
  {
    title: "Algomaya",
    subtitle: "Learn, Build & Paper-Trade Platform",
    description:
      "Full-stack mobile platform for algorithmic trading with courses, quizzes, no-code algo builder, backtesting, and paper trading. 35+ REST endpoints, AI chat with Groq-hosted Llama 3.3, ML forecasting with CNN-LSTM hybrid.",
    stack: ["Python", "FastAPI", "PostgreSQL", "React Native", "TensorFlow", "Docker", "GCP"],
    live: "https://algomaya.com",
    playstore: "https://play.google.com/store/apps/details?id=com.algomaya.app",
    github: "",
  },
  {
    title: "TestMeshAI",
    subtitle: "Graph-Based Testing Platform",
    description:
      "Developer tool that extracts testable entities from TS/JS codebases using the TypeScript Compiler API. Interactive graph visualization for test authoring, execution, and failure localization.",
    stack: ["TypeScript", "React", "Electron", "Node.js", "PostgreSQL", "Playwright"],
    live: "",
    github: "https://github.com/yashlohade21",
  },
];

const SectionHeading = ({ title, number }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="text-sm font-mono text-accent/50">{number}</span>
    <h2 className="text-2xl xl:text-3xl font-bold">{title}</h2>
    <div className="flex-1 h-[1px] bg-gradient-to-r from-accent/20 to-transparent" />
  </div>
);

const Resume = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-10"
    >
      <div className="container mx-auto py-12 xl:py-16">
        {/* Hero Header */}
        <motion.div variants={item} className="mb-20 text-center">
          <div className="flex items-center justify-center gap-0 mb-6">
            <Letter3D />
            <h1 className="text-5xl xl:text-7xl font-bold leading-none -ml-2">
              ash <span className="gradient-text">Lohade</span>
            </h1>
          </div>
          <p className="text-[var(--text-muted)] max-w-[600px] mx-auto text-sm leading-relaxed mt-4">
            Software Engineer building web and mobile applications with C#,
            Python, TypeScript, React, and Next.js. Design REST APIs, work
            with PostgreSQL, MS SQL, and MongoDB, and deploy Docker containers
            on AWS and GCP.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-[var(--text-muted)] mt-5">
            <span className="flex items-center gap-1.5">
              <FiMapPin className="text-accent/60" /> Hyderabad, India
            </span>
            <span className="flex items-center gap-1.5">
              <FiMail className="text-accent/60" /> yashlohade2502@gmail.com
            </span>
            <span className="flex items-center gap-1.5">
              <FiPhone className="text-accent/60" /> +91 9403320356
            </span>
          </div>
          <div className="mt-5">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/15 text-accent text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Open to Opportunities
            </span>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.section variants={item} className="mb-20">
          <SectionHeading title="Experience" number="01" />
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className="glass-card p-6 xl:p-8 hover:border-accent/15 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#fbbf24] to-[#f97316] opacity-40 group-hover:opacity-100 transition-all" />
                <div className="pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-accent/90 transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-[var(--text-muted)] text-sm mt-0.5">
                        {exp.company} &middot; {exp.location}
                      </p>
                    </div>
                    <span className="text-xs font-mono gradient-text shrink-0 px-3 py-1 rounded-full bg-accent/5 border border-accent/10">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-[var(--text-muted)] text-sm flex items-start gap-3 leading-relaxed"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent/60 mt-2 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section variants={item} className="mb-20">
          <SectionHeading title="Technical Skills" number="02" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={item}
                className="glass-card p-5 xl:p-6 hover:border-accent/15 transition-all duration-500"
              >
                <h4 className="text-xs font-semibold text-accent/70 mb-4 uppercase tracking-[3px]">
                  {category.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, index) => (
                    <TooltipProvider key={index} delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--glass-card-bg)] border border-[var(--glass-border)] hover:border-accent/25 hover:bg-accent/5 group/skill transition-all duration-300">
                          <span className="text-lg text-[var(--text-muted)] group-hover/skill:text-accent transition-all">
                            {skill.icon}
                          </span>
                          <span className="text-xs text-[var(--text-muted)] group-hover/skill:text-[var(--text-secondary)] transition-all">
                            {skill.name}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section variants={item} className="mb-20">
          <SectionHeading title="Projects" number="03" />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="glass-card p-6 xl:p-8 group hover:border-accent/20 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#fbbf24] to-[#f97316] opacity-30 group-hover:opacity-100 transition-all duration-500" />
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-accent/90 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-accent/60 text-sm font-mono">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 mt-1">
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[var(--glass-card-bg)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-muted)] hover:text-accent hover:border-accent/30 transition-all"
                      >
                        <BsArrowUpRight className="text-sm" />
                      </Link>
                    )}
                    {project.playstore && (
                      <Link
                        href={project.playstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[var(--glass-card-bg)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-muted)] hover:text-accent hover:border-accent/30 transition-all"
                      >
                        <BsGooglePlay className="text-sm" />
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[var(--glass-card-bg)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-muted)] hover:text-accent hover:border-accent/30 transition-all"
                      >
                        <BsGithub className="text-sm" />
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full bg-[var(--glass-card-bg)] border border-[var(--glass-border)] text-[11px] text-[var(--text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section variants={item} className="mb-20">
          <SectionHeading title="Education" number="04" />
          <div className="space-y-5">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={item}
                className="glass-card p-6 hover:border-accent/15 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#fbbf24] to-[#f97316] opacity-30 group-hover:opacity-100 transition-all" />
                <div className="pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <span className="text-xs font-mono gradient-text shrink-0">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-[var(--text-muted)] text-sm">{edu.university}</p>
                  {edu.coursework && (
                    <p className="text-[var(--text-muted)] text-xs mt-3 leading-relaxed opacity-70">
                      <span className="opacity-100 font-medium">
                        Coursework:{" "}
                      </span>
                      {edu.coursework}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certification */}
        <motion.section variants={item}>
          <SectionHeading title="Certifications" number="05" />
          <motion.div
            variants={item}
            className="glass-card p-6 xl:p-8 flex flex-col sm:flex-row items-center gap-6 hover:border-accent/15 transition-all duration-500 max-w-2xl group relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#fbbf24] to-[#f97316] opacity-30 group-hover:opacity-100 transition-all" />
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#fbbf24] to-[#f97316] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
              <FaAws className="text-2xl text-black" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold">
                AWS Certified Cloud Practitioner
              </h4>
              <p className="text-[var(--text-muted)] text-sm">
                Amazon Web Services &bull; 2024
              </p>
              <span className="inline-block mt-2 px-3 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-mono">
                CLF-C02
              </span>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Resume;
