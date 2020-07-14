import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import Img from "gatsby-image/withIEPolyfill"
import { Link } from "gatsby"

import useDocumentScrollThrottled from "./useDocumentScrollThrottled"
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

  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  const hiddenStyle = shouldHideHeader ? 'hidden' : '';


  return(
        <header className={`header ${shadowStyle} ${hiddenStyle}`}>
            
            <Img className="inner-logo" objectFit="contain" fluid={data.file.childImageSharp.fluid} />
            
            <div className="menu-holder">
                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
                <ul class="menu">
                    <li className="menu-item"><Link to="/apply" className="menu-link">Apply Now</Link></li>
                    {/* <li className="menu-item"><Link to="/contact" className="menu-link">Contact</Link></li> */}
                </ul>
            </div>
            


        </header>
  );
  }

export default Header;
