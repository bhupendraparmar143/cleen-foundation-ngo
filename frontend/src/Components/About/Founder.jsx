import React from "react";
import { motion } from "framer-motion";
import "../../styles/Founder.css";
import founderImg from "../../../public/assets/voice.jpg";
import {
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaYoutube,
  FaAward,
  FaGlobeAsia,
  FaUsers,
  FaRegLightbulb,
} from "react-icons/fa";

import unLogo from "../../../public/assets/un_logo.png";
import forbesLogo from "../../../public/assets/forbes-logo.png";
import indiaTodayLogo from "../../../public/assets/india-today-logo.png";
import tedxLogo from "../../../public/assets/tedx-logo.png";
import whartonLogo from "../../../public/assets/wharton-logo.png";

export default function Founder() {
  return (
    <section className="founder">
      <div className="content">
        <div className="founder-main">
          <div className="founder-intro">
            <h2>Meet Our Visionary Leader</h2>
            <h3>Dr. Ankita Vaish</h3>
            <p className="title">Founder, Visionary & Executive Director</p>

            <blockquote>
              "True impact comes from empowering communities with the tools,
              trust, and tenacity to lead their own change."
            </blockquote>
          </div>
          <div className="founder-img">
            <motion.div
              className="image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={founderImg} alt="Founder of Cleen Foundation" />
            </motion.div>
          </div>
        </div>
        <div className="founder-content">
          <p>
            Dr. Ankita Vaish, a Harvard-educated development economist former UN
            advisor, has been a fierce advocate for grassroots change for over
            two decades. With a passion rooted in lived experience, she
            established Cleen Foundation to transform policy into people-first
            action.
          </p>

          <p>
            Her work integrates policy research, on-ground mobilization, and
            leadership development—especially among women and youth. Recognized
            globally, she brings both empathy and strategy to the frontlines of
            development.
          </p>

          <div className="achievements">
            <div>
              <FaAward /> Nari Shakti Puraskar (2022)
            </div>
            <div>
              <FaGlobeAsia /> Represented India at UN SDG Panel (2019)
            </div>
            <div>
              <FaUsers /> Empowered 2L+ families through women-led initiatives
            </div>
            <div>
              <FaRegLightbulb /> Speaker at TEDx: "Redefining Rural Leadership"
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:founder@cleenfoundation.org">
              <FaEnvelope />
            </a>
            <a
              href="https://youtube.com/@cleenfoundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <motion.div
        className="founder-timeline"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>Journey & Milestones</h3>
        <ul>
          <li>
            <strong>2001</strong> – Founded Cleen Foundation in a one-room
            office with 3 volunteers
          </li>
          <li>
            <strong>2006</strong> – Launched the "Clean Water, Clean Future"
            campaign
          </li>
          <li>
            <strong>2012</strong> – Recognized by WHO for rural health
            initiatives
          </li>
          <li>
            <strong>2019</strong> – Featured in Forbes India as a Change Leader
          </li>
          <li>
            <strong>2023</strong> – Received Lifetime Achievement Award in
            Community Development
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="founder-message"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>Message from the Founder</h3>
        <p>
          "I believe in a future where no one is left behind—not because we
          reached down to help them up, but because we walked forward together.
          Join us in creating that future."
        </p>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/Eo-KmOd3i7s"
            title="Message from Dr. Asha Verma"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      <motion.div
        className="recognition-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>Recognized & Featured By</h3>
        <div className="logos">
          <img src={unLogo} alt="United Nations" />
          <img src={forbesLogo} alt="Forbes" />
          <img src={indiaTodayLogo} alt="India Today" />
          <img src={tedxLogo} alt="TEDx" />
          <img src={whartonLogo} alt="Wharton" />
        </div>
      </motion.div>

      <motion.div
        className="core-values"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <section className="Leadership">
          <h3>Her Leadership Philosophy</h3>
          <ul>
            <li>
              <strong>Empathy First:</strong> Change begins by listening deeply.
            </li>
            <li>
              <strong>Lead Locally:</strong> Nurture leadership from within the
              community.
            </li>
            <li>
              <strong>Collaborate Boldly:</strong> Global partnerships for local
              wins.
            </li>
            <li>
              <strong>Data-Driven Action:</strong> Every initiative is guided by
              insight and impact.
            </li>
          </ul>
        </section>
      </motion.div>
    </section>
  );
}
