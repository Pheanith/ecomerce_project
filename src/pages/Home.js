import React from "react";
import h1 from "../components/img/supercars.png";
import f1 from "../components/img/features/f1.png";
import f2 from "../components/img/features/f2.png";
import f3 from "../components/img/features/f3.png";
import f4 from "../components/img/features/f4.png";
import f5 from "../components/img/features/f5.png";
import f6 from "../components/img/features/f6.png";
import pf1 from "../components/img/products/f1.jpg";

import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { request } from "../components/request/request";
import { Config } from "../components/request/helper";

function Home() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await request("product", "get", {});
    if (res) {
      setList(res.product);
    }
  };

  return (
    <div>
      <section id="hero">
        <div className="title">
          <h1> Easy and Fast way to build your car</h1>
          <p style={{ paddingTop: 10 }}>
            We provide teh best car option and expert services for teh greatest
            customer experiences.
          </p>
          <Link id="Link" to="/shop"><a href="">
            <button class="button">Shop Now</button>
          </a>
          </Link>
        </div>
        <img src={h1} style={{ width: 1200 }} alt="" />
      </section>

      <section className="section-p1" id="product1">
        <h2>Featured Products</h2>
        <p>Our product and service in outreach market</p>
        <div className="pro-container">
          {list.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className="pro"
              onClick={() => navigate("/sproduct")}
            >
              <img src={Config.image_Path+ item.img} alt="" />
              <div className="des">
                <span> {item.category} </span>
                <h5> {item.name} </h5>
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
                <h4> ${item.price} </h4>
              </div>
              <a href="#">
                <i className="cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </i>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section class="section-p1 section-m1" id="newsletter">
        <div class="newstext">
          <h4>Sign Up For Newsletters</h4>
        </div>
        <div class="form">
          <input type="text" placeholder="Your email address" />
          <button class="normal">Sign Up</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
