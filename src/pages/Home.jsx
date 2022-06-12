import React from 'react';
import Main from '../components/Main';
import SectionClient from '../components/SectionClient';
import SectionMentor from '../components/SectionMentor';
import CTA from '../components/CTA';
import SectionTeam from '../components/SectionTeam';
import Footer from '../components/Footer';
import CustomerStory from '../components/CustomerStory';



const Home = () => {
    return (
        <>
            <Main />
            <SectionClient />
            <SectionMentor />
            <CTA />
            <SectionTeam />
            <CustomerStory />
            <Footer />
        </>
    )
}

export default Home;