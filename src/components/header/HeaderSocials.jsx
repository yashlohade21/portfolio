import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/yash-lohade/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/yashlohade21">
        <FaGithub />
      </a>
      <a href="https://www.hackerrank.com/yashlohade2502">
        <FaHackerrank />
      </a>
    </div>
  );
};

export default HeaderSocials;
