import React from "react";
import "./home.scss";
import Menu from "../menu/menu";
import Intro from "../intro/intro";
import Project from "../project/project";
import AboutMe from "../aboutMe/aboutMe";
import Contact from "../contact/contact";
import AppRouter from "../router/appRouter";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <div className="home-container">
      <div className="toggle-switch">
        <label className="switch-label">
          <input type="checkbox" class="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
      <Container className="container-menu">
        <div className="navMenu">
          <Menu />
        </div>
      </Container>
      <div>
        <Intro />
      </div>
    </div>
  );
}
export default Home;
