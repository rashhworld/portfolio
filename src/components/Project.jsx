import React from 'react'

function Project() {
  return (
    <div className="container container-main">
      <section className="project">
        <h2 className="text-center text-warning mb-5">OUR PROJECTS</h2>
        <p className="mb-5">Explore a showcase of our past projects and works, each a testament to our creativity, expertise, and commitment to excellence in web design and development. Discover how we've helped businesses like yours thrive in the digital realm through innovative solutions and stunning visual experiences.</p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card border-primary h-100">
              <img src="assets/projects/Screenshot 2024-04-10 171138.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Testfree</h5>
                <p className="card-text">Online free quiz and test making portal.</p>
                <button className="btn btn-primary rounded-0 mt-3">Know More</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-primary h-100">
              <img src="assets/projects/Screenshot 2024-04-10 171814.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Bitasoft</h5>
                <p className="card-text">Tutorials point for modern technologies.</p>
                <button className="btn btn-primary rounded-0 mt-3">Know More</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-primary h-100">
              <img src="assets/projects/Screenshot 2024-04-10 171839.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Syrush Healthcare</h5>
                <p className="card-text">Pharmaceutical sales and service provider.</p>
                <button className="btn btn-primary rounded-0 mt-3">Know More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project