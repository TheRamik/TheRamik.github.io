/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import centerStyles from './center.module.scss'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: '1.45rem',
            marginBottom: `1.45rem`,
          }}
        >
          <main>{children}</main>
        </div>
        <br/><br/>
        <div className={centerStyles.center}>
          <Link to="/">Go back to the homepage</Link>
        </div>
        <br/><br/>
        <Footer siteAuthor={data.site.siteMetadata.author}/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
