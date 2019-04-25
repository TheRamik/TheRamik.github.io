import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Headroom from "react-headroom"
import NavLink from "./nav-link";
import { FaPollH, FaIdCard, FaLaptopCode, FaGamepad, FaFileAlt } from "react-icons/fa";

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
      <Headroom
        pinStart={90}
        style={{
          webkitTransition: 'all .5s ease-in-out',
          mozTransition: 'all .5s ease-in-out',
          oTransition: 'all .5s ease-in-out',
          transition: 'all .5s ease-in-out',
          background: `#333`,
          marginBottom: `1.45rem`,
          textAlign: `center`
        }}
      >
        <NavLink to="/about-me/"><FaIdCard /> ABOUT ME</NavLink>
        <NavLink to="/blog/"><FaPollH /> BLOG</NavLink>
        <NavLink to="/projects/"><FaLaptopCode /> PROJECTS</NavLink>
  		  <NavLink to="/hobbies/"><FaGamepad /> HOBBIES</NavLink>
  		  <NavLink to="/resume/"><FaFileAlt /> RESUME</NavLink>
      </Headroom>
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
