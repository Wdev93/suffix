import React from "react";
import './main.css';
import { HiOutlineDatabase } from 'react-icons/hi';
import ipod from '../images/ipod.png';
import girl from '../images/girl.png';
import { motion } from 'framer-motion';



const Main = () => {
    return (
        <>
            <div className="container">
                <div className="suffix__main">
                    <div className="suffix__main__col-left">
                        <div className="suffix__main__col-left__row1">
                            <h5>Wireframer Web Kit</h5>
                            <h1>Not All Blank Cassettes Are Created Equal</h1>
                        </div>
                        <motion.div
                            className="suffix__main__col-left__row2"
                            initial={{ x: -500 }}
                            animate={{ x: -10 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
                        >
                            <div className="content">
                                <h3>Download Free Song For Ipod</h3>
                                <p>Fully customizable and neatly <br /> organized components</p>
                            </div>
                            <HiOutlineDatabase size={30} style={{ marginRight: 30 }}></HiOutlineDatabase>
                        </motion.div>
                        <div className="suffix__main__col-left__row3">
                            <img src={girl} alt="" />
                            <div className="txt">
                                <h3>Schedule a demo</h3>
                                <p>Fully customizable and neatly organized layout</p>
                            </div>
                        </div>
                    </div>
                    <div className="suffix__main__col-right">
                        <motion.img
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2 }}
                            src={ipod} alt="ipod_image" />
                        {/* <div className="bg__color"> */}
                        <div className="content">
                            <h1>Upgrading To <br /> Microsoft Windows 11 <br /> Tips</h1>
                            <p>5 Reasons To Choose A Notebook <br /> Over A Computer Desktop</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
