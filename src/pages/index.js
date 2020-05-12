import React from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"



const IndexPage = (props) => (
  <Layout>
    <Helmet>
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="wbsite" />
    <meta property="og:title" content="IVS Group - The Future of eCommerce" />
    <meta property="og:url" content="https://ivs.group/" />
    <meta property="og:site_name" content="IVS Group" />
    <meta property="og:image" content="/images/ivs-twitter-card.png" />
    <meta property="og:image:secure_url" content="https://ivs.group" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="IVS Group - The Future of eCommerce" />
    <meta name="twitter:site" content="@ivsgroup" />
    <meta name="twitter:image" content="images/ivs-twitter-card.png" />
    <meta name="twitter:creator" content="ivsgroup" />
    <title>IVS Group | The Future of eCommerce</title>
    </Helmet>
    <BackgroundImage
    style={{
      backgroundPosition: "center bottom"
    }}
    fluid={props.data.backgroundImage.childImageSharp.fluid}>
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
  </Layout>
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
  }
`;
