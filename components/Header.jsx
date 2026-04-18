"use client";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Desktop: vertical sidebar on left, fully transparent */}
      <aside className="hidden xl:flex fixed left-0 top-0 bottom-0 z-50 w-[50px] flex-col items-center justify-between py-8">
        <Nav />
        <motion.button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-accent transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "dark" ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiSun className="text-lg" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiMoon className="text-lg" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </aside>

      {/* Mobile: top bar, no "Yash" logo */}
      <header className="xl:hidden sticky top-0 z-50 py-4 text-[var(--text-primary)]">
        <div className="container mx-auto flex justify-between items-center">
          <motion.button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-accent transition-all duration-300"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun className="text-base" /> : <FiMoon className="text-base" />}
          </motion.button>
          <MobileNav />
        </div>
      </header>
    </>
  );
};

export default Header;
