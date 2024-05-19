import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import logo from "../assets/Images/Logo.png";
const CustomNav = () => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    window.onscroll = () => {
      if (window.scrollY > 100) {
        navbar.classList.add("active");
      } else {
        navbar.classList.remove("active");
      }
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" className=" navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
              <Link
                className="nav-link"
                activeClass="active"
                to="programe"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Programe
              </Link>
              <Link
                className="nav-link"
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Pricing
              </Link>
              <Link
                className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Community
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNav;
