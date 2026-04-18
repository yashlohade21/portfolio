import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/yashlohade21" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/yash-lohade" },
  { icon: <SiLeetcode />, path: "https://leetcode.com/yashlohade2502/" },
  { icon: <FaHackerrank />, path: "https://www.hackerrank.com/yashlohade2502/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconStyles} hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300`}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
