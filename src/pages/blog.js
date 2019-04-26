import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

    return (
      <Layout>
        <SEO title="Blog" />
        <h1>Blog</h1>
        <ol>
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
}

export default BlogPage