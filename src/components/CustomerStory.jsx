import React, { useState } from 'react';
import './CustomerStory.css';
import man from '../images/man.png';
import shape from '../images/shape.png';
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
import { motion } from 'framer-motion';

const CustomerStory = () => {
    const [toggleStory, setToggleStory] = useState(true);

    return (
        <>
            <div className="container">
                <div className="suffix__customer-story">
                    <div className="suffix__customer-story__col-left">
                        <div className='shape'><img src={shape} alt="" /></div>
                        <motion.div
                            className='img_div'
                            initial={{ x: -500 }}
                            animate={{ x: -10 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
                        ><img src={man} alt="man_suit" /></motion.div>
                    </div>
                    <div className="suffix__customer-story__col-right">
                        {toggleStory && <></> ? (
                            <>
                                <h5>Cutomer Story</h5>
                                <h3 className='primary_heading'>Great design service, top notch ideas</h3>
                                <p className='para_1'>“If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                <p className='para_1'>There are many variations of passages of Lorem Ipsum available.”</p>
                                <h4 className='customer_name'>David Jack</h4>
                                <h6 className='position'>Marketing Manager</h6>
                            </>
                        )

                            : (
                                <>
                                    <h3 className='customer_name'>My Story</h3>
                                    <p className='para_1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus asperiores assumenda, omnis voluptatum nam sint aspernatur! Provident, officia magnam!</p>
                                    <p className='para_1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cum nam laborum id, iusto eaque, tempore consectetur eos non repellat nihil. Labore nobis minus quidem vero quasi enim, nulla repudiandae quam ducimus, officiis neque tempora. Eveniet, quia deserunt optio suscipit labore commodi repudiandae fuga ab officiis sed pariatur soluta accusantium ullam rem corporis itaque mollitia enim magni aliquid a totam tempore possimus. Quam itaque vitae minus consequatur numquam deleniti dolorum. Temporibus atque dolores </p>
                                </>
                            )}
                        {toggleStory

                            ? < HiArrowNarrowRight color='#515A5A' size={30} onClick={() => setToggleStory(false)} />
                            : <HiArrowNarrowLeft color='#515A5A' size={30} onClick={() => setToggleStory(true)} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerStory;