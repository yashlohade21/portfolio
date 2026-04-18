"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

// Inline script to prevent flash — runs before React hydrates
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch(e) {}
})();
`;

export const ThemeScript = () => (
  <script dangerouslySetInnerHTML={{ __html: themeScript }} />
);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read what the inline script already set
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }, [theme]);

  if (!mounted) return <>{children}</>;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
