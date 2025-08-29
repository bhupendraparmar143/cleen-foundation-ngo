import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Contact.css'



const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>

      <div className="contact-content">
        <div className="contact-details">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.407098943052!2d73.93359807518286!3d18.556099682554675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c16073e5f015%3A0xfbd08d3963f0a6b1!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718464667735"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <div className="contact-info">
            <p><strong>Phone:</strong> <a href="tel:9580462975">9580462975</a></p>
            <p><strong>Email:</strong> <a href="mailto:cleenfoundationeducation@gmail.com">cleenfoundationeducation@gmail.com</a></p>
            <p><strong>Instagram:</strong> <a href="https://instagram.com/cleen_foundation" target="_blank" rel="noopener noreferrer">@cleen_foundation</a></p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact