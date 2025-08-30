import "../styles/Blog.css";
import blog1 from "../../public/assets/blog1.jpg";
import blog2 from "../../public/assets/blog2.jpg";
import blog3 from "../../public/assets/blog3.jpg";
import blog4 from "../../public/assets/blog4.jpg";
import blog5 from "../../public/assets/blog5.jpg";
import blog6 from "../../public/assets/blog6.jpg";
import blog7 from "../../public/assets/blog7.jpg";
import blog8 from "../../public/assets/blog8.jpg";

const blogData = [
  {
    img: blog1,
    title: "Empowering Rural Youth Through Digital Literacy",
    desc:
      "Discover how Cleen Foundation’s new programs are bridging the digital divide in underserved communities.",
  },
  {
    img: blog2,
    title: "Clean Water, Brighter Futures: Our Mission in Action",
    desc:
      "Highlights from our recent clean water projects impacting over 1,000 families.",
  },
  {
    img: blog3,
    title: "Voices of Change: Stories from Our Volunteers",
    desc:
      "Meet the passionate individuals driving grassroots change with Cleen Foundation.",
  },
  {
    img: blog4,
    title: "Sustainable Education: Building Schools That Last",
    desc:
      "How eco-friendly infrastructure is shaping the future of rural education.",
  },
  {
    img: blog5,
    title: "The Power of Partnership: Corporate Collaboration for Good",
    desc: "See how alliances with businesses are accelerating our impact.",
  },
  {
    img: blog6,
    title: "Health Camps That Heal: A Month of Outreach",
    desc:
      "A look at our free medical camps and the lives they’ve transformed.",
  },
  {
    img: blog7,
    title: "From Idea to Impact: The Journey of a Cleen Foundation Project",
    desc: "Behind the scenes of how a community idea becomes a reality.",
  },
  {
    img: blog8,
    title: "Why Education Is at the Heart of Every Solution",
    desc:
      "Explore why Cleen Foundation believes learning is key to ending poverty.",
  },
];

const Blog = () => {
  return (
    <div className="blog-section">
      <div className="blog-header">
        <h2>Explore Our Latest Insights</h2>
        <p>Stay informed with stories, updates, and real impact from the field.</p>
        <form className="blog-search-form">
          <input type="text" placeholder="Search among 463 blogs..." />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="blog-grid">
        {blogData.map((blog, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-img-wrapper">
              <img src={blog.img} alt={blog.title} />
            </div>
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <button className="read-more">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
