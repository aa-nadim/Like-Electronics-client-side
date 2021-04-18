import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import MakeOrder from '../MakeOrder/MakeOrder';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeOrder></MakeOrder>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;