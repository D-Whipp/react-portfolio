import React from "react";

function Projects() {
  return (
    // <h4>Projects</h4>
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
            <div className="slide-size-container">
              <a
                href="https://d-whipp.github.io/first-bootcamp-challenge/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Horiseon</p>
                {/* <div className="horsieon_image"></div> */}
                <div className="slide-setup horiseon_image"></div>
              </a>
            </div>
          </div>
          {/* carousel item 2 */}
          {/* Professional Portfolio */}
          <div className="carousel-item carousel-item-three">
            <div className="slide-size-container">
              <a
                href="https://d-whipp.github.io/second-bootcamp-challenge/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Static Portfolio</p>
                <div className="slide-setup static_port_image"></div>
              </a>
            </div>
          </div>
          {/* carousel item 3 */}
          {/* Password Generator */}
          <div className="carousel-item carousel-item-three">
            <div className="slide-size-container">
              <a
                href="https://d-whipp.github.io/third-bootcamp-challenge/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Password Generator</p>
                <div className="slide-setup password_gen"></div>
              </a>
            </div>
          </div>
          {/* carousel item 4 */}
          {/* Code Quiz */}
          {/* <div className="carousel-item carousel-item-three">
            <div className="slide-size-container">
              <a
                href="https://d-whipp.github.io/fourth-bootcamp-challenge/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Code Quiz</p>
                <div className="slide-setup code_quiz"></div>
              </a>
            </div>
          </div> */}
          {/* carousel item 5 */}
          {/* Work Day Scheduler */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <a
                href="https://d-whipp.github.io/fifth-bootcamp-challenge/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Work Day Scheduler</p>
                <div className="slide-setup work-day-scheduler"></div>
              </a>
            </div>
          </div>

          {/* carousel item 6 */}
          {/* Weather Dashboard | Coming Soon! */}

          {/* carsousel item 7 */}
          {/* Interactive Front-End Project | Camping Buddy */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <a
                href="https://lucawic.github.io/api-pro/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Camping Buddy</p>
                <div className="slide-setup camping_buddy_image"></div>
              </a>
            </div>
          </div>

          {/* carousel item 8 */}
          {/* Read Me Generator */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <a
                href="https://github.com/D-Whipp/readme-generator"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Read Me Generator</p>
                <div className="slide-setup read_me_gen_img"></div>
              </a>
            </div>
          </div>
          {/* carousel item 9 */}
          {/* Team Profile Generator */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <a
                href="https://github.com/D-Whipp/team-profile-generator"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Team Profile Generator</p>
                <div className="slide-setup team-pro-gen-img"></div>
              </a>
            </div>
          </div>

          {/* carousel item 10 | Express Note Taker | Coming Soon! */}

          {/* carousel item 11 | Employee Tracker */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <a
                href="https://github.com/D-Whipp/employee-tracker"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Employee Tracker</p>
                <div className="slide-setup employee-tracker-img"></div>
              </a>
            </div>
          </div>

          {/* carousel item 12 | ORM E-Commerce Back-End | Coming Soon! */}

          {/* carousel item 13 | MVC Tech Blog */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <a
                href="https://stark-reef-58838.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">MVC Tech Blog</p>
                <div className="slide-setup mvc-tech-blog-img"></div>
              </a>
            </div>
          </div>

          {/* carousel item 14 | Full-Stack Project | Sports Vibes */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <a
                href="https://cryptic-hamlet-34193.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Sports Vibes</p>
                <div className="slide-setup sports-vibes-img"></div>
              </a>
            </div>
          </div>

          {/* carousel item 15 | Regex Tutorial */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <a
                href="https://gist.github.com/D-Whipp/d08038c1b2d285ec92cc3c79f496b2ff"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Regex Tutorial</p>
                <div className="slide-setup regex-tut-img"></div>
              </a>
            </div>
          </div>

          {/* carousel item 16 | Social Network API | Coming Soon! */}

          {/* carousel item 17 | Budget Tracker */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <a
                href="https://intense-ravine-29652.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Budget Tracker</p>
                <div className="slide-setup budget_tracker_image"></div>
              </a>
            </div>
          </div>

          {/* carousel item 18 | Book Search Engine */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <a
                href="https://frozen-journey-26834.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Book Search Engine</p>
                <div className="slide-setup book-search-eng-img"></div>
              </a>
            </div>
          </div>

          {/* carousel item 18 | Redux Store | Coming Soon! */}

          {/* carousel item 19 | Star Talk | Final Project */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <a
                href="https://obscure-woodland-80927.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-title">Star Talk</p>
                <div className="slide-setup star_talk_image"></div>
              </a>
            </div>
          </div>
        </div>
        {/* carousel control buttons */}
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
