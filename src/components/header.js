import { Link, graphql, useStaticQuery } from "gatsby"
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
      <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/apply">Apply Now</Link></li>
        </ul>
      </nav>
      <label for="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
  }

export default Header;
