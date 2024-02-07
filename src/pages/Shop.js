import React, { useState } from "react";
import pf1 from "../components/img/products/f1.jpg";
import pf2 from "../components/img/products/f2.jpg";
import pf3 from "../components/img/products/f3.jpg";
import pf4 from "../components/img/products/f4.jpg";
import pf5 from "../components/img/products/f5.jpg";
import pf6 from "../components/img/products/f6.jpg";
import pf7 from "../components/img/products/f7.jpg";
import pf8 from "../components/img/products/f8.jpg";
import pn1 from "../components/img/products/n1.jpg";
import pn2 from "../components/img/products/n2.jpg";
import pn3 from "../components/img/products/n3.jpg";
import pn4 from "../components/img/products/n4.jpg";
import pn5 from "../components/img/products/n5.jpg";
import pn6 from "../components/img/products/n6.jpg";
import pn7 from "../components/img/products/n7.jpg";
import pn8 from "../components/img/products/n8.jpg";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faStar,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { request } from "../components/request/request";
import { Config } from "../components/request/helper";

const Shop = () => {
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

      <section className="section-p1" id="product1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container">
          {list.map((item, index) => (
            <div
              key={index}
              className="pro"
              onClick={() => navigate("/sproduct")}
            >
              <img src={Config.image_Path+item.img} alt="" />
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

export default Shop;
