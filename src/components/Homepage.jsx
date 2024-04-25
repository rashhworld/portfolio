import React from 'react'

function Homepage(props) {
  return (
    <>
      <div className="banner position-relative d-flex align-items-center justify-content-center" ref={props.homeRef}>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <div className="position-relative z-1 text-center text-white py-4">
          <h1>Welcome to Rashh World</h1>
          <h5 className="my-4">Unlock Your Digital Potential</h5>
          <button className="btn btn-outline-light mt-4" onClick={() => props.scrollToDiv('about')}>Explore More</button>
        </div>
      </div>
      <div className="container">
        <section className="about" ref={props.aboutRef}>
          <h2 className="text-center text-warning mb-5">ABOUT US</h2>
          <p>At RashhWorld, we breathe life into pixels, transforming visions into captivating digital experiences. As a premier web designing and development company, we pride ourselves on our commitment to innovation, creativity, and technical prowess.</p>
          <p><strong>Our Mission</strong></p>
          <p>Our mission is simple yet profound: to empower businesses and individuals with cutting-edge digital solutions that elevate their online presence and drive success in the digital realm. We believe in leveraging the power of technology to craft solutions that not only meet but exceed the expectations of our clients.</p>
          <p><strong>Our Approach</strong></p>
          <p>At RashhWorld, we understand that every project is unique, requiring a tailored approach to achieve optimal results. Our team of skilled designers, developers, and strategists work closely with each client to understand their goals, challenges, and vision. Whether it's designing a stunning website, developing a robust web application, or creating a seamless user experience, we combine creativity with technical expertise to deliver solutions that make an impact.</p>
          <p><strong>What Sets Us Apart</strong></p>
          <ul>
            <li>Innovative Designs: We stay ahead of the curve by embracing the latest design trends and technologies, ensuring that our clients' websites stand out in a crowded digital landscape.</li>
            <li>Custom Solutions: We don't believe in one-size-fits-all solutions. Every project we undertake is customized to meet the unique needs and objectives of our clients.</li>
            <li>Transparent Communication: We believe in open and transparent communication every step of the way, keeping our clients informed and involved throughout the project lifecycle.</li>
            <li>Commitment to Excellence: We are passionate about what we do, and it shows in the quality of our work. From concept to execution, we strive for excellence in everything we do.</li>
          </ul>
          <p><strong>Let's Build Something Extraordinary</strong></p>
          <p>Whether you're a small startup or a large enterprise, we're here to help you unlock the full potential of the digital world. Get in touch with us today and let's embark on a journey to digital excellence together. Welcome to RashhWorld, where dreams become digital reality.</p>
        </section>
        <section className="service" ref={props.serviceRef}>
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
        <section className="project" ref={props.projectRef}>
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
        <section className="contact" ref={props.contactRef}>
          <h2 className="text-center text-warning mb-5">CONTACT US</h2>
          <p className="mb-5">Connect with us today to discuss your project requirements or inquire about our services. Our team is ready to assist you in bringing your digital vision to life. You can can share your feedback and suggestions right through the contact form.</p>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.0865864621196!2d86.10951911030605!3d20.37931950968961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a197bad0c279d8d%3A0xe4a9e89395ecc43c!2sRashhWorld!5e0!3m2!1sen!2sin!4v1712761959660!5m2!1sen!2sin" height="100%" width="100%" title="rashhworld-map-location"></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card rounded-0">
                <div className="card-body">
                  <form action="" className="row g-3">
                    <div className="col-md-12">
                      <label htmlFor="userName">Enter Your Name</label>
                      <input type="text" className="form-control" id="userName" name="userName" />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="userEmail">Enter Your Email</label>
                      <input type="text" className="form-control" id="userEmail" name="userEmail" />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="userMessage">Enter Your Message</label>
                      <textarea className="form-control" id="userMessage" name="userMessage" />
                    </div>
                    <div className="text-center mt-5">
                      <button className="btn btn-warning rounded-0">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Homepage