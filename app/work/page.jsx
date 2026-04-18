"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub, BsGooglePlay } from "react-icons/bs";
import Link from "next/link";

const featuredProjects = [
  {
    title: "Algomaya",
    subtitle: "Learn, Build & Paper-Trade Platform",
    description:
      "Full-stack mobile platform for algorithmic trading with courses, quizzes, certificates, no-code algo builder, backtesting, and paper trading in a SEBI-compliant environment. FastAPI back-end with 35+ REST endpoints, React Native (Expo) client, AI chat assistant using Groq-hosted Llama 3.3, and ML forecasting with CNN-LSTM hybrid (TensorFlow/Keras). GitHub Actions CI/CD with multi-stage Docker builds and EAS Android releases.",
    stack: ["Python", "FastAPI", "PostgreSQL", "React Native", "TensorFlow", "Docker", "GitHub Actions", "GCP Cloud Run"],
    live: "https://algomaya.com",
    playstore: "https://play.google.com/store/apps/details?id=com.algomaya.app",
    github: "",
  },
  {
    title: "TestMeshAI",
    subtitle: "Graph-Based Testing Platform",
    description:
      "Developer tool that extracts testable entities (functions, API routes, modules) from a TS/JS codebase using the TypeScript Compiler API and represents them as a graph for test authoring, execution, and failure localization. Includes Electron and React graph view, run inspector, and PostgreSQL data model with declarative JSON test definitions and runtime adapters.",
    stack: ["TypeScript", "React", "Electron", "Vite", "Node.js", "PostgreSQL", "Playwright"],
    live: "",
    github: "https://github.com/yashlohade21",
  },
];

const otherProjects = [
  {
    title: "Multi-Agent AI Platform",
    subtitle: "AI Coding Assistant",
    description:
      "Production-ready multi-agent system with 7 specialized AI agents, auto-fallback across 5+ LLM providers, real-time streaming, and live code validation with 95%+ accuracy.",
    stack: ["React.js", "Flask", "Mistral", "Groq", "Gemini", "JWT", "WebSockets"],
    github: "https://github.com/yashlohade21",
  },
  {
    title: "De-Chat",
    subtitle: "Decentralized Chat DApp",
    description:
      "Fully decentralized chat app on blockchain with on-chain message storage, MetaMask wallet auth, end-to-end encryption, and 300+ lines of Solidity smart contracts on Polygon testnet.",
    stack: ["Solidity", "React.js", "Next.js", "Python", "MetaMask", "Web3.js", "Polygon"],
    github: "https://github.com/yashlohade21",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const Work = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-[80vh] flex flex-col justify-center py-12 relative z-10"
    >
      <div className="container mx-auto">
        <motion.div variants={fadeUp} className="mb-12 text-center">
          <h2 className="text-4xl font-bold gradient-text inline-block mb-4">
            Featured Projects
          </h2>
          <p className="text-[var(--text-muted)] max-w-[600px] mx-auto">
            Production-grade applications built with modern technologies and
            best practices.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -5,
                borderColor: "rgba(245, 158, 11, 0.3)",
                transition: { duration: 0.3 },
              }}
              className="glass-card p-8 xl:p-10 group transition-all duration-500 relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#fbbf24] to-[#f97316]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />

              <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
                <div className="flex-1">
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="inline-block px-2.5 py-0.5 rounded-full bg-accent/15 text-accent text-[11px] font-mono uppercase tracking-wider mb-2"
                  >
                    Featured
                  </motion.span>
                  <h3 className="text-2xl xl:text-3xl font-bold mb-1 group-hover:text-accent/90 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-accent/60 text-sm font-mono mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 max-w-[700px]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.04 }}
                        whileHover={{ scale: 1.08, borderColor: "rgba(245,158,11,0.4)" }}
                        className="px-3 py-1 rounded-full bg-[var(--glass-card-bg)] border border-[var(--glass-border)] text-xs text-[var(--text-muted)] transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex xl:flex-col items-center gap-4 xl:pt-8">
                  {project.live && (
                    <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full glass flex items-center justify-center text-[var(--text-muted)] hover:text-accent hover:border-accent/30 transition-all"
                      >
                        <BsArrowUpRight className="text-lg" />
                      </Link>
                    </motion.div>
                  )}
                  {project.playstore && (
                    <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                      <Link
                        href={project.playstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full glass flex items-center justify-center text-[var(--text-muted)] hover:text-accent hover:border-accent/30 transition-all"
                      >
                        <BsGooglePlay className="text-lg" />
                      </Link>
                    </motion.div>
                  )}
                  {project.github && (
                    <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full glass flex items-center justify-center text-[var(--text-muted)] hover:text-accent hover:border-accent/30 transition-all"
                      >
                        <BsGithub className="text-lg" />
                      </Link>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          variants={fadeUp}
          className="text-2xl font-bold text-[var(--text-secondary)] mb-6"
        >
          Other Projects
        </motion.h3>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -5,
                borderColor: "rgba(245, 158, 11, 0.2)",
                transition: { duration: 0.3 },
              }}
              className="glass-card p-6 group transition-all duration-500 relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#fbbf24] to-[#f97316]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{ transformOrigin: "left" }}
              />
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="text-lg font-bold group-hover:text-accent/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-accent/50 text-sm font-mono">
                    {project.subtitle}
                  </p>
                </div>
                {project.github && (
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-accent transition-all shrink-0 mt-1"
                    >
                      <BsGithub className="text-lg" />
                    </Link>
                  </motion.div>
                )}
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
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
      </div>
    </motion.section>
  );
};

export default Work;
