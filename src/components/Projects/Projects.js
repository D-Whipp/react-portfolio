import React from "react";

function Projects() {
  return (
    // *********** BOOTSTRAP CAROUSEL *********
    <section id="projects">
      {/* <h4>Portfolio</h4> */}
      <div
        id="testimonial-carousel"
        className="content-container carousel slide"
        data-ride="false"
      >
        <div className="carousel-inner">
          {/* carousel item 1 */}
          {/* Code Refactor */}
          <div className="carousel-item active">
            <div className="horiseon-container">
              <a
                href="https://d-whipp.github.io/first-bootcamp-challenge/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Horiseon</p>
                <div className="horsieon_image"></div>
              </a>
            </div>
          </div>
          {/* carousel item 2 */}
          {/* Professional Portfolio */}
          <div className="carousel-item carousel-item-three">
            <div className="horiseon-container">
              <a
                href="https://d-whipp.github.io/second-bootcamp-challenge/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Static Portfolio</p>
                <div className="static_port_image"></div>
              </a>
            </div>
          </div>
          {/* carousel item 3 */}
          {/* Password Generator */}
          <div className="carousel-item carousel-item-three">
            <div className="horiseon-container">
              <a
                href="https://d-whipp.github.io/third-bootcamp-challenge/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Password Generator</p>
                <div className="password_gen"></div>
              </a>
            </div>
          </div>
          {/* carousel item 4 */}
          {/* Code Quiz */}
          <div className="carousel-item carousel-item-three">
            <div className="horiseon-container">
              <a
                href="https://d-whipp.github.io/fourth-bootcamp-challenge/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Code Quiz</p>
                <div className="code_quiz"></div>
              </a>
            </div>
          </div>
          {/* carousel item 5 */}
          {/* Work Day Scheduler */}
          <div className="carousel-item carousel-item-two">
            <div className="horiseon-container">
              <a
                href="https://d-whipp.github.io/fifth-bootcamp-challenge/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Work Day Scheduler</p>
                <div className="work-day-scheduler"></div>
              </a>
            </div>
          </div>

          {/* carousel item # */}
          <div className="carousel-item carousel-item-two">
            <div className="horiseon-container">
              <a
                href="https://lucawic.github.io/api-pro/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Camping Buddy</p>
                <div className="camping_buddy_image"></div>
              </a>
            </div>
          </div>
          {/* carousel item # */}
          <div className="carousel-item carousel-item-two">
            <div className="horiseon-container">
              <a
                href="https://d-whipp.github.io/git-it-done/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Git-It-Done</p>
                <div className="git_it_done_image"></div>
              </a>
            </div>
          </div>
          {/* carousel item # */}
          <div className="carousel-item carousel-item-two">
            <div className="horiseon-container">
              <a
                href="https://intense-ravine-29652.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Budget Tracker</p>
                <div className="budget_tracker_image"></div>
              </a>
            </div>
          </div>
          {/* carousel item # */}
          <div className="carousel-item carousel-item-two">
            <div className="horiseon-container">
              <a
                href="https://d-whipp.github.io/food-festival/index.html"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Food Festival</p>
                <div className="food_festival_image"></div>
              </a>
            </div>
          </div>
          {/* carousel item # */}
          <div className="carousel-item carousel-item-two">
            <div className="horiseon-container">
              <a
                href="https://obscure-woodland-80927.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Star Talk</p>
                <div className="star_talk_image"></div>
              </a>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#testimonial-carousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#testimonial-carousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default Projects;
