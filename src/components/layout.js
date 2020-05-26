

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import Header from "./header"
import Footer from "./footer"
import "./layout.css"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{
      height: '100%',
      }}>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          padding: `0`,
          height: "100%"
        }}
      >
        <main style={{height: "100%"}}>{children}</main>
        
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout




