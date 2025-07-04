import React from 'react';
import './About.css';
import backten from '../../../assets/backten.jpg';
import pictwo from '../../../assets/pictwo.jpg';
import Consultation from '../Consultation/Consultation';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <div className="about-container">
   

      {/* Background heading section */}
      <div
        className="about-heading"
        style={{ backgroundImage: `url(${backten})` }}
      >
        <h1>About Us</h1>
      </div>

      {/* Intro section with image and text side by side */}
      <div className="about-intro container">
        <img src={pictwo} alt="Team" className="about-image" />
        <p className="intro-text">
          We are more than just a digital marketing agency; we are stars in the dynamic realm of digital marketing and website design in Kenya. Our journey began with a passion for innovation and a commitment to helping businesses thrive in the digital landscape.
        </p>
      </div>

      {/* Additional Info */}
      <div className="about-details container">
        <h2 className="sub-heading">Who We Are?</h2>
        <p>
          We are a team of dedicated professionals based in Nairobi, Kenya, driven by a shared vision: to empower businesses with cutting-edge digital solutions. Our roots in this vibrant city inspire our creativity, and our commitment to excellence fuels our ambition to be leaders in the ever-evolving world of technology.
        </p>

        <h2 className="sub-heading">Vision Statement</h2>
        <p>
          Empowering businesses to thrive in the digital realm through innovative web design and cutting-edge digital marketing solutions.
        </p>

        <h2 className="sub-heading">Mission Statement</h2>
        <p>
          Our mission is to empower businesses of all sizes with the digital tools and strategies they need to thrive in an increasingly competitive online landscape, helping them achieve their goals and maximize their potential.
        </p>

        <h2 className="sub-heading">Our Specialties</h2>
        <p><strong>Digital Marketing:</strong> We specialize in creating strategies that elevate your brand’s online presence—from SEO to social media marketing.</p>
        <p><strong>Website Design:</strong> Our design services blend creativity and functionality to ensure your brand shines online.</p>
      </div>
         <Consultation/>
         <Footer/>
    </div>

  );
};

export default About;
