import React from 'react';
import Layout from '../components/layout';
import { Parallax, Background } from 'react-parallax'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import { Helmet } from "react-helmet"
import styled from "styled-components"

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
import { AiOutlineBank } from "react-icons/ai"

import "../components/layout.css"
import "../styles/about.css"

const About = ( { data } ) => (  
    <Layout>
        <Helmet>
            <title>About Us | IVS Group</title>
        </Helmet>
        <div style={{ width: "100%", transition: "500ms ease-in-out" }}></div>
        <Parallax bgImage={data.jungleOne.childImageSharp.fluid.originalImg} strength={1000} bgClassName="bg-one">
         <div className="about-top-banner-color-overlay">       
            <div className="about-top-banner">
                <div className="about-title-box">
                    <h2 className="top-title">We Will Find You</h2>
                    <h1 className="lower-title">A Corporate Bank Account</h1>
                </div>
            </div>
         </div>
         </Parallax> 
         <div className="about-second-banner-color-overlay">  
            <div className="about-second-banner">
                <div className="about-second-banner-button">
                    <h2 className="top-button-title">To get started</h2>
                    <LinkButton to="/apply">Apply Today</LinkButton>

                </div>
                <div className="about-second-banner-blurb">
                    <p className="top-text">IVS Group's growing network has already enabled a variety of online businesses to easily gain access to financial services.</p>
                    <p className="top-text" style={{marginBottom: "0px"}}>Through our portfolio of partners we can pair you with a provider most suited to meet your needs.</p>
                </div>
            </div>
         </div> 
         <div className="about-third-banner-color-overlay"> 
            <div className="about-third-banner">
                <div className="about-third-banner-title">
                    <h2 className="about-third-banner-title-text">Business Bank Accounts</h2>
                </div>
                <div className="about-third-banner-blurb">
                    <p className="about-third-banner-blurb-text">We understand the challenges online business face when opening a bank account.</p>
                    <p className="about-third-banner-blurb-text">Non-resident directors and/or UBO’s international B2C&C2B payments and high risk sectors/geographies, are just a few issues that can cause a bank reject or close an account.</p>
                    <p className="about-third-banner-blurb-text" style={{marginBottom: "0px"}}>At IVS Group we have successfully opened accounts for clients in a wide variety of sectors such as Gaming, Forex, Crypto Currency Exchanges and Online Casinos.</p>
                </div>
            </div>
         </div> 
         <div className="about-account-features-color-overlay">
            <h1 style={{ marginBottom: 40 }}>Our Offering</h1>
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
         <Parallax bgImage={data.jungleTwo.childImageSharp.fluid.originalImg} strength={1000} bgImageStyle={{ objectFit: "cover", objectPosition: "center bottom"}}>
         <div className="about-co-highlights-color-overlay"> 
            <div className="highlight-title">
                <h2 style={{ marginBottom: 0 }}>IVS Group has:</h2>
            </div>
            <div className="about-co-highlights" >
                <div className="about-co-highlights-list">
                    <div className="about-co-highlight-examples highlight-one" style={{gridArea: "a"}}>
                        <AiOutlineBank className="bank-icon" style={{marginTop: "0"}}/>
                    </div>
                    <div className="about-co-highlight-examples highlight-two" style={{gridArea: "b"}}>
                        <AiOutlineBank className="bank-icon" />
                    </div>
                    <div className="about-co-highlight-examples highlight-three" style={{gridArea: "c"}}>
                        <AiOutlineBank className="bank-icon" />
                    </div>
                    <div className="about-co-highlight-examples highlight-one" style={{gridArea: "d"}}>
                        <p style={{ marginBottom: 0 }}>Relationships with over 35 UK & EU banks</p>
                    </div>
                    <div className="about-co-highlight-examples highlight-two" style={{gridArea: "e"}}>
                        <p style={{ marginBottom: 0 }}>Clients with monthly revenue & settlements exceeding $100m/month</p>
                    </div>
                    
                    <div className="about-co-highlight-examples highlight-three" style={{gridArea: "f"}}>
                        <p style={{ marginBottom: 0 }}>An account opening success rate in excess of 85%</p>
                    </div>
                </div>
            </div>
         </div> 
         </Parallax>
         <div className="about-get-started-color-overlay">
            <div className="about-get-started">
            <div className="highlight-title">
                <h2 style={{ marginBottom: 0 }}>To Get Started:</h2>
            </div>
                <div className="about-get-started-process">
                    <div className="get-started-step">
                        <div className="step-number">
                            <h1 className="step-number-text">1</h1>
                            <div className="step-image-holder">
                                <Img fluid={data.toucanStepOne.childImageSharp.fluid}/>
                            </div>
                        </div>
                        <p className="step-text">Get in touch with our desicated team to discuss your banking needs</p>
                    </div>
                    <div className="get-started-step">
                        <div className="step-number">
                            <h1 className="step-number-text">2</h1>
                            <div className="step-image-holder">
                                <Img fluid={data.toucanStepTwo.childImageSharp.fluid}/>
                            </div>
                        </div>
                        <p className="step-text">Complete the KYC & due diligence documentation</p>
                    </div>
                    <div className="get-started-step">
                        <div className="step-number">
                            <h1 className="step-number-text">3</h1>
                            <div className="step-image-holder">
                                <Img fluid={data.toucanStepThree.childImageSharp.fluid}/>
                            </div>
                        </div>
                        <p className="step-text">Receive you online account access</p>
                    </div>
                </div>
            </div> 
         </div>
         <Parallax bgImage={data.jungleTwo.childImageSharp.fluid.originalImg} strength={1000} bgImageStyle={{ objectFit: "cover", objectPosition: "center bottom"}}>
         <div className="about-bottom-section">
             <div className="apply-section">
                <div className="apply-tagline">
                    <h1 className="apply-tagline-text">Find The Right Banking Solution For Your Business</h1>
                </div>
                <div className="apply-button">
                    <ApplyButton>Apply Now</ApplyButton>
                </div>
             </div>
         </div>    
         </Parallax>

        
    </Layout>
);

 
export default About;

export const pageQuery = graphql`
    query {
        jungleOne: file(relativePath: {eq: "rainforest.jpg"}) {
            id
            childImageSharp {
                fluid(maxWidth: 2000) {
                    originalImg
                }
            }
        }
        jungleTwo: file(relativePath: {eq: "forest-closer.jpg"}) {
            id
            childImageSharp {
                fluid(maxWidth: 2000) {
                    originalImg
                }
            }
        }
        toucanStepOne: file(relativePath: {eq: "toucan-step-1.png"}) {
            id
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        toucanStepTwo: file(relativePath: {eq: "toucan-step-2.png"}) {
            id
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        toucanStepThree: file(relativePath: {eq: "toucan-step-3.png"}) {
            id
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

const LinkButton = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 700;
    background-color: #f5ed12;
    padding: 10px 40px;
    border-radius: 5px;
    font-size: 20px;

    &:hover{
        color: white;
        background-color: black;
        transition: 400ms ease-in-out;
    }
`

const ApplyButton = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 700;
    background-color: #f5ed12;
    padding: 10px 40px;
    border-radius: 5px;
    font-size: 20px;
    align-self: center;
    justify-self: center;

    border: 3px solid #f5ed12;

    &:hover{
        color: black;
        box-shadow: 0px 0px 0px 5px rgba(245, 237, 18, .4);
        transition: all 400ms ease-in-out;
    }
`