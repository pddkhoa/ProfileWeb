import React from "react";
import { useState } from "react";
import { Modal, Button, Col, Container, Row } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./modalProject.scss";

import { FreeMode, Navigation, Thumbs } from "swiper";

function ModalProject(props) {
  const { show, handleClose, dataProject } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Modal
      className="container-modal"
      size="xl"
      show={show}
      onHide={handleClose}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Body
        className="body-content"
        style={{
          background: "#252525",
          color: "var(--text-color)",
          boxShadow: "0 0 7px rgba(0,0,0,.9)",
        }}
      >
        <button className="btnClose" onClick={handleClose}>
          x
        </button>

        <Container className="content-detail">
          <Row>
            <Col className="img-project">
              <Row className="heading-profile">
                <span>Image</span>
              </Row>
              <Row className="container-swiper">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    width: "100%",
                    height: "250px",
                  }}
                  spaceBetween={15}
                  navigation={true}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {dataProject.img &&
                    dataProject.img.length > 0 &&
                    dataProject.img.map((item, index) => {
                      return (
                        <SwiperSlide>
                          <img src={item.src} />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
                <Swiper
                  style={{
                    width: "100%",
                    height: "100px",
                  }}
                  watchSlidesProgress
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {dataProject.img &&
                    dataProject.img.length > 0 &&
                    dataProject.img.map((item, index) => {
                      return (
                        <SwiperSlide>
                          <img src={item.src} />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </Row>
            </Col>
            <Col>
              <Row className="heading-profile">
                <span>Detail</span>
              </Row>
              <Row className="text-detail">
                <p>{dataProject.des}</p>
                <p>Created: {dataProject.was}</p>
                <p>Role: {dataProject.role}</p>
                <p>Fronted: {dataProject.fe}</p>
                <p>Backend: {dataProject.be}</p>
                <p>Demo: {dataProject.Demo}</p>
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
export default ModalProject;
