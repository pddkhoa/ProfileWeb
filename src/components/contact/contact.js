import React from "react";
import "./contact.scss";
import { Container, Row, Col, Form } from "react-bootstrap";
function Contact() {
  return (
    <Container className="content-contact">
      <Row className="mt-5">
        <div
          style={{ color: "var(--text-color)" }}
          className="d-flex align-items-center justify-content-center"
        >
          <span className="text-heading">Contact</span>
          <h1>
            <span>get in</span>{" "}
            <span style={{ color: "var(--decor-color)" }}>touch</span>
          </h1>
        </div>
      </Row>
      <Container>
        <Row className="mt-5">
          <Col>
            <div className="text-intro" style={{ color: "var(--text-color)" }}>
              <h3>Don't be shy</h3>
              <p>
                Mọi thông tin liên hệ của mình ở bên dưới nhé, bạn có thể mail
                cho mình
              </p>
            </div>
            <div className="contact-item d-flex">
              <div className="icon-item">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className="text-item" style={{ marginLeft: "5px" }}>
                <span>Address</span>
                <h4>Viet Nam</h4>
              </div>
            </div>
            <div className="contact-item d-flex">
              <div className="icon-item">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="text-item">
                <span>Email</span>
                <h4>khoadang88vn@gmail.com</h4>
              </div>
            </div>
            <div className="contact-item d-flex">
              <div className="icon-item">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="text-item">
                <span>Phone</span>
                <h4>0349441302</h4>
              </div>
            </div>
          </Col>
          <Col>
            <div className="container-form">
              <form id="consultation-form" className="feed-form" action="#">
                <Row>
                  <Col>
                    <input required="" placeholder="First Name" type="text" />
                  </Col>
                  <Col>
                    <input required="" placeholder="Last Name" type="text" />
                  </Col>
                </Row>
                <input
                  required=""
                  placeholder="Address"
                  type="text"
                  className="w-75"
                />
                <textarea
                  name="phone"
                  required=""
                  placeholder="Message"
                  className="w-75"
                />

                <button className="button-send">
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <i className="fa-solid fa-paper-plane"></i>
                    </div>
                  </div>
                  <span>Send</span>
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
