"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    num: 1,
    suffix: "+",
    text: "Year of Experience",
  },
  {
    num: 35,
    suffix: "+",
    text: "REST Endpoints Built",
  },
  {
    num: 500,
    suffix: "+",
    text: "Daily Users Served",
  },
  {
    num: 1,
    suffix: "",
    text: "AWS Certification",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start glass-card p-4 cursor-default"
                key={index}
              >
                <div className="gradient-text text-4xl xl:text-6xl font-extrabold">
                  <CountUp end={item.num} duration={5} delay={2} />
                  {item.suffix}
                </div>
                <p
                  className={`${
                    item.text.length < 15
                      ? "max-w-[100px]"
                      : "max-w-[150px]"
                  } leading-snug text-[var(--text-secondary)]`}
                >
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
