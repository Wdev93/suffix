import React from 'react';
import './SectionTeam.css';
// import img1 from '../images/img1.png';
// import img2 from '../images/img2.png';
// import img3 from '../images/img3.png';
// import img4 from '../images/img4.png';

const imgData = [
    {
        id: 1,
        img: require('../images/img1.png'),
        name: "Anita Rose",
        title: "CEO"
    },
    {
        id: 2,
        img: require('../images/img2.png'),
        name: "John Doe",
        title: "UI Expert"
    }, {
        id: 3,
        img: require('../images/img3.png'),
        name: "Alexis Texas",
        title: "Creative Director"
    }, {
        id: 4,
        img: '../images/img4.png',
        name: "Mike Taylor",
        title: "Web Developer"
    }
]

const SectionTeam = () => {
    return (
        <>
            <div className="container">
                <div className='suffix__section-team'>
                    <h3>Our Team</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                        Nulla natus mollitia ipsum. Voluptatibus, perspiciatis placeat.</p>
                    {imgData.map((value) => {
                        return (
                            <div key={value.id} className="suffix__section-team__content-container">
                                <div key={value.id} className='img_div'>
                                    <img src={value.img} alt="" />
                                    <h2 className='name'> {value.name}</h2>
                                    <h4 className='title'>{value.title}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default SectionTeam;