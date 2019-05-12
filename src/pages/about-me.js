import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import aboutMeStyles from './about-me.module.scss'
import centerStyles from './center.module.scss'

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "images/headshot-suit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
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
    <Img className={aboutMeStyles.introImg}
      fluid={data.placeholderImage.childImageSharp.fluid} 
    />
    <p className={aboutMeStyles.intro}>
      A recent graduate (2018) from University of California, Irvine (UCI) with a degree in Computer Science. 
      I am currently a Systems Engineer in the Orange County area at a company called Unisys. I really enjoy traveling,
      making music, playing multiplayer video games, and dancing! 
    </p>
    <br/><br/>
    <p>
      While at UCI, I learned about creating video games. I believe it really helped me understand core concepts of 
      programming and how to apply it in event-driven software.  
    </p>
    <br/><br/>
    <div className={centerStyles.center}>
      <Link to="/">Go back to the homepage</Link>
    </div>
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