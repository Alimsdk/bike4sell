import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <AboutUs/>
            <Bikes/>
            <Footer/>
        </div>
    );
};

export default Home;