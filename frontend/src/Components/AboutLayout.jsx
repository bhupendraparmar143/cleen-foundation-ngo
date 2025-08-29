// src/Components/AboutLayout.jsx
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/About.css'; // Custom styles

export default function AboutLayout() {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? 'active' : '';

  return (
    <div className="about-layout">
      <h1>About Cleen Foundation</h1>
      <nav className="about-nav">
        <NavLink to="" end className={getNavLinkClass}>
          Introduction
        </NavLink>
        <NavLink to="journey" className={getNavLinkClass}>
          Journey
        </NavLink>
        <NavLink to="founder" className={getNavLinkClass}>
          Founder
        </NavLink>
        <NavLink to="team" className={getNavLinkClass}>
          Team
        </NavLink>
        <NavLink to="gallery" className={getNavLinkClass}>
          Gallery
        </NavLink>
        <NavLink to="partners" className={getNavLinkClass}>
          Partners
        </NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
