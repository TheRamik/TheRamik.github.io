import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import centerStyles from './center.module.scss'

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <hr></hr>
    <p>Template for projects page
    </p>
    <div className={centerStyles.center}>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Projects
