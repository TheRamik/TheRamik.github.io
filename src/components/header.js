import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";
import NavLink from "./nav-link";
import { FaIdCard, FaLaptopCode, FaGamepad, FaFileAlt } from "react-icons/fa";

window.onscroll = function() {scrollFunction()};

  // When the user scrolls down 20px from the top of the document, slide down the navbar
  // When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }

const Header = ({ siteTitle }) => (


  <header
    style={{
      background: `#333`,
      marginBottom: `1.45rem`,
      textAlign: `center`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div id="navbar">
        <NavLink to="/about-me/"><FaIdCard /> ABOUT ME</NavLink>
        <NavLink to="/blog/">< /> ABOUT ME</NavLink>
        <NavLink to="/projects/"><FaLaptopCode /> PROJECTS</NavLink>
  		  <NavLink to="/hobbies/"><FaGamepad /> HOBBIES</NavLink>
  		  <NavLink to="/resume/"><FaFileAlt /> RESUME</NavLink>
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
