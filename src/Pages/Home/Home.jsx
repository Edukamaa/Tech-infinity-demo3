import React from 'react';
import Header from '../../Props/Header/Header';
import Hero from './Hero/Hero';
import Choose from './Choose/Choose';
import Consultation from './Consultation/Consultation';
import Services from './Services/Services';
import Reviews from './Reviews/Reviews';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Choose />
      <Consultation />
      
      <div className="container mt-5">
        <Services />
        <Reviews />
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
