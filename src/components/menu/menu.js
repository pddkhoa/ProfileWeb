import React from "react";
import "./menu.scss";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

function Menu() {
  return (
    <Navbar>
      <Nav>
        <div className="navbarButton">
          <NavLink to="/">
            <div className="buttonX">
              <div className="iconAction">
                <i class="fa-solid fa-house"></i>
              </div>
              <div className="textIcon">HOME</div>
            </div>
          </NavLink>
          <NavLink to="/aboutme">
            <div className="buttonX">
              <div className="iconAction">
                <i class="fa-solid fa-user"></i>
              </div>
              <div className="textIcon">About me</div>
            </div>
          </NavLink>

          <NavLink to="/project">
            <div className="buttonX">
              <div className="iconAction">
                <i class="fa-solid fa-briefcase"></i>
              </div>
              <div className="textIcon">Project</div>
            </div>
          </NavLink>

          <NavLink to="/contact">
            <div className="buttonX">
              <div className="iconAction">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="textIcon">Contact</div>
            </div>
          </NavLink>
        </div>
      </Nav>
    </Navbar>
  );
}
export default Menu;
