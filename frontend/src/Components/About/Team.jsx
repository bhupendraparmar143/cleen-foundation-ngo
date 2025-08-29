import React from "react";
import "../../styles/Team.css";
import { FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

const teams = [
  {
    title: "Top Management Team",
    members: [
      {
        name: "MR. RITESH KANNAUJIYA",
        title: "VICE PRESIDENT",
        gender: "male",
      },
      { name: "MR. AMIT SINGH RANA", title: "SECRETARY", gender: "male" },
      { name: "MR. PRAVIN KUMAR", title: "TREASURER", gender: "male" },
      { name: "SQN LDR AP SINGH", title: "CHIEF PATRON", gender: "male" },
      {
        name: "MR. VIBHAV SRIVASTAVA",
        title: "STATE PROGRAM OFFICER",
        gender: "male",
      },
      { name: "MR. PRADEEP YADAV", title: "GENERAL MANAGER", gender: "male" },
      {
        name: "MRS. NINU MALHOTRA",
        title: "HEAD, RESOURCE MOBILIZATION",
        gender: "female",
      },
      { name: "MR. ANKIT GAUTAM", title: "VICE SECRETARY", gender: "male" },
      { name: "MR. PALLAV SHARMA", title: "PATRON", gender: "male" },
      {
        name: "MR. HARI OM MAURYA",
        title: "STATE COORDINATOR",
        gender: "male",
      },
      {
        name: "MR. SANJAY GAUTAM",
        title: "DISTRICT COORDINATOR",
        gender: "male",
      },
      {
        name: "MR. SUMMANT KUMAR",
        title: "STATE PROGRAM OFFICER",
        gender: "male",
      },
    ],
  },
  {
    title: "Board of Advisory",
    members: [
      { name: "Mr. Vikas Shingare", title: "Project Manager", gender: "male" },
      { name: "DR. NAMITA GUPTA", title: "DOCTOR", gender: "female" },
      { name: "K.K. NIGAM FCA", title: "CHARTERED ACCOUNTANT", gender: "male" },
      { name: "MRS. MANJU SINHA", title: "Teacher", gender: "female" },
      {
        name: "DR. POOJA KANNAUDIA",
        title: "EYE SPECIALIST",
        gender: "female",
      },
      {
        name: "MRS. SORAYA REBELLO",
        title: "Sr. VP People - Open Destinations",
        gender: "female",
      },
      { name: "MRS. RIZWANA PRAVEEN", title: "TEACHER", gender: "female" },
      {
        name: "Ms. Kavita Choubey",
        title: "Parental Coach Orbit Counselling",
        gender: "female",
      },
      {
        name: "MR. SAURABH SINGH TOMAR",
        title: "OWNER (SS CONSTRUCTION)",
        gender: "male",
      },
      { name: "MR. DHIRENDRA YADAV", title: "DISTRICT HEAD", gender: "male" },
      { name: "MR. KULDEEP GUPTA", title: "OWNER (SR EVENTS)", gender: "male" },
      {
        name: "MR. FAZAL RAZA RIZVI",
        title: "OWNER (LD PRODUCTIONS & ADVERTISING)",
        gender: "male",
      },
    ],
  },
  {
    title: "Ground Team",
    members: [
      { name: "MS. ANISHA BISHT", title: "OPERATIONAL HEAD", gender: "female" },
      { name: "MR. VASAN GIRI", title: "SOCIAL MEDIA MANAGER", gender: "male" },
      {
        name: "MS SHIVANGI TRIPATHI",
        title: "HEAD RESOURCE MOBILISATION",
        gender: "female",
      },
      {
        name: "MR. AKHIL GUPTA",
        title: "CENTRE ADMINISTRATOR",
        gender: "male",
      },
      {
        name: "MRS. SANGEETA SINGH",
        title: "CENTRE COORDINATOR",
        gender: "female",
      },
      { name: "MRS. VANDANA", title: "STITCHING EXPERT", gender: "female" },
      {
        name: "MR. SHAILESH KUMAR",
        title: "TAEKWONDO TRAINER",
        gender: "male",
      },
      {
        name: "MR. ASHISH MAURYA",
        title: "FOUNDER & PRESIDENT",
        gender: "male",
      },
    ],
  },
  {
    title: "Creative Team",
    members: [
      { name: "MR. HIMANSHU SINGH", title: "PRODUCTION HEAD", gender: "male" },
      { name: "MR. ROHIT MADHVAN", title: "PRODUCTION HEAD", gender: "male" },
      {
        name: "MR. ARYAN SRIVASTAVA",
        title: "CREATIVE MANAGER",
        gender: "male",
      },
      { name: "MR. NAGENDRA KUMAR", title: "GRAPHIC DESIGNER", gender: "male" },
      { name: "MS. PRAGYA SAHU", title: "VIDEO EDITOR", gender: "female" },
      { name: "MR. ABHISHEK NEER", title: "CREATIVE HEAD", gender: "male" },
    ],
  },
  {
    title: "Account & Development Team",
    members: [
      {
        name: "MR. SHIV PRASHAD KUSHWAHA",
        title: "LEGAL OFFICER",
        gender: "male",
      },
      { name: "MR. AJAY KUSHWAHA", title: "LEGAL OFFICER", gender: "male" },
      { name: "MR. Shivam Kumar", title: "WEB DEVELOPER", gender: "male" },
      { name: "MR. Aryan Rajput", title: "WEB DEVELOPER", gender: "male" },
      { name: "MR. Sumit", title: "WEB DEVELOPER", gender: "male" },
      { name: "Mr. Bhoopendra", title: "WEB DEVELOPER", gender: "male" },
      { name: "MR. AMIT TIWARI", title: "ACCOUNTANT", gender: "male" },
    ],
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-intro">
        <h2>Meet Our Team</h2>
        <p>
          We are proud to have a team of passionate and dedicated individuals
          who are committed to achieving our mission. Our team members come from
          diverse backgrounds and bring a range of expertise, experience, and
          perspectives to our work. Each member of our team plays a critical
          role in advancing our programs and initiatives. We believe in
          fostering a culture of collaboration, respect, and continuous
          learning. Together, we are united in our mission to create positive
          change in the world.
        </p>
      </div>

      {teams.map((section) => (
        <div key={section.title} className="team-section">
          <h3>{section.title}</h3>
          <div className="team-grid">
            {section.members.map((member, index) => (
              <div key={`${member.name}-${index}`} className="team-card">
                <img
                  src={`https://randomuser.me/api/portraits/${
                    member.gender === "male" ? "men" : "women"
                  }/${Math.floor(Math.random() * 90)}.jpg`}
                  alt={member.name}
                  className="team-photo"
                />
                <h4>{member.name}</h4>
                <p>{member.title}</p>
                <div className="social-icons">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter (X)"
                  >
                    <FaXTwitter />
                  </a>
                  <a href={`mailto:someone@example.com`} title="Email">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
