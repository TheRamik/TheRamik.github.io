import React from "react";
import SocialMediaLink from "./social-media-link";
import { FaLinkedinIn, FaGithubAlt} from "react-icons/fa";

const Footer = () => (
    <footer
      style={{
        textAlign: `center`
      }}
    >
      <div
        style={{
          background: `#333`,
          marginTop: `1.45rem`,
          marginBottom: `1.45rem`,
          margin: `0 auto`,
          maxWidth: 2000,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <SocialMediaLink href="https://www.linkedin.com/in/rickytham" title="LinkedIn">
	        <FaLinkedinIn size={28}/>
        </SocialMediaLink>
        <SocialMediaLink href="https://github.com/TheRamik/" title="Github">
	        <FaGithubAlt size={28}/>
        </SocialMediaLink>
      </div>
      <div
        style={{
          marginTop: `1.45rem`,
          marginBottom: `1.45rem`,
        }}
      >
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org" 
          title="GatsbyJS" target="_blank" rel="noopener noreferrer">Gatsby</a>
        <p>Created by Ricky Tham</p>
      </div>
    </footer>
)

export default Footer