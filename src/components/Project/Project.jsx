import "./Project.scss";
// import img1 from "../../assets/img/projects/p1.webp";
// import img2 from "../../assets/img/projects/p2.webp";
// import img3 from "../../assets/img/projects/p3.webp";
// import img4 from "../../assets/img/projects/p4.webp";
// import img5 from "../../assets/img/projects/p5.webp";
// import img6 from "../../assets/img/projects/p6.webp";

import img1 from "../../assets/img/projects/sophie bluel/sophie bluel1.png";
import img2 from "../../assets/img/projects/kasa/kasa1.png";
import img3 from "../../assets/img/projects/ohmyfood/ohmyfood1.png";
import img4 from "../../assets/img/projects/netprime/netprime1.png";
import img5 from "../../assets/img/projects/portfolio/portfolio2.png";
import img6 from "../../assets/img/projects/cv/CV.png"


import { useState } from "react";
import Social from "../Social/Social";

const Project = () => {
    const [filter, setFilter] = useState("all");
    const [activeButton, setActiveButton] = useState("all");
    const [show, setShow] = useState(true);

  const projects = [
    { id: 1, category: "cat2", image: img1, name: "Sophie Bluel",  },
    { id: 2, category: "cat3", image: img2, name: "Kasa",  },
    { id: 3, category: "cat1", image: img3, name: "OhmyFood",  },
    { id: 4, category: "cat2", image: img4, name: "NetPrime",   },
    { id: 5, category: "cat2", image: img5, name: "Portfolio #1",  },
    { id: 6, category: "cat1", image: img6, name: "CV", },
  ];

  const filteredProjects = projects.filter((project) =>
    filter === "all" ? true : project.category === filter
  );

  const handleButtonClick = (category) => {
    setFilter(category);
    setActiveButton(category);
    setShow(!show);
  };

  return (
    <section className="projects">
      <div className="projects__container">
        <nav className="projectsNav">
          <ul>
            <button
              onClick={() => handleButtonClick("all")}
              style={
                activeButton === "all"
                  ? { backgroundColor: "#DD0426", color: "#eff6ee" }
                  : {}
              }
              className="btn-projects">
              Tous
            </button>
            <button
              onClick={() => handleButtonClick("cat1")}
              className="btn-projects"
              style={
                activeButton === "cat1"
                  ? { backgroundColor: "#DD0426", color: "#eff6ee" }
                  : {}
              }>
              Html / Css
            </button>
            <button
              onClick={() => handleButtonClick("cat2")}
              className="btn-projects"
              style={
                activeButton === "cat2"
                  ? { backgroundColor: "#DD0426", color: "#eff6ee" }
                  : {}
              }>
              Html / CSS / JavaScript
            </button>
            <button
              onClick={() => handleButtonClick("cat3")}
              className="btn-projects"
              style={
                activeButton === "cat3"
                  ? { backgroundColor: "#DD0426", color: "#eff6ee" }
                  : {}
              }>
              React / Vitejs
            </button>
          </ul>
        </nav>

        <div className="projects__container__image">
          <div className="projectsImage">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project">
                <img src={project.image} alt="my projects" />
                <h4>{project.name}</h4>
                <div className="project__overlay">
                  <div className="project__overlay__content">
                    <h3>{project.name}</h3>
                    <a href="#" className="details">
                      View Details
                    </a>
                    <Social />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
