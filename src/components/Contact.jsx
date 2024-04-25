import React from 'react'

function Contact() {
  return (
    <div className="container container-main">
      <section className="contact">
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
  )
}

export default Contact