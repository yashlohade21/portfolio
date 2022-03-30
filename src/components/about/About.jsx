import "./about.css";
import About1 from "../../img/about.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={About1}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I am a Software Engineer with a 2 Years Experience in PHP, Html 5, Bootstrap, MySQL, Laravel, WordPress, E commerce Website And Reactjs. I develop responsive websites  . I can develop any kind of Web Applications and Website. If you are looking for a professional who can handle your work elegantly then I am here with my all skills. Please do contact me to share your projects.
        </p>
      </div>
    </div>
  );
};

export default About;
