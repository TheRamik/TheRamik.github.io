import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => {
  <Layout>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <h1>Blog Posts</h1>
      <p>Welcome to The blog posts. Post will show up here later on.</p>
      </div>
  </Layout>
}

export default BlogPage