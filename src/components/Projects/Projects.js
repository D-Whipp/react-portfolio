import React from "react";

function Projects() {
  return (
    // *********** BOOTSTRAP CAROUSEL *********
    <section id="projects">
      <div
        id="testimonial-carousel"
        className="content-container carousel slide"
        data-ride="false"
      >
        <div className="carousel-inner">
          {/* carousel 1 */}
          <div className="carousel-item active">
            <div className="horiseon-container">
              <a
                href="https://d-whipp.github.io/first-bootcamp-challenge/"
                target="_blank"
              >
                <p className="project-title">Horiseon</p>
                <div className="horsieon_image"></div>
              </a>
            </div>
          </div>
          {/* carousel 2 */}
          <div className="carousel-item carousel-item-two">
            <div className="horiseon-container">
              <a href="https://lucawic.github.io/api-pro/" target="_blank">
                <p className="project-title">Camping Buddy</p>
                <div className="camping_buddy_image"></div>
              </a>
            </div>
          </div>
          {/* carousel 3 */}
          <div className="carousel-item carousel-item-three">
            <div className="horiseon-container">
              <a
                href="https://d-whipp.github.io/second-bootcamp-challenge/"
                target="_blank"
              >
                <p className="project-title">Static Portfolio</p>
                <div className="static_port_image"></div>
              </a>
            </div>
          </div>
          {/* carousel 4 */}
          <div className="carousel-item carousel-item-two">
            <div className="horiseon-container">
              <a href="https://d-whipp.github.io/git-it-done/" target="_blank">
                <p className="project-title">Git-It-Done</p>
                <div className="git_it_done_image"></div>
              </a>
            </div>
          </div>
          {/* carousel 5 */}
          <div className="carousel-item carousel-item-two">
            <div className="horiseon-container">
              <a
                href="https://intense-ravine-29652.herokuapp.com/"
                target="_blank"
              >
                <p className="project-title">Budget Tracker</p>
                <div className="budget_tracker_image"></div>
              </a>
            </div>
          </div>
          {/* carousel 6 */}
          <div className="carousel-item carousel-item-two">
            <div className="horiseon-container">
              <a
                href="https://d-whipp.github.io/food-festival/index.html"
                target="_blank"
              >
                <p className="project-title">Food Festival</p>
                <div className="food_festival_image"></div>
              </a>
            </div>
          </div>
          {/* carousel 7 */}
          <div className="carousel-item carousel-item-two">
            <div className="horiseon-container">
              <a
                href="https://obscure-woodland-80927.herokuapp.com/"
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
