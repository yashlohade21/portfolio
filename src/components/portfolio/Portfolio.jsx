import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: "https://github.com/yashlohade21/Travel-and-Toursim-Management-System/blob/master/nbproject/Screenshot%202023-09-16%20193834.png?raw=true",
    title: "Travel and Toursim Management System",
    brief:
      "https://github.com/yashlohade21/Travel-and-Toursim-Management-System",
    github: "https://github.com/yashlohade21",
  },
  {
    id: 2,
    image: "https://github.com/yashlohade21/Travel-and-Toursim-Management-System/blob/master/nbproject/Screenshot%202023-09-15%20211357.png?raw=true",
    title: "Inventory Management System Using Java",
    brief:
      "https://github.com/yashlohade21/InventoryManagementSystem",
    github: "https://github.com/yashlohade21",
  },
  {
    id: 3,
    image: "https://github.com/yashlohade21/Travel-and-Toursim-Management-System/blob/master/nbproject/Screenshot%202023-09-16%20194618.png?raw=true",
    title: "Quiz Application Using Java And MySQl ",
    brief:
      "https://github.com/yashlohade21/Quiz-Application-Using-Java",
    github: "https://github.com/yashlohade21",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, brief }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={brief} className="btn btn-primary">
                  Github
                </a>
              </div>
              <div className="portfolio__item-cta">
                <a href={github} className="btn btn-primary">
                  View More
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
