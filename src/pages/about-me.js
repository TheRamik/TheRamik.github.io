import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import aboutMeStyles from './about-me.module.scss'

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
      I am currently a Systems Engineer in the Orange County area at a company called Unisys. I have a few
      things that I enjoy doing - traveling, making music, playing games, and dancing! 
    </p>
    <br/><br/>
    <p>
      I was not a great when I started my journey in Computer Science. I began learning about programming
      in High School at a institute called Don Bosco Technical Institute. At Don Bosco, there were a handful 
      of technical fields for the students to choose. During my time there, I chose the technical field
      called Electrical Engineering and Computer Science. The first language I ever learned about was
      Visual Basic C++ and I did not understand a single thing in that class. Within that tecnical field, 
      we were able to choose our focus and I decided to stick with Electrical Engineering as I understood
      many of the concepts a lot better than Computer Science. 

      During my senior year in high school, I was given the opportunity to take an embedded systems class
      where I learned about programming a microcontroller and integrating that to a circuit. From that class
      alone, I found a bit of passion towards programming again as I began to realize the concepts I never
      understood.

      Moving to college, I started my studies at California State University, Los Angeles studing Electrical
      Engineering. I took a lot of my general education classes there, but I also took all the Electrical
      Engineering courses that I was able to take and had no trouble with them. I also tutored other colleagues
      in my classes so that they could understand the concepts better. As I was assisting them, I felt like it
      also helped me solidify my understandings on the topics. While at CSULA, I did not stop taking programming
      courses. When I had an open slot available, I would take a programming class. A particular programming
      course I enjoyed at CSULA was the Front-end development course. At the end of my second year, I was accepted
      to transfer to University of California, Irvine. At UCI, I would switch my majors a several times, but
      in the end I chose to stick with Computer Science.

      While studing Computer Science at UCI, I've deepen my understanding of object oriented programming and how 
      to apply the fundamentals to my projects to make programming easier for me to understand. I believe the 
      greatest thing I've learned at UCI was the amount of algorithms there are and how abstract programming can be.
      I was happy that there were application programming classes in algorithms where we can take a class on 
      implementing algorithms for a specific case. The class showed me how to create an algorithm and how to improve
      on it by finding the most optimized use cases. I believe it really helped me understand core concepts of 
      programming and how to apply it in event-driven software.
    </p>
  </Layout>
)

export default AboutMe