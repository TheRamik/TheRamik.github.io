import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>About Me</h1>
    <hr></hr>
    <p>A recent graduate (2018) from University of California, Irvine (UCI) with a degree in Computer Science. 
      I am currently a Systems Engineer in the Orange County area at a company called Unisys.

    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutMe
