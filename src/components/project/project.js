import React from "react";
import "./project.scss";
import { useState } from "react";
import { Container, Nav, Row, Tab, Col } from "react-bootstrap";
import CardProduct from "../cardProduct/cardProduct";
import ModalProject from "../modalProject/modalProject";
import avaPro1 from "../../static/project1/1.png";
import avaPro12 from "../../static/project1/2.png";
import avaPro123 from "../../static/project1/3.png";
import imgPro2_1 from "../../static/project2/1.png";
import imgPro2_2 from "../../static/project2/2.png";
import imgPro3_1 from "../../static/project3/1.png";
import imgPro3_2 from "../../static/project3/2.png";
import imgPro3_3 from "../../static/project3/3.png";
import imgPro4_1 from "../../static/project4/1.png";
import imgPro4_2 from "../../static/project4/2.png";
import imgPro5_1 from "../../static/project5/1.png";
import imgPro5_2 from "../../static/project5/2.png";
import imgPro5_3 from "../../static/project5/3.png";

function Project() {
  const dataAll = [
    {
      id: 1,
      name: "Profile",
      ava: avaPro1,
      img: [
        {
          src: avaPro1,
        },
        {
          src: avaPro12,
        },
        {
          src: avaPro123,
        },
      ],
      des: "This is a profile website that shares information and skills about myself, built entirely using ReactJS.",
      was: "2023",
      role: "Frontend",
      fe: "ReactJS",
      be: "Null",
      Demo: "Null",
    },
    {
      id: 2,
      name: "Cart E-comerce",
      ava: imgPro2_1,
      img: [
        {
          src: imgPro2_1,
        },
        {
          src: imgPro2_2,
        },
      ],
      des: "This is an e-commerce shopping cart product, which includes features such as adding, deleting, and calculating the price of items in the cart",
      was: "2023",
      role: "Frontend",
      fe: "ReactJS",
      be: "Null",
      Demo: "https://github.com/pddkhoa/App-Cart-Intern.git",
    },
    {
      id: 3,
      name: "Manage Users",
      ava: imgPro3_1,
      img: [
        {
          src: imgPro3_1,
        },
        {
          src: imgPro3_2,
        },
        {
          src: imgPro3_3,
        },
      ],
      des: "This is a basic website following the CRUD model. It includes functions such as login, adding, editing, and deleting users. Additionally, it also has other tasks such as filtering, sorting, and importing/exporting Excel files.",
      was: "2023",
      role: "Frontend",
      fe: "ReactJS",
      be: "API (https://reqres.in/)",
      Demo: "https://github.com/pddkhoa/App-Intern-React.git",
    },
    {
      id: 4,
      name: "Manage Video",
      ava: imgPro4_1,
      img: [
        {
          src: imgPro4_1,
        },
        {
          src: imgPro4_2,
        },
      ],
      des: "The first product when learning ReactJS is a website used to manage videos using the CRUD model.",
      was: "2023",
      role: "Frontend",
      fe: "ReactJS",
      be: ".NET Core API",
      Demo: "https://github.com/KattyN10/DoAn_CNPM.git",
    },
    {
      id: 5,
      name: "UTE News",
      ava: imgPro5_1,
      img: [
        {
          src: imgPro5_1,
        },
        {
          src: imgPro5_2,
        },
        {
          src: imgPro5_3,
        },
      ],
      des: "This is an online news website, developed by 4 members, with full features for each user type such as anonymous users, readers, journalists, editors, admins, etc.",
      was: "2022",
      role: "FullStack",
      fe: "HTML/CSS/Bootstrap",
      be: "Java Servlet/MySQL",
      Demo: "https://github.com/Baboga39/Final_Project_Web.git",
    },
  ];

  return (
    <Container className="container-project">
      <Row>
        <div
          className="d-flex align-items-center justify-content-center mt-5"
          style={{ color: "var(--text-color)" }}
        >
          <span className="text-heading">works space</span>
          <h1>
            <span>MY</span>{" "}
            <span style={{ color: "var(--decor-color)" }}>PROJECT</span>
          </h1>
        </div>
      </Row>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Container className="d-flex align-items-center justify-content-center mt-5">
          <Nav className="nav-tab mt-3" defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link
                style={{ color: "var(--text-color)" }}
                eventKey="first"
                href="#"
              >
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                style={{ color: "var(--text-color)" }}
                aria-controls="home"
                role="tab"
                data-toggle="tab"
                eventKey="second"
              >
                HTML/CSS/JS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link style={{ color: "var(--text-color)" }} eventKey="third">
                REACT/SCSS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link style={{ color: "var(--text-color)" }} eventKey="four">
                API
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
        <Container className="list-project">
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Row className="row-content" xs={2} md={3}>
                <div className="cardProduct mb-3">
                  <CardProduct data={dataAll[0]} />
                </div>
                <div className="cardProduct mb-3">
                  <CardProduct data={dataAll[1]} />
                </div>
                <div className="cardProduct mb-3">
                  <CardProduct data={dataAll[2]} />
                </div>
                <div className="cardProduct mb-3">
                  <CardProduct data={dataAll[3]} />
                </div>
                <div className="cardProduct mb-3">
                  <CardProduct data={dataAll[4]} />
                </div>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Row className="row-content" xs={2} md={3}>
                <div className="cardProduct mb-3">
                  <CardProduct data={dataAll[4]} />
                </div>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              {" "}
              <Row className="row-content" xs={2} md={3}>
                <div className="cardProduct mb-3">
                  <CardProduct data={dataAll[0]} />
                </div>
                <div className="cardProduct mb-3">
                  <CardProduct data={dataAll[1]} />
                </div>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="four">
              {" "}
              <Row className="row-content" xs={2} md={3}>
                <div className="cardProduct mb-3">
                  <CardProduct data={dataAll[2]} />
                </div>
                <div className="cardProduct mb-3">
                  <CardProduct data={dataAll[3]} />
                </div>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
}
export default Project;
