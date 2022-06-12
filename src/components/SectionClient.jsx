import React from 'react';
import './sectionClient.css';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.png';
import logo6 from '../images/logo6.png';



const SectionClient = () => {
    return (
        <>
            <div className="container">
                <div className='suffix__section-client'>
                    <h3>SOME OF OUR TRUSTED CLIENTS</h3>
                    <div className='suffix__section-client__container'>
                        <img src={logo1} alt="stripe_logo" />
                        <img src={logo2} alt="google" />
                        <img src={logo3} alt="delloitte_logo" />
                        <img src={logo4} alt="IBM-logo" />
                        <img src={logo5} alt="accenture" />
                        <img src={logo6} alt="samsung" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionClient;