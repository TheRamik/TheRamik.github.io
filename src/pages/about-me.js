import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>Hi from the About Me Page</h1>
    <p>Welcome to About me</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutMe
