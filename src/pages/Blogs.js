import b1 from "../components/img/blog/b1.jpg";
import b2 from "../components/img/blog/b2.jpg";
import b3 from "../components/img/blog/b3.jpg";
import b4 from "../components/img/blog/b4.jpg";
import b6 from "../components/img/blog/b6.jpg";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Blogs = () => {
  return (
    <div>
      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our product</p>
      </section>

      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src={b1} alt="" />
          </div>
          <div className="blog-details">
            <h4>The Cotton-jersey Zip-Up Hoodie</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waiscoat
              selfies yr wolf chartreuse hexagon irony, godard...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={b2} alt="" />
          </div>
          <div className="blog-details">
            <h4>How to Style a Quiff</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waiscoat
              selfies yr wolf chartreuse hexagon irony, godard...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={b3} alt="" />
          </div>
          <div className="blog-details">
            <h4>Must-Have SkaterGirl Items</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waiscoat
              selfies yr wolf chartreuse hexagon irony, godard...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={b4} alt="" />
          </div>
          <div className="blog-details">
            <h4>Runway-Inspired Trends</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waiscoat
              selfies yr wolf chartreuse hexagon irony, godard...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={b6} alt="" />
          </div>
          <div className="blog-details">
            <h4>AW20 Menswear Trends</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waiscoat
              selfies yr wolf chartreuse hexagon irony, godard...
            </p>
            <a href="#">CONTINUE READING</a>
          </div>
          <h1>13/01</h1>
        </div>
      </section>

      <section className="section-p1" id="pagination">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">
          <i>
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </i>
        </a>
      </section>

      <section className="section-p1 section-m1" id="newsletter">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
