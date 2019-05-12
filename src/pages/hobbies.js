import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import centerStyles from './center.module.scss'

const Hobbies = () => (
  <Layout>
    <SEO title="Hobbies" />
    <h1>Hobbies</h1>
    <hr></hr>
    <p>Template for Hobbies.  
    </p>
    <div className={centerStyles.center}>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Hobbies
