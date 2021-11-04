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

// ************ BOOTSTRAP CARDS ************

// <div className="card-deck mb-3 text-center">
//       <div className="card mb-4 box-shadow">
//         <div className="card-header">
//           <h4 className="my-0 font-weight-normal">Free</h4>
//         </div>
//         <div className="card-body">
//           <h1 className="card-title pricing-card-title">
//             $0 <small className="text-muted">/ mo</small>
//           </h1>
//           <ul className="list-unstyled mt-3 mb-4">
//             <li>10 users included</li>
//             <li>2 GB of storage</li>
//             <li>Email support</li>
//             <li>Help center access</li>
//           </ul>
//           <button
//             type="button"
//             className="btn btn-lg btn-block btn-outline-primary"
//           >
//             Sign up for free
//           </button>
//         </div>
//       </div>
//       <div className="card mb-4 box-shadow">
//         <div className="card-header">
//           <h4 className="my-0 font-weight-normal">Pro</h4>
//         </div>
//         <div className="card-body">
//           <h1 className="card-title pricing-card-title">
//             $15 <small className="text-muted">/ mo</small>
//           </h1>
//           <ul className="list-unstyled mt-3 mb-4">
//             <li>20 users included</li>
//             <li>10 GB of storage</li>
//             <li>Priority email support</li>
//             <li>Help center access</li>
//           </ul>
//           <button type="button" className="btn btn-lg btn-block btn-primary">
//             Get started
//           </button>
//         </div>
//       </div>
//       <div className="card mb-4 box-shadow">
//         <div className="card-header">
//           <h4 className="my-0 font-weight-normal">Enterprise</h4>
//         </div>
//         <div className="card-body">
//           <h1 className="card-title pricing-card-title">
//             $29 <small className="text-muted">/ mo</small>
//           </h1>
//           <ul className="list-unstyled mt-3 mb-4">
//             <li>30 users included</li>
//             <li>15 GB of storage</li>
//             <li>Phone and email support</li>
//             <li>Help center access</li>
//           </ul>
//           <button type="button" className="btn btn-lg btn-block btn-primary">
//             Contact us
//           </button>
//         </div>
//       </div>
//     </div>
