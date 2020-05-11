import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const Header = () => {

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
    <header id="header">
      <div className="logo">    
        <Img className="inner-logo" fluid={data.file.childImageSharp.fluid} />
      </div>
    </header>
  );
  }

export default Header;
