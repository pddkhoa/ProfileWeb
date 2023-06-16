import React, { useRef, useEffect } from "react";
import "./aboutMe.scss";
import { Container, Row, Col } from "react-bootstrap";
import html from "../../static/html.png";
import css from "../../static/css.png";
import js from "../../static/js1.png";
import scss from "../../static/scss.png";
import bootstrap from "../../static/bootstrap.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutMe() {
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);

  return (
    <Container className="container-aboutme">
      <Row className="mt-5 mb-5">
        <div
          style={{ color: "var(--text-color)" }}
          className="d-flex align-items-center justify-content-center"
        >
          <span className="text-heading">About Me</span>
          <h1>
            <span>About</span>{" "}
            <span style={{ color: "var(--decor-color)" }}>Me</span>
          </h1>
        </div>
      </Row>

      <Container className="container-text">
        <Row style={{ marginTop: "50px" }}>
          <Col>
            <div className="d-flex align-items-center justify-content-center">
              <span className="heading-profile">My Profile</span>
            </div>
          </Col>
        </Row>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            ease: "linear",
            duration: 0.5,
            x: { duration: 1 },
          }}
        >
          <Row>
            <Col className="text-detail" style={{ color: "var(--text-color)" }}>
              <Row>
                <Col>
                  <p>
                    <span style={{ opacity: ".8" }}>First Name:</span> Phan
                  </p>
                  <p>
                    <span style={{ opacity: ".8" }}>Birthday:</span> 21 Years
                  </p>
                  <p>
                    <span style={{ opacity: ".8" }}>Phone:</span> 0349xxxx02
                  </p>
                </Col>
                <Col>
                  <p>
                    <span style={{ opacity: ".8" }}>Last Name:</span> Khoa
                  </p>
                  <p>
                    <span style={{ opacity: ".8" }}>Address:</span> Linh Trung,
                    Thu Duc
                  </p>
                  <p>
                    <span style={{ opacity: ".8" }}>Email:</span>{" "}
                    khoadang88vn@gmail.com
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="mt-5" style={{ color: "white" }}>
                <Col>
                  <div className="box-exp">
                    <p className="content">
                      0<sub>+</sub>
                    </p>
                    <div class="cover" style={{ color: "white" }}>
                      <p>Year(s) Experience</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="box-exp">
                    <p className="content">
                      0<sub>+</sub>
                    </p>
                    <div class="cover" style={{ color: "white" }}>
                      <p>Completed Project(s)</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </Container>
      <Container className="my-skill">
        <Row>
          <div className="d-flex align-items-center justify-content-center">
            <span className="title-skill">my skills </span>
          </div>
        </Row>
        <Container ref={ref}>
          <motion.div animate={animation}>
            <Row xs={1} md={4} className="g-4 mt-5">
              <Col>
                <div className="item-skill">
                  <img src={html} alt="html" style={{ width: "70%" }} />
                </div>
              </Col>
              <Col>
                <div className="item-skill">
                  <img src={css} alt="css" />
                </div>
              </Col>

              <Col>
                <div className="item-skill">
                  <img src={js} alt="javasrcipt" />
                </div>
              </Col>
              <Col>
                <div className="item-skill">
                  <img src={scss} alt="scss" />
                </div>
              </Col>

              <Col>
                <div className="item-skill">
                  <img src={bootstrap} alt="bootstrap" />
                </div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </Container>
      <Container className="education-exp">
        <Row>
          <div className="d-flex align-items-center justify-content-center">
            <span className="title-exp"> Experience </span>
          </div>
        </Row>
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              ease: "linear",
              duration: 0.5,
              x: { duration: 1 },
            }}
          >
            <Row xs={1} md={3}>
              <Col>
                <div className="list-edu">
                  <div className="card">
                    <div className="icon">
                      <i class="fa-solid fa-briefcase"></i>
                      <linearGradient id="gradientColor">
                        <stop offset="5%" stop-color="#7eaaff"></stop>
                        <stop offset="95%" stop-color="#ff48fb"></stop>
                      </linearGradient>
                    </div>
                    <p class="title">
                      Ho Chi Minh City University of Technology and Education
                    </p>
                    <p class="text">2020-2024</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="list-edu">
                  <div className="card">
                    <div className="icon">
                      <i class="fa-solid fa-briefcase"></i>
                      <linearGradient id="gradientColor">
                        <stop offset="5%" stop-color="#7eaaff"></stop>
                        <stop offset="95%" stop-color="#ff48fb"></stop>
                      </linearGradient>
                    </div>
                    <p class="title">THANH MY TAY HIGH SCHOOL</p>
                    <p class="text">2017-2020</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="list-edu">
                  <div className="card">
                    <div className="icon">
                      <i class="fa-solid fa-briefcase"></i>
                      <linearGradient id="gradientColor">
                        <stop offset="5%" stop-color="#7eaaff"></stop>
                        <stop offset="95%" stop-color="#ff48fb"></stop>
                      </linearGradient>
                    </div>
                    <p class="title">Future</p>
                    <p class="text">....</p>
                  </div>
                </div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </Container>
    </Container>
  );
}

export default AboutMe;
