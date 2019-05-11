import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "images/headshot-suit.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const AboutMe = ( {data} ) => (
  <Layout>
    <SEO title="About Me" />
    <h1>About Me</h1>
    <hr></hr>
    <Img fixed={data.placeholderImage.childImageSharp.fixed} />
    <p>A recent graduate (2018) from University of California, Irvine (UCI) with a degree in Computer Science. 
      I am currently a Systems Engineer in the Orange County area at a company called Unisys.

    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutMe
/*

export default ({ data }) => (
  <Layout>
  <SEO title="About Me" />
  <h1>About Me</h1>
  <hr></hr>
  <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  <p>A recent graduate (2018) from University of California, Irvine (UCI) with a degree in Computer Science. 
    I am currently a Systems Engineer in the Orange County area at a company called Unisys.

  </p>
  <Link to="/">Go back to the homepage</Link>
</Layout>
)
*/