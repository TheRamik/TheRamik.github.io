import React, { Component } from "react"
import { Document, Page, pdfjs } from 'react-pdf'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import centerStyles from './center.module.scss'


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class Resume extends Component {
  state = {
    numPages:null,
    pageNumber: 1
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const {pageNumber, numPages } = this.state;

    return (
      <Layout>
        <SEO title="Resume" />
        <h1>Resume</h1>
        <hr></hr>
        <div className={centerStyles.center}>
          <Document styles={{
            textAlign: `center`
          }}
            file="/pdfs/RickyTham_CS_Resume.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page
              size={"A5"}
              pageNumber={pageNumber} />
          </Document>
        </div>
        <p className={centerStyles.center}>
          {pageNumber} / {numPages} 
        </p>
        <div className={centerStyles.center}>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </Layout>
    );
  }
}
/*
textAlign: `center`
const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>Resume</h1>
    <hr></hr>
    <iframe src="./pdfs/RickyTham_CS_Resume.pdf" width="100%" height="500px">
    </iframe>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
*/

export default Resume
