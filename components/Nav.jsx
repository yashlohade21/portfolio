"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col items-center gap-6 pt-8">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={index}
            className="relative group"
          >
            {isActive && (
              <motion.div
                layoutId="activeSidebar"
                className="absolute -left-[16px] top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-gradient-to-b from-[#fbbf24] to-[#f97316]"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span
              className={`text-[11px] font-medium tracking-wide uppercase transition-all duration-300 [writing-mode:vertical-lr] rotate-180 ${
                isActive
                  ? "gradient-text"
                  : "text-[var(--text-muted)] group-hover:text-accent"
              }`}
            >
              {link.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
