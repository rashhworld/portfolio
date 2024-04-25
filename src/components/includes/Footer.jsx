import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="container text-light">
                <div className="row g-3 pt-5 pb-3">
                    <div className="col-md-5">
                        <h5 className="mb-4">RASHH<span className="text-warning"> WORLD</span></h5>
                        <p>At RashhWorld, we breathe life into pixels, transforming visions into captivating digital experiences. As a premier web designing and development company, we pride ourselves on our commitment to innovation, creativity, and technical prowess.</p>
                    </div>
                    <div className="col-md-2">
                        <h5 className="mb-4">Quick <span className="text-warning">Links</span></h5>
                        <ul className="list-unstyled">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/service">Our Services</Link></li>
                            <li><Link to="/project">Our Projects</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-4">Quick <span className="text-warning">Contact</span></h5>
                        <ul className="list-unstyled">
                            <li>Cuttack, Odisha, India</li>
                            <li>rashhworld@hotmail.com</li>
                            <li>91 7008862618</li>
                            <li>91 8117057802</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5 className="mb-4">Our <span className="text-warning">Social</span></h5>
                        <ul className="list-unstyled">
                            <li><a href="https://bit.ly/3FDjwwx" target="_blank">Github</a></li>
                            <li><a href="https://bit.ly/3XR5TSH" target="_blank">LinkedIn</a></li>
                            <li><a href="https://bit.ly/3D7LkYO" target="_blank">Instagram</a></li>
                            <li><a href="https://bit.ly/44Dxed4" target="_blank">Youtube</a></li>
                        </ul>
                    </div>
                    <hr />
                    <p className="text-center">Copyright © 2024 by Rashhworld</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer