import React from 'react';
import './Blog.css';

import branding1 from '../../../assets/branding1.jpeg';
import branding2 from '../../../assets/branding2.jpeg';
import branding3 from '../../../assets/branding3.jpeg';
import branding4 from '../../../assets/branding4.jpeg';
import branding5 from '../../../assets/branding5.jpeg';
import branding6 from '../../../assets/branding6.jpeg';
import branding7 from '../../../assets/branding7.jpeg';
import branding8 from '../../../assets/branding8.jpeg';
import branding9 from '../../../assets/branding9.jpeg';
import branding10 from '../../../assets/branding10.jpeg';

import gdesign1 from '../../../assets/gdesign1.jpeg';
import gdesign2 from '../../../assets/gdesign2.jpeg';
import gdesign3 from '../../../assets/gdesign3.jpeg';
import gdesign4 from '../../../assets/gdesign4.jpeg';
import gdesign5 from '../../../assets/gdesign5.jpeg';

import webdesign2 from '../../../assets/webdesign2.jpeg';
import webdesign3 from '../../../assets/webdesign3.jpeg';
import webdesign4 from '../../../assets/webdesign4.jpeg';
import webdesign5 from '../../../assets/webdesign5.jpeg';

import Consultation from '../../Home/Consultation/Consultation';
import Footer from '../../Home/Footer/Footer';

const Blog = () => {
  const brandingData = [
    branding1, branding2, branding3, branding4, branding5,
    branding6, branding7, branding8, branding9, branding10
  ];

  const gdesignData = [gdesign1, gdesign2, gdesign3, gdesign4, gdesign5];
  const webdesignData = [webdesign2, webdesign3, webdesign4, webdesign5];

  const renderCards = (images, title) => (
    <div className="blog-section">
      <h2>{title}</h2>
      <div className="blog-grid">
        {images.map((img, i) => (
          <div className="blog-card" key={i}>
            <img src={img} alt={`${title} ${i + 1}`} />
            <div className="hover-content">
              <h5>{title} Project {i + 1}</h5>
              <p>Highlighting our latest creative work in {title.toLowerCase()} that leaves a lasting impression.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="blog-page">
      <div className="container py-5">
        <h1 className="main-title">Our Blog & Creative Work</h1>
        {renderCards(brandingData, 'Branding')}
        {renderCards(gdesignData, 'Graphic Design')}
        {renderCards(webdesignData, 'Web Design')}
      </div>
      <Consultation />
      <Footer />
    </div>
  );
};

export default Blog;
