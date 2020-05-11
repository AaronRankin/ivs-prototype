import React from "react"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"

import "../styles/apply.css"
import "../fonts/fonts.css"
import Footer from "../components/footer"
import Form from "../components/form"

const Apply = (props) => (
    <>
        <div className="apply-logo">
            <Link to="/"><Img style={{
                width: "20%"
            }}
                fluid={props.data.logo.childImageSharp.fluid} /></Link>
        </div>
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