import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image/withIEPolyfill"

import "../styles/front-header.css"

const FrontHeader = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "ivs-logo.png"}) {
        id
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  return(
    <header className="front-header">
        
      <Img className="landing-logo" objectFit="contain" objectPosition="bottom" fluid={data.file.childImageSharp.fluid} />
     
    </header>
  );
  }

export default FrontHeader;
