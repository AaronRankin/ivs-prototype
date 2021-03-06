import React from "react"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import "../styles/apply.css"
import Footer from "../components/footer"
import Form from "../components/form"
import Header from "../components/header"
import Layout from "../components/layout"

const Apply = (props) => (
    <>
        <Helmet>
            <title>Apply Now  |  IVS Group</title>
        </Helmet>
        <Header />
        <div className="form-wrapper">
            <div className="contact-form">
                <Form/>
            </div>
            <Footer />
        </div>
    </>
)

export default Apply;

export const pageQuery = graphql`
  query {
    logo: file(relativePath: {eq: "ivs-logo.png"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }  
  }
`;