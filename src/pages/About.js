/* eslint-disable jsx-a11y/no-distracting-elements */
import a6 from "../components/img/about/a6.jpg";

const About = () => {
  return (
    <div>
      <section id="about-head" class="section-p1">
        <img src={a6} alt="" />
        <div>
          <h2>Who We Are</h2>
          <p>
            We are a team of student from ITC that are currently studying as
            year 4 student under GIC department
          </p>

          <abbr title="">
            Create Stunning images with as much or as little control as you like
            thanks to a choice Basic and Creative modes.
          </abbr>
          <br />
          <br />
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
            Nou Sopheanith: Front-end React Dev,
            Leang Kimlong: Back-end Node Dev,
            Rorn Makara: UX/UI Designer,
            Ratha Sothea: HTML CSS Implementer
          </marquee>
        </div>
      </section>
    </div>
  );
};

export default About;
