import React from "react"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "../styles/application-received.css"
import Footer from "../components/footer"

const ApplicationSubmitted = (props) => (
    <>
        <Helmet>
            <title>Thank You | IVS Group</title>
        </Helmet>
        <div className="apply-logo">
            <Link to="/"><Img style={{
                width: "20%"
            }}
                fluid={props.data.logo.childImageSharp.fluid} /></Link>
        </div>
        <BackgroundImage style={{height: "100vh"}} fluid={props.data.forest.childImageSharp.fluid}>
            <div className="wrapper">
                <div className="thank-you">
                
                    <h1>Thank you for getting in touch.</h1>
                    <p>A member of our team will be in contact shortly to see how IVS can take your eCommerce business to the next level. </p>
                    
                </div>
            </div>
        </BackgroundImage>


        <Footer/>
    </>
)

export default ApplicationSubmitted;

export const pageQuery = graphql`
  query {
    logo: file(relativePath: {eq: "ivs-logo.png"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    forest: file(relativePath: {eq: "rainforest.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }  
       
  }
`;