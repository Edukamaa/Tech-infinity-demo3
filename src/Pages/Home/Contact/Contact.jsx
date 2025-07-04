import React from 'react';
import './Contact.css';
import { BsChatLeftDots } from 'react-icons/bs'; // Replacing image icon with a chat icon
import Consultation from '../Consultation/Consultation';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <div className='contact'>
      {/* Left side (Contact Info) */}
      <div className='contact-left'>
        <h3>
          Send Us a Message <BsChatLeftDots className="contact-icon" />
        </h3>
        <p>
          Have questions, feedback, or ready to get started? Reach out to us anytime —
          we're here to help you every step of the way.
        </p>
        <ul>
          <li>📞 +254 722 785 480 / +254 757 775 835</li>
          <li>📧 info@techinfinitysolutions.com</li>
          <li>🌐 www.techinfinity.com</li>
          <li>🏠 Nairobi, Kenya</li>
        </ul>
      </div>

      {/* Right side (Contact Form using Web3Forms) */}
      <div className='contact-right'>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-form"
        >
          {/* Web3Forms access key */}
          <input type="hidden" name="access_key" value="4a9aaf02-a6d2-4b81-82f1-24bfc8b5f649" />

          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email Address" required />
          <input type="tel" name="phone" placeholder="Your Phone Number" required />
          <textarea name="message" placeholder="Your Message..." rows="4" required />

          <button type="submit">Send Message</button>
        </form>
      </div>
    <Consultation/>
    <Footer/>
    </div>
    
  );
};

export default Contact;
