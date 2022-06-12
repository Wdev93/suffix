import "./navbar.css";
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { HiMenuAlt1, HiOutlineX } from 'react-icons/hi';
// import ScheduleDemo from "./ScheduleDemo";



const Menu = () => (
    <>
        <nav className="suffix__navbar__nav-links">
            <ul>
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
        </nav>

        <Outlet />
    </>
);



const Navbar = () => {
    //Mobile buger menu
    const [toggleMenu, setToggleMenu] = useState(false);

    //change navbar color while scrolling
    const [color, setColor] = useState(false);


    const changeColor = () => {
        if (window.scrollY >= 80) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor)


    return (
        <>
            <div className={color ? "suffix__navbar-bg" : "suffix__navbar"} >
                <h1 className='suffix__navbar__brand'>Suffix</h1>
                <div className="suffix__navbar__desktop-menu"><Menu /></div>
                <Link className="btn" to="/scheduleDemo">Schedule a demo</Link>
                <div className='suffix__navbar__mobile-menu'>
                    {toggleMenu
                        ? < HiOutlineX size={26} onClick={() => setToggleMenu(false)} />
                        : < HiMenuAlt1 size={26} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <motion.div
                            initial={{ y: -500 }}
                            animate={{ y: -10 }}
                            transition={{ delay: 0.2 }}
                            className='suffix__navbar__mobile-menu__container' onClick={() => setToggleMenu(false)}>
                            <Menu />
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Navbar;

