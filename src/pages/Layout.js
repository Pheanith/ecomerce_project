import { Outlet, Link, useNavigate } from "react-router-dom";
import Logo from "../components/img/logo.png";
import App from "../components/img/pay/app.jpg";
import Pay from "../components/img/pay/pay.png";
import Play from "../components/img/pay/play.jpg";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faPinterest, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Button } from "antd";
import { useEffect, useState } from "react";


const Layout = () => {
  const isLogin = localStorage.getItem("isLogin")
  useEffect(()=>{
    // not allow to access main layout if not login
    // will redirect to login page
    if(isLogin == null || isLogin === 'null'){
       window.location.href = "/login"
    }
  },[])
  const navigate = useNavigate();
  const onLinkPage = (routeName) =>{
    navigate(routeName)
  }
  const onLogout = () => {
    localStorage.setItem("isLogin", null)
    window.location.href = "/login"
  }
  return (
    <div>
      {/* 1. Header */}
      <section id="header">
        <img style={{height: 55}} src={Logo} alt="Logo" />
        <div>
          <ul id="navbar">
            <li>
              <Link id="Link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link id="Link" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link id="Link" to="/">
                About
              </Link>
            </li>
            <li>
              <Link id="Link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link id="Link" to="/cart">
                <FontAwesomeIcon icon={faBagShopping} />
              </Link>
            </li>
            <li>
              <Link id="Link" to="/cart">
              <Button onClick={onLogout}>Logout</Button>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 2. Body */}
      <div>
        <Outlet />
      </div>

      {/* 3. Footer */}
      <footer class="section-p1">
            <div class="col">
                <h4>Contact</h4>
                <p><strong>Address:</strong> Russain Blvd, Phnom Penh, Cambodia</p>
                <p><strong>Phone:</strong> (+885) 89 409 406 </p>
                <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
                <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <i><FontAwesomeIcon icon={faFacebook} /></i>
              <i><FontAwesomeIcon icon={faTwitter} /></i>
              <i><FontAwesomeIcon icon={faInstagram} /></i>
              <i><FontAwesomeIcon icon={faPinterest} /></i>
              <i><FontAwesomeIcon icon={faYoutube} /></i>
            </div>
          </div>
            </div>
            <div class="col">
                <h4>About</h4>
                <a href="#">About Us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact Us</a>
            </div>
            <div class="col">
                <h4>My Account</h4>
                <a href="#">Sign In</a>
                <a href="#">View Cart</a>
                <a href="#">My Whishlist</a>
                <a href="#">Track My Order</a>
                <a href="#">Help</a>
            </div>
            <div class="col install">
                <h4>Install App</h4>
                <p>From App Store or Google Play</p>
                <div class="row">
                    <img src={App} alt="" />
                    <img src={Play}  alt="" />
                </div>
                <p>Secured Payment Gateways</p>
                <img src={Pay} alt="" />
            </div>
           
        </footer>
    </div>
  );
};

export default Layout;
