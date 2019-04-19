import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import NavLink from "./nav-link";
import { FaIdCard, FaLaptopCode, FaGamepad, FaFileAlt } from "react-icons/fa";

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
      <NavLink to="/about-me/"><FaIdCard /> About Me</NavLink>
      <NavLink to="/projects/"><FaLaptopCode /> Projects</NavLink>
  		<NavLink to="/hobbies/"><FaGamepad /> Hobbies</NavLink>
  		<NavLink to="/resume/"><FaFileAlt /> Resume</NavLink>
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
