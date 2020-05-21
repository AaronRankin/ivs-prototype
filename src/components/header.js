import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { Link } from "gatsby"


import "../styles/header.css"

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
    <header className="header">
        
        <Img className="inner-logo" objectFit="contain" fluid={data.file.childImageSharp.fluid} />
        
        <div className="menu-holder">
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
            <ul class="menu">
                <li className="menu-item"><Link to="/apply" className="menu-link">Apply Now</Link></li>
                <li className="menu-item"><Link to="/contact" className="menu-link">Contact</Link></li>
            </ul>
        </div>
        


    </header>

  );
  }

export default Header;
