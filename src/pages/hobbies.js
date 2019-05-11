import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Hobbies = () => (
  <Layout>
    <SEO title="Hobbies" />
    <h1>Hobbies</h1>
    <hr></hr>
    <p>Template for Hobbies.  
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Hobbies
