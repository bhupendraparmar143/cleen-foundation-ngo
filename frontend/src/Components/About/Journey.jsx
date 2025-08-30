import React from "react";
import journeyImg from "../../../public/assets/voice.jpg";
import "../../styles/Journey.css";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2001",
    title: "The Beginning",
    description: "Founded Cleen Foundation in a one-room office with 3 volunteers.",
  },
  {
    year: "2006",
    title: "Clean Water, Clean Future",
    description: "Launched a nationwide campaign promoting access to clean drinking water.",
  },
  {
    year: "2012",
    title: "Global Recognition",
    description: "Recognized by WHO for impactful rural health initiatives.",
  },
  {
    year: "2019",
    title: "National Spotlight",
    description: "Featured in Forbes India as a Change Leader for sustainable impact.",
  },
  {
    year: "2023",
    title: "Lifetime Achievement",
    description: "Honored with the Lifetime Achievement Award in Community Development.",
  },
  {
    year: "2024",
    title: "Digital Leap",
    description: "Launched mobile-first platforms for volunteer engagement and donations.",
  },
  {
    year: "2025",
    title: "Sustainability at Scale",
    description: "Integrated green energy solutions into all ongoing initiatives.",
  },
];

const Journey = () => {
  return (
    <section className="journey enhanced-section">
      <motion.div
        className="journey-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Impactful Journey</h2>
        <p>
          From a humble beginning to becoming a symbol of grassroots transformation — Cleen Foundation’s journey is built on purpose, people, and progress.
        </p>
      </motion.div>

      <div className="journey-content">
        {/* Left Section */}
        <motion.div
          className="journey-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={journeyImg} alt="Journey visual" className="journey-img" />
          <div className="journey-cta">
            <h4>Ready to be part of our next chapter?</h4>
            <button className="join-btn">Join the Movement</button>

            <div className="journey-extra">
              <p>
                Whether you're a student, a professional, or a changemaker at heart — your voice,
                time, and ideas can shape the future. Let’s create sustainable impact together.
              </p>
              <ul className="journey-bullets">
                <li>🔗 Volunteer for upcoming field projects</li>
                <li>💡 Share innovative solutions & stories</li>
                <li>📢 Help us reach more communities in need</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="journey-right timeline"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-year">{milestone.year}</div>
              <div className="timeline-content">
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
