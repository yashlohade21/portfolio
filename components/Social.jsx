import Link from "next/link"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/yashlohade21" },
    { icon: <FaLinkedin />, path: "https://linkedin.com/in/yash-lohade" },
    { icon: <SiLeetcode />, path: "https://leetcode.com/yashlohade2502/" },
    { icon: <FaHackerrank />, path: "https://www.hackerrank.com/yashlohade2502/" },
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
            );
        })}
    </div>
  )
}

export default Social