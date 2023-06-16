import React from "react";
import AboutMe from "../aboutMe/aboutMe";
import Project from "../project/project";
import Contact from "../contact/contact";
import Home from "../home/home";
import { Routes, Route } from "react-router-dom";
import Intro from "../intro/intro";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRouter;
