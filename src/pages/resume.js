import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>Resume</h1>
    <hr></hr>
    <p>Template for Resume.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resume
