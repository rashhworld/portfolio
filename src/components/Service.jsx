import React from 'react'

function Service() {
  return (
    <div className="container container-main">
      <section className="service">
        <h2 className="text-center text-warning mb-5">OUR SERVICES</h2>
        <p className="mb-5">Our service is synonymous with excellence, offering a comprehensive range of digital solutions tailored to meet your unique needs and propel your online success. From captivating web designs to reliable hosting solutions, we're your trusted partner in the digital realm.</p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card border-primary h-100">
              <img src="assets/services/static.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">STATIC WEB DESIGNING</h5>
                <p className="card-text">Crafting timeless digital experiences with elegant design and seamless functionality to showcase your brand's essence and offerings around globe.</p>
                <button className="btn btn-primary rounded-0 mt-3">Know More</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-primary h-100">
              <img src="assets/services/dynamic.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">DYNAMIC WEB DESIGNING</h5>
                <p className="card-text">Elevating user engagement and interaction through dynamic elements and personalized experiences tailored to your brand's evolving needs.</p>
                <button className="btn btn-primary rounded-0 mt-3">Know More</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-primary h-100">
              <img src="assets/services/ecommerce.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">ECOMMERCE WEB DESIGNING</h5>
                <p className="card-text">Creating immersive online storefronts that drive conversions and enhance customer satisfaction with intuitive navigation and secure payment gateways.</p>
                <button className="btn btn-primary rounded-0 mt-3">Know More</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-primary h-100">
              <img src="assets/services/support.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">SUPPORT & EXTENSIONS</h5>
                <p className="card-text">Providing comprehensive support and innovative extensions to optimize your website's performance, ensuring seamless functionality and scalability.</p>
                <button className="btn btn-primary rounded-0 mt-3">Know More</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-primary h-100">
              <img src="assets/services/hosting.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">DOMAIN & HOSTING SOLUTION</h5>
                <p className="card-text">Offering reliable domain registration and hosting solutions backed by robust infrastructure to ensure maximum uptime and security for your online presence.</p>
                <button className="btn btn-primary rounded-0 mt-3">Know More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service