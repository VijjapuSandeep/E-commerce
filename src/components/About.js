import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>About Us</h1>
                        <p className="Lead">
                            An About Us page is an opportunity to introduce your company on your own terms. It’s where potential customers will go to find out why you’re passionate about your products and why they should be, too.
                            A well-crafted About Us page is the key to building trust and loyalty with your customers.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary">Contact Us</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About