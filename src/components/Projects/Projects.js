import React from "react";
// import resized-800W-px-horiseon-Projects.jpg from "../../images/project-images";

function Projects() {
  return (
    // *********** BOOTSTRAP CAROUSEL *********
    <section id="projects">
      <div
        id="testimonial-carousel"
        className="content-container carousel slide"
        data-ride="false"
        // data-ride="carousel"
      >
        <div className="carousel-inner">
          {/* carousel item 1 */}
          {/* Code Refactor */}
          <div className="carousel-item active">
            <div className="slide-size-container">
              <div className="project-img-link">
                <a
                  href="https://d-whipp.github.io/horiseon-code-refactor/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <h4 className="project-title">Horiseon: Code Refactor</h4>
                  <div className="project-img-setup horiseon_image"></div>
                </a>
              </div>

              <div className="github-repo-link">
                <a
                  href="https://github.com/D-Whipp/horiseon-code-refactor"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-subtitle">Github Repository</p>
                </a>
                <a
                  href="https://d-whipp.github.io/horiseon-code-refactor/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-subtitle">Deployed Site</p>
                </a>
                <p className="project-subtitle">- Technologies Used -</p>
                <ul>
                  <li className="project-p">HTML5</li>
                  <li className="project-p">CSS3</li>
                  <li className="project-p">Refactor</li>
                </ul>
                <p className="project-p">
                  I was handed this project with the task <br />
                  of <b>Refactoring the code</b>. I went <br />
                  through the provided code and fixed broken <br />
                  links, made the code <i>DRY</i>, and{" "}
                  <i>
                    fixed <br />
                    some css punctuation
                  </i>
                  .
                </p>
              </div>
            </div>
          </div>
          {/* carousel item 2 */}
          {/* Professional Portfolio */}
          <div className="carousel-item carousel-item-three">
            <div className="slide-size-container">
              <div className="project-img-link">
                <a
                  href="https://d-whipp.github.io/static-portfolio/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Static Portfolio</p>
                  <div className="project-img-setup static_port_image"></div>
                </a>
              </div>

              <div className="github-repo-link">
                <a
                  href="https://github.com/D-Whipp/static-portfolio"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-subtitle">Github Repository</p>
                </a>
                <a
                  href="https://d-whipp.github.io/static-portfolio/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-subtitle">Deployed Site</p>
                </a>
                <p className="project-subtitle">- Technologies Used -</p>
                <ul>
                  <li className="project-p">HTML5</li>
                  <li className="project-p">CSS3</li>
                </ul>
                <p className="project-p">
                  I was tasked with creating a static portfolio <br />
                  from scratch. Using newly acquired skills in <br />
                  HTML5 and CSS3 I build this site from scratch.
                </p>
              </div>
            </div>
          </div>
          {/* carousel item 3 */}
          {/* Password Generator */}
          <div className="carousel-item carousel-item-three">
            <div className="slide-size-container">
              <div className="project-img-link">
                <a
                  href="https://d-whipp.github.io/js-password-generator/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Password Generator</p>
                  <div className="project-img-setup password_gen"></div>
                </a>
              </div>

              <div className="github-repo-link">
                <a
                  href="https://github.com/D-Whipp/js-password-generator"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-subtitle">Github Repository</p>
                </a>
                <a
                  href="https://d-whipp.github.io/js-password-generator/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-subtitle">Deployed Site</p>
                </a>
                <p className="project-subtitle">- Technologies Used -</p>
                <ul>
                  <li className="project-p">HTML5</li>
                  <li className="project-p">CSS3</li>
                  <li className="project-p">JavaScript</li>
                </ul>
                <p className="project-p">
                  Here I was given the HTML and CSS <br />
                  and tasked with writing the JavaScript. <br />
                  Using Window Prompts, I wrote code that <br />
                  will interact with the user to create a <br />
                  random password.
                </p>
              </div>
            </div>
          </div>
          {/* carousel item 4 */}
          {/* Code Quiz | Coming Soon! */}

          {/* carousel item 5 */}
          {/* Work Day Scheduler */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <div className="project-img-link">
                <a
                  href="https://d-whipp.github.io/work-day-scheduler/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Work Day Scheduler</p>
                  <div className="project-img-setup work-day-scheduler"></div>
                </a>
              </div>

              <div className="github-repo-link">
                <a
                  href="https://github.com/D-Whipp/work-day-scheduler"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-subtitle">Github Repository</p>
                </a>
                <a
                  href="https://d-whipp.github.io/work-day-scheduler/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-subtitle">Deployed Site</p>
                </a>
                <p className="project-subtitle">- Technologies Used -</p>
                <ul>
                  <li className="project-p">HTML5</li>
                  <li className="project-p">CSS3</li>
                  <li className="project-p">JavaScript</li>
                </ul>
                <p className="project-p">
                  Here I build a scheduling app to help it's user's <br />
                  keep track of their busy day.
                </p>
              </div>
            </div>
          </div>

          {/* carousel item 6 */}
          {/* Weather Dashboard | Coming Soon! */}

          {/* carsousel item 7 */}
          {/* Interactive Front-End Project | Camping Buddy */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <div className="project-img-link">
                <a
                  href="https://lucawic.github.io/api-pro/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Camping Buddy</p>
                  <div className="project-img-setup camping_buddy_image"></div>
                </a>
              </div>

              <div className="github-repo-link">
                <p className="project-subtitle">No Repository</p>
                <a
                  href="https://lucawic.github.io/api-pro/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-subtitle">Deployed Site</p>
                </a>
                <ul>
                  <li className="project-p">HMTL5</li>
                  <li className="project-p">CSS3</li>
                  <li className="project-p">JavaScript</li>
                  <li className="project-p">Third Party API</li>
                </ul>
              </div>
            </div>
          </div>

          {/* carousel item 8 */}
          {/* Read Me Generator */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <p className="project-title">Read Me Generator</p>
              <a
                href="https://github.com/D-Whipp/readme-generator"
                rel="noreferrer"
                target="_blank"
              >
                <p className="project-subtitle">Github Repository</p>
              </a>
              <a
                href="https://github.com/D-Whipp/readme-generator"
                rel="noreferrer"
                target="_blank"
              >
                <div className="project-img-setup read_me_gen_img"></div>
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
                <div className="project-img-setup team-pro-gen-img"></div>
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
                <div className="project-img-setup employee-tracker-img"></div>
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
                <div className="project-img-setup mvc-tech-blog-img"></div>
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
                <div className="project-img-setup sports-vibes-img"></div>
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
                <div className="project-img-setup regex-tut-img"></div>
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
                <div className="project-img-setup budget_tracker_image"></div>
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
                <div className="project-img-setup book-search-eng-img"></div>
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
                <div className="project-img-setup star_talk_image"></div>
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
