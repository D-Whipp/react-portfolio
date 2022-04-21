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
                  I was given this project with the task <br />
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
                <a
                  href="https://github.com/lucawic/api-pro"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-subtitle">Github Repository</p>
                </a>
                <a
                  href="https://lucawic.github.io/api-pro/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-subtitle">Deployed Site</p>
                </a>
                <p className="project-p">- Technologies Used -</p>
                <p className="project-p">
                  This was a group project. The Technologies used <br />
                  were HTML5 and CSS3, JavaScript, Materialize, <br />
                  the DOM, API's - we used NPS openweather openLayer <br />
                  Pixabay, JQuery, and JSON.
                </p>
                <p className="project-p">
                  My responsibilities were -
                  <ul>
                    <li className="project-p">creating the wireframe</li>
                    <li className="project-p">
                      researching a new technology to replace Bootstrap
                    </li>
                    <li className="project-p">
                      utilizing the new technology, Materialize
                    </li>
                    <li className="project-p">creating the Front End</li>
                    <li className="project-p">
                      integrating the Front End with the Back End
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          {/* carousel item 8 */}
          {/* Read Me Generator */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <div className="project-img-link">
                <a
                  href="https://github.com/D-Whipp/readme-generator"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Read Me Generator</p>
                  <div className="project-img-setup read_me_gen_img"></div>
                </a>
              </div>

              <div className="github-repo-link">
                <a
                  href="https://github.com/D-Whipp/readme-generator"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-subtitle">Github Repository</p>
                </a>
                <p className="project-subtitle">- Technologies Used -</p>
                <ul>
                  <li className="project-p">JavaScript</li>
                  <li className="project-p">Node.JS</li>
                  <li className="project-p">Inquirer</li>
                  <li className="project-p">FS</li>
                </ul>
                <p className="project-p">
                  Here I built a Node Application which uses <br />
                  Inquirer to prompt user input in the Terminal <br />
                  and FS to take the user input to generate a <br />
                  Readme.md file.
                </p>
              </div>
            </div>
          </div>
          {/* carousel item 9 */}
          {/* Team Profile Generator */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <div className="project-img-link">
                <a
                  href="https://github.com/D-Whipp/team-profile-generator"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Team Profile Generator</p>
                  <div className="project-img-setup team-pro-gen-img"></div>
                </a>
              </div>
              <div className="github-repo-link">
                <a
                  href="https://github.com/D-Whipp/team-profile-generator"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Github Repository</p>
                </a>
                <p className="project-subtitle">- Technologies Used -</p>
                <ul>
                  <li className="project-p">JavaScript</li>
                  <li className="project-p">Node.JS</li>
                  <li className="project-p">Jest</li>
                  <li className="project-p">Inquirer</li>
                </ul>
                <p className="project-p">
                  Using Node and Inquirer this Application interacts <br />
                  with the user in the Terminal. After answering the <br />
                  prompts this app will generate a profile for the <br />
                  team.
                </p>
              </div>
            </div>
          </div>

          {/* carousel item 10 | Express Note Taker | Coming Soon! */}

          {/* carousel item 11 | Employee Tracker */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <div className="project-img-link">
                <a
                  href="https://github.com/D-Whipp/employee-tracker"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Employee Tracker</p>
                  <div className="project-img-setup employee-tracker-img"></div>
                </a>
              </div>

              <div className="github-repo-link">
                <a
                  href="https://github.com/D-Whipp/employee-tracker"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Github Repository</p>
                </a>
                <p className="project-subtitle">- Technologies Used -</p>
                <ul>
                  <li className="project-p">JavaScript</li>
                  <li className="project-p">Node.JS</li>
                  <li className="project-p">SQL</li>
                </ul>
                <p className="project-p">
                  Here we have a Back End App written in JavaScript. <br />
                  Using Node in the Terminal we can interact with a <br />
                  SQL database to keep track of employees.
                </p>
              </div>
            </div>
          </div>

          {/* carousel item 12 | ORM E-Commerce Back-End | Coming Soon! */}

          {/* carousel item 13 | MVC Tech Blog */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <div className="project-img-link">
                <a
                  href="https://stark-reef-58838.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">MVC Tech Blog</p>
                  <div className="project-img-setup mvc-tech-blog-img"></div>
                </a>
              </div>
              <div className="github-repo-link">
                <a
                  href="https://github.com/D-Whipp/the-tech-blog"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Github Repository</p>
                </a>
                <a
                  href="https://stark-reef-58838.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Deployed Site</p>
                </a>
                <p className="project-subtitle">- Technologies Used -</p>
                {/* <ul>
                  <li className="project-p">HTML5</li>
                  <li className="project-p">CSS3</li>
                  <li className="project-p">JavaScript</li>
                  <li className="project-p">Express</li>
                  <li className="project-p">Handlebars</li>
                  <li className="project-p">MySQL2</li>
                  <li className="project-p">Sequelize</li>
                  <li className="project-p">Jest</li>
                </ul> */}
                <p className="project-p">
                  HTML5, CSS3, JavaScript, Express, Handlebars, MySql2, <br />
                  Sequelize, Jest, and BCrypt.
                </p>
                <p className="project-p">
                  Here I used the above technologies to build a Full Stack{" "}
                  <br />
                  CMS style blog. You can create an account. Create and <br />
                  Delete your post as well. Still working on editing a post.
                </p>
              </div>
            </div>
          </div>

          {/* carousel item 14 | Full-Stack Project | Sports Vibes */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <div className="project-img-link">
                <a
                  href="https://cryptic-hamlet-34193.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Sports Vibes</p>
                  <div className="project-img-setup sports-vibes-img"></div>
                </a>
              </div>

              <div className="github-repo-link">
                <a
                  href="https://github.com/seanPatrickArnold/sports-vibes"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Github Repository</p>
                </a>
                <a
                  href="https://cryptic-hamlet-34193.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Deployed Site</p>
                </a>
                <p className="project-subtitle">- Technologies Used -</p>
                <ul>
                  <li className="project-p">Express</li>
                  <li className="project-p">MySQL2</li>
                  <li className="project-p">Handlebars</li>
                  <li className="project-p">Sequelize</li>
                </ul>
                <p className="project-p">
                  A group project where users can create and <br />
                  and link posts together. Other users can then <br />
                  upvote the linked posts based on correlation.
                </p>
                <p className="project-p">
                  My responsibilities included wireframing our website. <br />
                  Researching and implementing a new technology, SASS. <br />
                </p>
              </div>
            </div>
          </div>

          {/* carousel item 15 | Regex Tutorial */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <div className="project-img-link">
                <a
                  href="https://gist.github.com/D-Whipp/d08038c1b2d285ec92cc3c79f496b2ff"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Regex Tutorial</p>
                  <div className="project-img-setup regex-tut-img"></div>
                </a>
              </div>

              <div className="github-repo-link">
                <a
                  href="https://github.com/D-Whipp/regex-tutorial"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Github Repository</p>
                </a>
                <a
                  href="https://gist.github.com/D-Whipp/d08038c1b2d285ec92cc3c79f496b2ff"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Deployed Site</p>
                </a>
                <p className="project-subtitle">- Technologies Used -</p>
                <ul>
                  <li className="project-p">Gist</li>
                </ul>
                <p className="project-p">
                  A Gist Tutorial with the Regex Topic: <br />
                  Matching an HTML Tag.
                </p>
              </div>
            </div>
          </div>

          {/* carousel item 16 | Social Network API | Coming Soon! */}

          {/* carousel item 17 | Budget Tracker */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <div className="project-img-link">
                <a
                  href="https://intense-ravine-29652.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Budget Tracker</p>
                  <div className="project-img-setup budget_tracker_image"></div>
                </a>
              </div>
              <div className="github-repo-link">
                <a
                  href="https://github.com/D-Whipp/budget-tracker"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Github Repository</p>
                </a>
                <a
                  href="https://intense-ravine-29652.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Deployed Site</p>
                </a>
                <p className="project-subtitle">- Technologies Used -</p>
                <ul>
                  <li className="project-p">Express</li>
                  <li className="project-p">Mongoose</li>
                  <li className="project-p">MongoDB</li>
                  <li className="project-p">JavaScript</li>
                  <li className="project-p">Service Worker</li>
                </ul>
                <p className="project-p">
                  Using a Service Worker this app helps <br />
                  it's user keep track of their budget.
                </p>
              </div>
            </div>
          </div>

          {/* carousel item 18 | Book Search Engine */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <div className="project-img-link">
                <a
                  href="https://frozen-journey-26834.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Book Search Engine</p>
                  <div className="project-img-setup book-search-eng-img"></div>
                </a>
              </div>

              <div className="github-repo-link">
                <a
                  href="https://github.com/D-Whipp/book-search-engine"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Github Repository</p>
                </a>
                <a
                  href="https://frozen-journey-26834.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Deployed Site</p>
                </a>
                <p className="project-subtitle">- Technologies Used -</p>
                <ul>
                  <li className="project-p">MongoDB</li>
                  <li className="project-p">Mongoose</li>
                  <li className="project-p">Node.JS</li>
                  <li className="project-p">Express</li>
                  <li className="project-p">GraphQL</li>
                </ul>
                <p className="project-p">
                  Given the HTML and CSS as starter code, <br />
                  I was tasked with writing the controllers <br />
                  for the Back End of this application.
                </p>
              </div>
            </div>
          </div>

          {/* carousel item 18 | Redux Store | Coming Soon! */}

          {/* carousel item 19 | Star Talk | Final Project */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <div className="project-img-link">
                <a
                  href="https://obscure-woodland-80927.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Star Talk</p>
                  <div className="project-img-setup star_talk_image"></div>
                </a>
              </div>

              <div className="github-repo-link">
                <a
                  href="https://github.com/D-Whipp/star-talk"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Github Repository</p>
                </a>
                <a
                  href="https://obscure-woodland-80927.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Deployed Site</p>
                </a>
                <p className="project-subtitle">- Technologies Used -</p>
                <ul>
                  <li className="project-p">MongoDB</li>
                  <li className="project-p">Mongoose</li>
                  <li className="project-p">Express</li>
                  <li className="project-p">React</li>
                  <li className="project-p">GraphQL</li>
                </ul>
                <p className="project-p">
                  Final Project. Here I created a Full Stack <br />
                  Web App where Space Enthusiasts can all <br />
                  come together to discuss everything Space <br />
                  related.
                </p>
              </div>
            </div>
          </div>

          {/* carousel item 20 | Puppy Farm | Vanilla JavaScript Routes */}
          <div className="carousel-item carousel-item-two">
            <div className="slide-size-container">
              <div className="project-img-link">
                <a
                  href="https://github.com/D-Whipp/puppy-farm/tree/main/puppy-farm"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Puppy Farm</p>
                  <p className="project-p">Back End Project</p>
                  <div className="project-img-setup puppy-farm-image"></div>
                </a>
              </div>

              <div className="github-repo-link">
                <a
                  href="https://github.com/D-Whipp/puppy-farm/tree/main/puppy-farm"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="project-title">Github Repository</p>
                </a>

                <p className="project-subtitle">- Technologies Used -</p>
                <ul>
                  <li className="project-p">HTML5</li>
                  <li className="project-p">CSS3</li>
                  <li className="project-p">JavaScript</li>
                  <li className="project-p">JavaScript Routes</li>
                </ul>
                <p className="project-p">
                  I created this project after completing part of a Udemy
                  course. My aim was practicing routes written in vanilla
                  JavaScript. Here I created a custom route that will take users
                  to a specified wiki page.
                </p>
              </div>
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
