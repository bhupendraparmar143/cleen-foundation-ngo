import "../styles/Footer.css";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialFacebook, TiSocialYoutube } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Top Grid */}
      <div className="footer-grid">
        {/* About */}
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><NavLink to="/cleen-foundation-ngo/about">Introduction</NavLink></li>
            <li><NavLink to="/cleen-foundation-ngo/about/team">Our Team</NavLink></li>
            <li><NavLink to="/cleen-foundation-ngo/about/journey">Journey</NavLink></li>
            <li><NavLink to="/cleen-foundation-ngo/about/gallery">Gallery</NavLink></li>
            <li><NavLink to="/cleen-foundation-ngo/about/partners">Partners</NavLink></li>
            <li><NavLink to="/cleen-foundation-ngo/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* Get Involved */}
        <div className="footer-column">
          <h3>Get Involved</h3>
          <ul>
            <li><NavLink to="/volunteer">Volunteer</NavLink></li>
            <li><NavLink to="/donate">Donate</NavLink></li>
            <li><NavLink to="/fundraise">Fundraise</NavLink></li>
            <li><NavLink to="/partner">Partner With Us</NavLink></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/news">News</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/media-kit">Media Kit</NavLink></li>
            <li><NavLink to="/help">Help Center</NavLink></li>
          </ul>
        </div>

        {/* Programs */}
        <div className="footer-column">
          <h3>Programs</h3>
          <ul>
            <li><NavLink to="/programs/education">Education</NavLink></li>
            <li><NavLink to="/programs/healthcare">Healthcare</NavLink></li>
            <li><NavLink to="/programs/environment">Environment</NavLink></li>
            <li><NavLink to="/programs/women">Women Empowerment</NavLink></li>
            <li><NavLink to="/programs/relief">Disaster Relief</NavLink></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-column newsletter">
          <h3>Subscribe</h3>
          <p>Join our newsletter to stay updated with our latest initiatives and stories of change.</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address for newsletter subscription"
              required
            />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="#" aria-label="Twitter">
            <RiTwitterXLine />
          </a>
          <a href="#" aria-label="Facebook">
            <TiSocialFacebook />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="YouTube">
            <TiSocialYoutube />
          </a>
        </div>

        <div className="footer-links">
          <NavLink to="/terms">Terms</NavLink>
          <span>|</span>
          <NavLink to="/privacy">Privacy</NavLink>
          <span>|</span>
          <NavLink to="/cookies">Cookies</NavLink>
        </div>

        <div className="footer-copy">
          © {year} Cleen Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
