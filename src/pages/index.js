import React from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import FrontHeader from "../components/front-header"



const IndexPage = (props) => (
  <div>
    <Helmet>
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="IVS Group - The Next Generation of Business Banking" />
    <meta property="og:url" content="https://ivs.group/" />
    <meta property="og:site_name" content="IVS Group" />
    <meta property="og:image" content={`${props.data.site.siteMetadata.url}${props.data.twitterCard.publicURL}`} />
    <meta property="og:image:secure_url" content="https://ivs.group" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="IVS Group - The Next Generation of Business Banking" />
    <meta name="twitter:site" content="@ivsgroup" />
    <meta name="twitter:image" content={`${props.data.site.siteMetadata.url}${props.data.twitterCard.publicURL}`} />
    <meta name="twitter:creator" content="ivsgroup" />
    <title>IVS Group | The Next Generation of Business Banking</title>
    </Helmet>
    <BackgroundImage
    style={{
      backgroundPosition: "center bottom"
    }}
    fluid={props.data.backgroundImage.childImageSharp.fluid}>
      <FrontHeader />
      <div className="front-page-text">
        <div>
          <p className="main-title"><span>IVS</span></p>
          <p className="main-title">GROUP</p>
          <p className="tag-line"><em>The next generation of business banking</em></p>
          <br/>
          <p><Link className="form-link" to="/apply"><span>Apply Now</span></Link></p>
        </div>
      </div>
    </BackgroundImage>
  </div>
)

export default IndexPage;

export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: {eq: "rainforest.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }  
    twitterCard: file(relativePath: {eq: "ivs-twitter-card.png"}) {
      publicURL
    }
    site {
      siteMetadata {
        url
      }
    }
  }
`;
