"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description:
      "I turn ideas into real, working products — not just pretty mockups. Whether it's a customer-facing app or an internal tool, I build it end-to-end with Next.js, React, ASP.NET Core, and PostgreSQL. Clean code, fast pages, zero excuses.",
    href: "/contact",
  },
  {
    num: "02",
    title: "API & Backend Engineering",
    description:
      "Your frontend is only as good as what powers it. I design and build APIs that are fast, secure, and easy to work with — using FastAPI, Node.js, or .NET. Auth, rate limiting, database optimization — the stuff users never see but always feel.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Mobile App Development",
    description:
      "One codebase, both platforms, no compromises. I build React Native apps that feel native — smooth animations, offline support, push notifications, payment integrations. From first prototype to Play Store & App Store.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Cloud & DevOps",
    description:
      "I don't just write code — I make sure it ships. Docker containers, CI/CD pipelines, AWS & GCP deployments. Your app gets auto-tested, auto-built, and auto-deployed every time you push. No more 'it works on my machine.'",
    href: "/contact",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.6 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-16 relative z-10">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono tracking-wider uppercase mb-3">
            Services
          </p>
          <h2 className="text-4xl xl:text-5xl font-bold mb-5">
            Here&apos;s how I can <span className="gradient-text">help you</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-[540px] leading-relaxed">
            I don&apos;t just build features — I build products that work, scale, and
            make your users come back. Every line of code has a purpose.
          </p>
        </motion.div>

        {/* Services list */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariant}>
              <Link href={service.href} className="group block">
                <div
                  className="py-9 md:py-10 transition-all duration-300"
                  style={{ borderBottom: "1px solid var(--glass-border)" }}
                >
                  <div className="flex items-start gap-5 md:gap-8 mb-4">
                    {/* Number */}
                    <span className="text-xs font-mono text-accent/40 mt-1.5 shrink-0">
                      {service.num}
                    </span>

                    {/* Title + Arrow */}
                    <div className="flex items-center justify-between w-full gap-4">
                      <h3 className="text-2xl xl:text-3xl font-bold group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <div className="shrink-0 hidden md:block">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--glass-border)] group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300">
                          <BsArrowDownRight className="text-[var(--text-muted)] group-hover:text-accent group-hover:-rotate-45 transition-all duration-300 text-sm" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--text-muted)] text-[15px] leading-[1.8] pl-9 md:pl-14 max-w-[700px]">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
