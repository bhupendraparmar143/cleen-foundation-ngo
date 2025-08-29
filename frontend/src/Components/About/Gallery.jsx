import { useState } from "react";
import "../../styles/Gallery.css";

import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import blog4 from "../../assets/blog4.jpg";
import blog5 from "../../assets/blog5.jpg";
import blog6 from "../../assets/blog6.jpg";
import blog7 from "../../assets/blog7.jpg";
import blog8 from "../../assets/blog8.jpg";

const images = [blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8];

const categories = [
  "All",
  "Health",
  "Education",
  "Environment",
  "Events",
  "Volunteers",
  "Women Empowerment",
  "Relief Work",
];

const sampleTitles = [
  "Awareness Campaign",
  "Free Health Camp",
  "Digital Literacy Drive",
  "Plantation Event",
  "Rally for Rights",
  "Flood Relief Camp",
  "Nutrition Workshop",
  "Volunteering in Action",
];

const sampleDescriptions = [
  "Making change in rural areas.",
  "Supported by local doctors.",
  "Empowering underprivileged youth.",
  "Clean and green mission.",
  "Mobilizing communities for better tomorrow.",
  "Emergency help to 500+ families.",
  "Helping women and children grow strong.",
  "Driven by volunteers with passion.",
];

const galleryData = Array.from({ length: 50 }, (_, i) => {
  const category = categories[(i % (categories.length - 1)) + 1];
  const img = images[i % images.length];
  const title = `${category}: ${sampleTitles[i % sampleTitles.length]}`;
  const desc = sampleDescriptions[i % sampleDescriptions.length];
  return {
    category,
    src: img,
    title,
    desc,
  };
});

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalImage, setModalImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === activeCategory);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <h2>Gallery</h2>
        <p>
          Explore our impact through real-world campaign snapshots across
          multiple categories.
        </p>
      </div>

      <div className="gallery-filters">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((item, index) => (
          <div
            key={index}
            className="gallery-card"
            onClick={() => setModalImage(item)}
          >
            <img src={item.src} alt={item.title} className="gallery-img" />
            <div className="gallery-overlay">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div
          className="gallery-modal"
          onClick={(e) => {
            if (e.target.classList.contains("gallery-modal")) {
              setModalImage(null);
            }
          }}
        >
          <div className="modal-content">
            <img src={modalImage.src} alt={modalImage.title} />
            <h3>{modalImage.title}</h3>
            <p>{modalImage.desc}</p>
            <span className="modal-close" onClick={() => setModalImage(null)}>
              &times;
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
