/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faEnvelope,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import p1 from '../components/img/people/1.png'
import p2 from '../components/img/people/2.png'
import p3 from '../components/img/people/3.png'
const Contact = () => {
  return (
    <div>
      <section id="page-header" className="contact-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head office</h3>
          <div>
            <li>
              <i>
                <FontAwesomeIcon icon={faMap} />
              </i>
              <p>Russian Blvd, Phnom Penh</p>
            </li>
            <li>
              <i>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <p>nou.sopheanith@gmail.com</p>
            </li>
            <li>
              <i>
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <p>(+885) 89 409 406</p>
            </li>
            <li>
              <i>
                <FontAwesomeIcon icon={faClock} />
              </i>
              <p>Monday to Saturday: 7.00am to 19.pm</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500371.9195760598!2d104.69553702731287!3d11.540692081294782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109517388680e15%3A0x63057e6682968f5!2sInstitute%20of%20Technology%20of%20Cambodia!5e0!3m2!1sen!2skh!4v1706176986083!5m2!1sen!2skh"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section id="form-details">
        <form action="">
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Subject" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <button className="normal">Submit</button>
        </form>

        <div className="people">
            <div>
                <img src={p1} alt="" />
                <p><span>Jonh Doe</span> Senior Marketing Manager <br />
                Phone: + 000 123 000 77 88 <br />
                Email: contact@example.com
                </p>
            </div>
            <div>
            <img src={p2} alt="" />
                <p><span>William Smith</span> Senior Marketing Manager <br />
                Phone: + 000 123 000 77 88 <br />
                Email: contact@example.com
                </p>
            </div>
            <div>
            <img src={p3} alt="" />
                <p><span>Emma Stone</span> Senior Marketing Manager <br />
                Phone: + 000 123 000 77 88 <br />
                Email: contact@example.com
                </p>
            </div>
        </div>
    </section>

    <section className="section-p1 section-m1" id="newsletter">
      <div class="newstext">
        <h4>Sign Up For Newsletters</h4>
        <p>
          Get E-mail updates about our latest shop and
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

export default Contact;
