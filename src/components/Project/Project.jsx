import "./Project.scss";
import img1 from "../../assets/img/projects/p1.webp";
import img2 from "../../assets/img/projects/p2.webp";
import img3 from "../../assets/img/projects/p3.webp";
import img4 from "../../assets/img/projects/p4.webp";
import img5 from "../../assets/img/projects/p5.webp";
import img6 from "../../assets/img/projects/p6.webp";
import { useState } from "react";
import Social from "../Social/Social";

const Project = () => {
    const [filter, setFilter] = useState("all");
    const [activeButton, setActiveButton] = useState("all");
    const [show, setShow] = useState(false);

  const projects = [
    { id: 1, category: "cat1", image: img1, name: "UI/UX Design" },
    { id: 2, category: "cat2", image: img2, name: "Web Development" },
    { id: 3, category: "cat3", image: img3, name: "Branding" },
    { id: 4, category: "cat2", image: img4, name: "Web Development" },
    { id: 5, category: "cat1", image: img5, name: "UI/UX Design" },
    { id: 6, category: "cat3", image: img6, name: "Branding" },
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
              UI/UX Design
            </button>
            <button
              onClick={() => handleButtonClick("cat2")}
              className="btn-projects"
              style={
                activeButton === "cat2"
                  ? { backgroundColor: "#DD0426", color: "#eff6ee" }
                  : {}
              }>
              Web Development
            </button>
            <button
              onClick={() => handleButtonClick("cat3")}
              className="btn-projects"
              style={
                activeButton === "cat3"
                  ? { backgroundColor: "#DD0426", color: "#eff6ee" }
                  : {}
              }>
              Branding
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
