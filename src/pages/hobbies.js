import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"

const Hobbies = () => (
  <Layout>
    <SEO title="Hobbies" />
    <h1>Hobbies</h1>
    <hr></hr>
    <p>Template for Hobbies.  
    <Video
        videoSrcURL="https://www.youtube.com/embed/YCPDVVLUw-4"
        videoTitle="Official Music Video on YouTube"
      />
    </p>
  </Layout>
)

export default Hobbies
