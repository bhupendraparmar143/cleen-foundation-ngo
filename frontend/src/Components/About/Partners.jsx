import '../../styles/Partner.css';
import partner1 from '../../../public/assets/UNICEF.png';
import partner2 from '../../../public/assets/Tata Trusts.png';
import partner3 from '../../../public/assets/Google.png';
import partner4 from '../../../public/assets/Indian Red Cross.png';
import partner5 from '../../../public/assets/NITI Aayog.png';
import partner6 from '../../../public/assets/World Wildlife Fund.jpg';

const partners = [
  {
    name: 'UNICEF',
    logo: partner1,
    type: 'International Organization',
    description: 'Collaborated on child education and vaccination drives.',
  },
  {
    name: 'Tata Trusts',
    logo: partner2,
    type: 'Corporate CSR',
    description: 'Supported rural healthcare programs and relief work.',
  },
  {
    name: 'Google.org',
    logo: partner3,
    type: 'Tech Philanthropy',
    description: 'Digital literacy workshops across India.',
  },
  {
    name: 'Indian Red Cross',
    logo: partner4,
    type: 'Health NGO',
    description: 'Joint emergency response and blood donation camps.',
  },
  {
    name: 'NITI Aayog',
    logo: partner5,
    type: 'Government Body',
    description: 'Policy collaboration on sanitation and awareness.',
  },
  {
    name: 'World Wildlife Fund',
    logo: partner6,
    type: 'Environmental NGO',
    description: 'Tree plantation and sustainability campaigns.',
  },
];

export default function Partner() {
  return (
    <section className="partner-section" id="partners">
      <div className="partner-header">
        <h2>Our Partners</h2>
        <p>
          We are proud to collaborate with organizations that share our mission for a cleaner, healthier, and more
          equitable world. From grassroots movements to global institutions, our partners empower impact.
        </p>
      </div>

      <div className="partner-grid">
        {partners.map((partner, idx) => (
          <div className="partner-card" key={idx}>
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
            <div className="partner-info">
              <h3>{partner.name}</h3>
              <span className="partner-type">{partner.type}</span>
              <p>{partner.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="partner-cta">
        <h3>Want to Partner With Us?</h3>
        <p>We're always looking to build meaningful collaborations. Let's work together for a greater cause.</p>
        <a href="/contact" className="partner-btn">Become a Partner</a>
      </div>
    </section>
  );
}
