import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import pf1 from "../components/img/Cars/car.jpg";
import pf2 from "../components/img/Cars/car1.jpg";
import pf3 from "../components/img/Cars/car2.jpg";
import pf4 from "../components/img/Cars/car3.jpg";
import pn1 from "../components/img/Cars/car4.jpg";
import pn2 from "../components/img/Cars/car5.jpg";
import pn3 from "../components/img/Cars/car6.jpg";
import pn4 from "../components/img/Cars/car8.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";

const SProduct = () => {
  const navigate = useNavigate();

  const [mainImage, setMainImage] = useState(pf1);

  const handleImageClick = (newImage) => {
    setMainImage(newImage);
  };

  return (
    <div>
      <section className="section-p1" id="prodetails">
        <div className="single-pro-image">
          <img src={mainImage} width="100%" id="MainImg" alt="" />
          <div className="small-img-group">
            {[pf1, pf2, pf3, pf4].map((image, index) => (
              <div key={index} className="small-image-col">
                <img
                  src={image}
                  width="100%"
                  className="small-img"
                  alt=""
                  onClick={() => handleImageClick(image)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="single-pro-details">
          <h6>Home / T-Shirt</h6>
          <h4>Men's Fashion T Shirt</h4>
          <h2>$90,295 + (tax)</h2>
          <select>
            <option>Select Color</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Black</option>
            <option>White</option>
          </select>
          <input type="number" value="1" />
          <button className="normal" onClick={() => navigate("/cart")}>
            Add To Cart
          </button>
          <h4>Product Details</h4>
          <span>
            The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz.
            per sq. yd. fabric constructed from 100% cotton, this classic fit
            preshrunk jersey knit provides unmatched comfort with each wear.
            Featuring a taped neck and shoulder, and a seamless double-needle
            collar, and available in a range of colors, it offers it all in the
            ultimate head-turning package.
          </span>
        </div>
      </section>

      <section className="section-p1" id="product1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container">
          <div className="pro" onClick={() => navigate("/cart")}>
            <img src={pn1} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Asronaut T-Shirts</h5>
              <div className="star">
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </i>
            </a>
          </div>

          <div className="pro" onClick={() => navigate("/cart")}>
            <img src={pn2} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Asronaut T-Shirts</h5>
              <div className="star">
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </i>
            </a>
          </div>

          <div className="pro" onClick={() => navigate("/cart")}>
            <img src={pn3} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Asronaut T-Shirts</h5>
              <div className="star">
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </i>
            </a>
          </div>

          <div className="pro" onClick={() => navigate("/cart")}>
            <img src={pn4} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Asronaut T-Shirts</h5>
              <div className="star">
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </i>
            </a>
          </div>
        </div>
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

export default SProduct;
