import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import ParticleBackground from "@/components/ParticleBackground";
import { ThemeProvider, ThemeScript } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Yash Lohade | Software Developer",
  description:
    "Software Developer specializing in full-stack development, cloud computing, and building scalable applications. Experienced with ASP.NET Core, React, Next.js, FastAPI, and AWS.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} animated-bg`}>
        <ThemeProvider>
          <ParticleBackground />
          <Header />
          <div className="xl:pl-[50px]">
            <StairTransition />
            <PageTransition>{children}</PageTransition>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
