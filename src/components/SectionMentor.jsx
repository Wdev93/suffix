import React from 'react';
import './sectionMentor.css'
import { BiBookBookmark } from 'react-icons/bi';
import { MdOndemandVideo } from 'react-icons/md'
import { MdEditNote } from 'react-icons/md';



const smallCards = [
    {
        id: 1,
        img: <MdOndemandVideo size={30} color="#7F8C8D" />,
        title: "1400 + Useful Tutorials",
    },
    {
        id: 3,
        img: <MdEditNote size={30} color="#515A5A" />,
        title: "1000+ topics",
    },
    {
        id: 2,
        img: <BiBookBookmark size={30} color="#515A5A" />,
        title: "36000 Books & a Library",
    },
]

const SectionMentor = () => {
    return (
        <>
            <div className="container">
                <div className='suffix__section-mentor'>
                    <h3>Top Talented Mentors</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Nulla natus mollitia ipsum. Voluptatibus, perspiciatis placeat.</p>

                    {smallCards.map((item) => {
                        return (
                            <div key={item.id} className="suffix__section-mentor__cards-container">
                                <div className='cards'>
                                    <div className='cards__img-bg'>{item.img}</div>
                                    <h2 className='cards__heading'> {item.title}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default SectionMentor;