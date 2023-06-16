import React from "react";
import "./intro.scss";
import ava from "../../static/j5.jpg";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();
  const pageAbout = () => {
    navigate("/aboutme");
  };
  return (
    <div className="content-intro">
      <div className="avatar">
        <div className="cardAva">
          <img src={ava} alt="Avatar" />
        </div>
      </div>
      <div className="text-intro">
        <div className="text-heading">
          <div tyle={{ color: "var(--decor-color)" }}>
            I'm Phan Dai Dang Khoa
          </div>
          <div style={{ color: "var(--decor-color)" }}>Frontend Developer</div>
        </div>
        <div className="text-content">
          <p style={{ color: "var(--text-color)" }}>
            Hi, I'm a third-year college student with a passion for frontend
            development. My goal is to become a skilled frontend developer by
            mastering HTML, CSS, and JavaScript, and exploring popular
            frameworks and libraries. I'm dedicated to improving my skills and
            gaining real-world experience to achieve my goal.
          </p>
        </div>
        <button class="learn-more" onClick={pageAbout}>
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">More</span>
        </button>
      </div>
    </div>
  );
}
export default Intro;
