"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiEye } from "react-icons/fi";
import { motion } from "framer-motion";

const Scene3D = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  ),
});

const titles = ["Software Engineer", "Full Stack Developer", "Cloud Enthusiast"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.8 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const Home = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;

    if (!isDeleting && displayText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="h-full relative z-10">
      <div className="container mx-auto h-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24"
        >
          <motion.div
            variants={fadeLeft}
            className="text-center xl:text-left order-2 xl:order-none"
          >
            <motion.span
              variants={fadeUp}
              className="text-xl text-[var(--text-secondary)] font-mono inline-block"
            >
              {displayText}
              <span className="animate-pulse text-accent">|</span>
            </motion.span>
            <motion.h1 variants={fadeUp} className="h1 mb-4">
              Hello I&apos;m <br />
              <span className="gradient-text">Yash Lohade</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="max-w-[500px] mb-9 text-[var(--text-muted)]"
            >
              Software Engineer building web and mobile applications with C#,
              Python, TypeScript, React, and Next.js. Design REST APIs, work
              with PostgreSQL, MS SQL, and MongoDB, and deploy Docker containers
              on AWS and GCP.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col xl:flex-row items-center gap-8"
            >
              <motion.a
                href="/resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>View Resume</span>
                  <FiEye className="text-xl" />
                </Button>
              </motion.a>
              <div>
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-[var(--glass-border)] rounded-full flex justify-center items-center text-accent text-base hover:bg-accent/10 hover:border-accent hover:scale-110 transition-all duration-300"
                />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeRight}
            className="order-1 xl:order-none mb-8 xl:mb-0"
          >
            <Scene3D />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
      >
        <Stats />
      </motion.div>
    </section>
  );
};

export default Home;
