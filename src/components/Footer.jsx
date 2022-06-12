import React from 'react';
import { Link } from "react-router-dom";
import './footer.css';



const Footer = () => {
    return (
        <>
            <div className="suffix__footer">
                <div className="container">
                    <div className='relative'>
                        <h2> People who are <br /> ready scheduled a demo!</h2>
                        <Link to="/scheduleDemo" className='footer_btn'>Schedule a Demo</Link>
                    </div>
                    <div className="suffix__footer__outer-grid">
                        <div><h3 className='company__brand'>Suffix</h3>
                            <h5>People who are <br /> ready took these courses!</h5>
                        </div>
                        <div className="suffix__footer__inner-grid">
                            <ul className='company__links'>
                                <h3>Links</h3>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/services">Our Services</Link>
                                </li>
                                <li>
                                    <Link to="/clients">Clients</Link>
                                </li>
                                <li>
                                    <Link to="/case">Case Studies</Link>
                                </li>
                            </ul>
                            <ul className='company__links'>
                                <h3>Company</h3>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Contact</li>
                            </ul>
                            <ul className='company__links'>
                                <h3>Get in touch</h3>
                                <li>F1-319 Jeff Heights, Islamabad</li>
                                <li>+1-555-666-5555</li>
                                <li>email@suffix.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p>© 2021 Suffix.com All rights reserved</p>
            </div>
        </>
    );
}

export default Footer;