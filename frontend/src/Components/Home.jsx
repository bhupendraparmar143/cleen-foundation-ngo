import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import "../styles/Home.css";

// Assets
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

import missionImg from "../assets/mission.png";
import visionImg from "../assets/vision.png";

import programEdu from "../assets/blog1.jpg";
import programHealth from "../assets/blog2.jpg";
import programWomen from "../assets/blog4.jpg";
import programEnv from "../assets/blog7.jpg";
import programLivelihood from "../assets/blog3.jpg";
import programDisaster from "../assets/blog5.jpg";
import programDigital from "../assets/blog6.jpg";

import testimonial1 from "../assets/woman.jpg";
import testimonial2 from "../assets/men.jpg";
import testimonial3 from "../assets/woman.jpg";
import testimonial4 from "../assets/men.jpg";
import testimonial5 from "../assets/woman.jpg";

import partner1 from "../assets/NITI Aayog.png";
import partner2 from "../assets/Google.png";
import partner3 from "../assets/UNICEF.png";
import partner4 from "../assets/Tata Trusts.png";
import partner5 from "../assets/HPCL Logo.png";
import partner6 from "../assets/Indian Red Cross.png";
import partner7 from "../assets/State_Bank_of_India_logo.png";
import partner8 from "../assets/indiabank.jpeg";

import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";

// Testimonials data
const testimonials = [
  {
    name: "Sunita Devi",
    role: "Beneficiary",
    image: testimonial1,
    quote:
      "Cleen Foundation has empowered our daughters—education and health support changed lives!",
  },
  {
    name: "Rahul Verma",
    role: "Volunteer",
    image: testimonial2,
    quote:
      "Volunteering here gave me purpose. The real impact on people is incredible.",
  },
  {
    name: "Anjali Mehra",
    role: "Donor",
    image: testimonial3,
    quote:
      "Transparent, impactful, and professional—supporting Cleen Foundation is truly rewarding.",
  },
  {
    name: "Amit Sinha",
    role: "Supporter",
    image: testimonial4,
    quote:
      "Seeing actual change in rural communities is what makes Cleen Foundation stand out.",
  },
  {
    name: "Kavita Joshi",
    role: "Community Leader",
    image: testimonial5,
    quote:
      "They don't just promise, they deliver. Cleen Foundation helped revive our village school.",
  },
];

const blogs = [
  {
    image: blog1,
    title: "How Education Changed Lives in Rural India",
    summary:
      "Discover how Cleen Foundation’s initiatives have empowered hundreds of children through quality education.",
    link: "/cleen-foundation-ngo/blog/education-impact",
  },
  {
    image: blog2,
    title: "Empowering Women Through Skills",
    summary:
      "How women-led workshops and training programs have transformed entire villages.",
    link: "/cleen-foundation-ngo/blog/women-empowerment",
  },
  {
    image: blog3,
    title: "Mobile Health Units Reach the Unreachable",
    summary:
      "Taking healthcare to rural doorsteps using innovation and dedication.",
    link: "/cleen-foundation-ngo/blog/health-initiative",
  },
  {
    image: blog4,
    title: "Environmental Drives by Local Youth",
    summary:
      "Youth volunteers planting trees and educating kids about the climate crisis.",
    link: "/cleen-foundation-ngo/blog/environment-youth",
  },
  {
    image: blog5,
    title: "Volunteering That Changes Lives",
    summary:
      "The journey of our volunteers who made real impact across communities.",
    link: "/cleen-foundation-ngo/blog/volunteer-impact",
  },
];

const Home = () => {
  const heroSliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
  };

  const partnerSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 800,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-slider-section">
        <div className="hero-slider">
          <Slider {...heroSliderSettings}>
            {[hero1, hero2, hero3, hero4].map((img, i) => (
              <div className="hero-slide" key={i}>
                <img src={img} alt={`Hero Slide ${i + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="hero-caption-section">
        <div className="hero-caption">
          <h1>Your Impact Matter</h1>
          <p>Empowering Lives Through Education and Action</p>
          <div className="hero-buttons">
            <NavLink className="btn-primary" to="/donation">
              +Donate Now
            </NavLink>
            <NavLink className="btn-secondary" to="/apply">
              Volunteer
            </NavLink>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid mission">
            <div className="mv-image">
              <img src={missionImg} alt="Our Mission" />
            </div>
            <div className="mv-content">
              <h2>Our Mission</h2>
              <p>
                We aim to uplift underprivileged communities by offering
                education, healthcare, empowerment, and sustainable solutions.
              </p>
            </div>
          </div>

          <div className="mv-grid vision reverse">
            <div className="mv-image">
              <img src={visionImg} alt="Our Vision" />
            </div>
            <div className="mv-content">
              <h2>Our Vision</h2>
              <p>
                To create a world where everyone has access to equal
                opportunities and lives with dignity and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}

      <section className="programs">
        <div className="container">
          <h2 className="section-title">Our Key Programs</h2>

          <Slider
            dots={true}
            infinite={true}
            speed={600}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={1000}
            responsive={[
              {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
              },
              {
                breakpoint: 600,
                settings: { slidesToShow: 1 },
              },
            ]}
          >
            {[
              {
                img: programEdu,
                title: "Education",
                desc: "Scholarships, school kits & after-school support for rural children.",
                link: "/programs/education",
              },
              {
                img: programWomen,
                title: "Women Empowerment",
                desc: "Skill training, micro-credit and leadership development for women.",
                link: "/programs/women",
              },
              {
                img: programHealth,
                title: "Health & Hygiene",
                desc: "Health checkups, menstrual hygiene awareness and nutrition programs.",
                link: "/programs/health",
              },
              {
                img: programEnv,
                title: "Environment",
                desc: "Tree plantations, cleanliness drives, and climate awareness sessions.",
                link: "/programs/environment",
              },
              {
                img: programLivelihood,
                title: "Livelihood",
                desc: "Supporting rural entrepreneurship and self-reliance among youth.",
                link: "/programs/livelihood",
              },
              {
                img: programDisaster,
                title: "Disaster Relief",
                desc: "Quick response during floods, cyclones, and other natural calamities.",
                link: "/programs/disaster",
              },
              {
                img: programDigital,
                title: "Digital Literacy",
                desc: "Promoting computer education and internet access in villages.",
                link: "/programs/digital",
              },
            ].map((program, i) => (
              <div className="program-card" key={i}>
                <img src={program.img} alt={program.title} />
                <div className="program-content">
                  <h3>{program.title}</h3>
                  <p>{program.desc}</p>
                  <NavLink to={program.link} className="read-more-btn">
                    Read More →
                  </NavLink>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Voices of Change</h2>
          <Slider {...heroSliderSettings}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-slide">
                <div className="testimonial-card">
                  <img src={t.image} alt={t.name} className="testimonial-img" />
                  <p className="testimonial-quote">"{t.quote}"</p>
                  <h4 className="testimonial-name">
                    {t.name}, <span>{t.role}</span>
                  </h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Partners Slider */}
      <section className="partners">
        <div className="container">
          <h2 className="section-title">Our Partners</h2>
          <Slider {...partnerSliderSettings}>
            {[
              partner1,
              partner2,
              partner3,
              partner4,
              partner5,
              partner6,
              partner7,
              partner8,
            ].map((img, i) => (
              <div key={i} className="partner-logo-slide">
                <img src={img} alt={`Partner ${i + 1}`} />
              </div>
            ))}
          </Slider>
          <div className="center-btn">
            <NavLink
              to="/cleen-foundation-ngo/about/partners"
              className="btn-secondary"
            >
              View All Partners
            </NavLink>
          </div>
        </div>
      </section>

      {/* blog */}
      <section className="latest-blog">
        <div className="container">
          <h2 className="section-title">From Our Blog</h2>
          <Slider
            dots={true}
            infinite={true}
            speed={600}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={2500}
          >
            {blogs.map((blog, index) => (
              <div className="blog-card" key={index}>
                <div className="blog-card-inner">
                  {/* Left Side - Image */}
                  <div className="blog-img-wrapper">
                    <div className="img-fill">
                      <img src={blog.image} alt={blog.title}  className="blog-image"/>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="blog-content">
                    <h3>{blog.title}</h3>
                    <p>{blog.summary}</p>
                    <NavLink to={blog.link} className="btn-secondary">
                      Read More →
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-wrapper">
            <div className="newsletter-text">
              <h2>Stay Connected with Cleen Foundation</h2>
              <p>
                Join our mailing list to receive the latest updates on our
                initiatives, impact stories, and upcoming events.
              </p>
            </div>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
