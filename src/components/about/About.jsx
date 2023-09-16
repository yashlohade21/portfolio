import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="About Yash image" />
          </div>          
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                Diploma In Computer Technology 2019-2021 75%
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                Bachelors In Engineering Computer Engineering
                Year :- 2025 
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                4+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>
          <p>
              Software engineer with a strong track record of developing and maintaining web and mobile applications using
              ReactJS, Java, PHP, Node.js, Express.js, MySQL, and AWS. Proven ability to build innovative and
              user-friendly products with a focus on CI/CD practices.         
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
          <br />
          <br />
        </div>
      </div>
    </section>
  );
};

export default About;
