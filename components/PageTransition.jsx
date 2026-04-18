"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.8, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed top-0 pointer-events-none z-30"
          style={{ background: "var(--bg-primary)" }}
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
