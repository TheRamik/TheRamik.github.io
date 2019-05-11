import React from "react"
import { Link } from "gatsby"

import Layout from "../components/mlayout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout skipStyle="true">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `100%`}}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
