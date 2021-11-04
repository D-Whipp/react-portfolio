import React from "react";

function Projects() {
  return (
    <div className="card-deck mb-3 text-center">
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Free</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            $0 <small className="text-muted">/ mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>10 users included</li>
            <li>2 GB of storage</li>
            <li>Email support</li>
            <li>Help center access</li>
          </ul>
          <button
            type="button"
            className="btn btn-lg btn-block btn-outline-primary"
          >
            Sign up for free
          </button>
        </div>
      </div>
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Pro</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            $15 <small className="text-muted">/ mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>20 users included</li>
            <li>10 GB of storage</li>
            <li>Priority email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-primary">
            Get started
          </button>
        </div>
      </div>
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Enterprise</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            $29 <small className="text-muted">/ mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>30 users included</li>
            <li>15 GB of storage</li>
            <li>Phone and email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-primary">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;

// <article id="my-work" className="article-card">
// <h3 class="width-s">Work</h3>
// <div class="work-img-container">
//   <div class="primary-img">
//     <a href="https://d-whipp.github.io/first-bootcamp-challenge/">
//       <h4>Horiseon Project</h4>
//       <img src="./assets/images/horiseon-project.png" alt="" />
//     </a>
//   </div>
//   <div class="flex-container">
//     <div class="work-img">
//       <a href="https://d-whipp.github.io/run-buddy/">
//         <h4>Run Buddy</h4>
//         <img
//           src="./assets/images/run-buddy-project.png"
//           alt="Run Buddy"
//         />
//       </a>
//     </div>
//     <div class="work-img">
//       <a href="https://lucawic.github.io/api-pro/">
//         <h4>Camping Buddy</h4>
//         <img
//           src="./assets/images/campingBuddyThumbnail.png"
//           alt="Camping Buddy"
//         />
//       </a>
//     </div>
//     <div class="work-img">
//       <a href="https://cryptic-hamlet-34193.herokuapp.com/">
//         <h4>Sports Vibes</h4>
//         <img
//           src="./assets/images/SportsVibes.png"
//           alt="sports vibes screenshot"
//         />
//       </a>
//     </div>
//     <div class="work-img">
//       <img src="./assets/images/placeholder-img.png" alt="" />
//     </div>
//   </div>
// </div>
// </article>
