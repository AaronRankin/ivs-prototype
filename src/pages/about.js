import React from 'react';
import Layout from '../components/layout';
import { Parallax, Background } from 'react-parallax'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import { Helmet } from "react-helmet"

import { MdVpnLock } from "react-icons/md"
import { GoCreditCard } from "react-icons/go"
import { GoGitMerge } from "react-icons/go"
import { GrCurrency } from "react-icons/gr"
import { GrCreditCard } from "react-icons/gr"
import { GrSystem } from "react-icons/gr"
import { GrDocumentUser } from "react-icons/gr"
import { GrLanguage } from "react-icons/gr"
import { GrIntegration } from "react-icons/gr"
import { GrNodes } from "react-icons/gr"
import { MdPhonelinkLock } from "react-icons/md"
import { MdDevices } from "react-icons/md"
import { TiArrowDownThick } from "react-icons/ti"

import "../components/layout.css"
import "../styles/about.css"

const About = ( { data } ) => (  
    <Layout>
        <Helmet>
            <title>About Us | IVS Group</title>
        </Helmet>
        <Parallax bgImage={require("../images/jungle-long.jpg")} strength={1000} bgImageStyle={{width: "100%", objectFit: "cover", objectPosition: "center bottom", marginTop: "20vw"}}>
         <div className="about-top-banner-color-overlay">       
            <div className="about-top-banner">
                <div className="about-title-box">
                    <h1>Bespoke Banking Solutions</h1>
                    <h2 style={{ fontStyle: "italic", marginBottom: 0 }}>for the ecommerce world</h2>
                </div>
            </div>
         </div> 
         <div className="about-second-banner-color-overlay">  
            <div className="about-second-banner">
                <h3>Establishing banking facilties can be a nightmare for online businesses.</h3>
                <p>IVS Group's growing network has already enabled a variety of online businesses to easily gain access to financial services.</p>
                <p>Through our portfolio of partners we can pair you with a provider most suited to meet your needs</p>
            </div>
         </div>  
         <div className="about-third-banner-color-overlay"> 
            <div className="about-third-banner">
                <h3>Business Bank Accounts</h3>
                <p>We understand the challenges online businesses face when opening a bank account.</p>
                <p>Non-resident directors and/or UBOs, international B2C & C2B payments and high risk sectors/geographies, are just a few issues that can cause a bank to reject or close an account.</p>
                <p>At IVS Group we have successfully opened accounts for clients in a wide variety of sectors such as Gaming, Forex, Crypto Currency Exchanges and Online Casinos.</p>
            </div>
         </div>   
         <div className="about-account-features-color-overlay">
            <h1 style={{ marginBottom: 40 }}>All our accounts feature...</h1>
            <div className="about-account-features">
                
                <div className="about-icons">
                    <MdVpnLock className="about-icon" />
                    
                    <p>International Payments & Competitive FX</p>
                </div>
                <div className="about-icons">
                    <GrLanguage className="about-icon" />
                    <p>SEPA, SWIFT & Faster Payments</p>
                </div>
                <div className="about-icons">
                    <GoGitMerge className="about-icon" />
                    <p>Mass Payments</p>
                </div>
                <div className="about-icons">
                    <GrCreditCard className="about-icon" />
                    <p>Unique IBAN</p>
                </div>
                <div className="about-icons">
                    <MdDevices className="about-icon" />
                    <p>Intuitive Banking Platform</p>
                </div>
                <div className="about-icons">
                    <GrDocumentUser className="about-icon" />
                    <p>Account in Company Name</p>
                </div>
                <div className="about-icons">
                    <GrCurrency className="about-icon" />
                    <p>USD & Multi Currency Accounts</p>
                </div>
                
                <div className="about-icons">
                    <GrSystem className="about-icon" />
                    <p>Multiple Account Permissions</p>
                </div>
            </div>
         </div>  
         <div className="about-co-highlights-color-overlay"> 
            <h2 style={{ marginBottom: 50 }}>
                <span
                style={{ backgroundColor: "#f5ed12", paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, color: "#00AEEF" }}
                >IVS Group has:</span></h2>
            <div className="about-co-highlights" >
                <div className="about-co-highlights-list">
                    <div className="about-co-highlight-examples highlight-one">
                        <p style={{ marginBottom: 0 }}>Relationships with over 35 UK & EU banks</p>
                    </div>
                    <div className="about-co-highlight-examples highlight-two">
                        <p style={{ marginBottom: 0 }}>Clients with monthly revenue & settlements exceeding $100m/month</p>
                    </div>
                    <div className="about-co-highlight-examples highlight-three">
                        <p style={{ marginBottom: 0 }}>An account opening success rate in excess of 85%</p>
                    </div>
                </div>
            </div>
         </div> 
         <div className="about-get-started-color-overlay">
            <div className="about-get-started">
                <h2>To Get Started</h2>
                <div className="about-get-started-process">
                    <div className="about-get-started-steps" style={{ marginBottom: 10 }}>
                        <p style={{ marginBottom: 0 }}>Get in touch with our dedicated team to discuss your banking needs.</p>
                    </div>
                    <TiArrowDownThick className="about-get-started-arrow" />
                    <div className="about-get-started-steps" style={{ marginBottom: 10, marginTop: 10 }} >
                        <p style={{ marginBottom: 0 }}>Complete the KYC & due diligence documentation.</p>
                    </div>
                    <TiArrowDownThick className="about-get-started-arrow"/>
                    <div className="about-get-started-steps" style={{ marginBottom: 10, marginTop: 10 }}>
                        <p style={{ marginBottom: 0 }}>Receive you online account access</p>
                    </div>
                    <TiArrowDownThick className="about-get-started-arrow" style={{ marginBottom: 10 }}/>
                </div>
                <Link className="about-contact-link" to="/apply"><span className="about-contact-btn">Apply Today</span></Link>
            </div> 
         </div>
        </Parallax>

    </Layout>
);

 
export default About;

export const pageQuery = graphql`
    query {
        file(relativePath: {eq: "jungle-long.jpg"}) {
            id
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`