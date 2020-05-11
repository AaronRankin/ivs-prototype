import React from "react"
import { Link } from "gatsby"

const Form = () => (
    <>
        <form name="new-client" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input className="field" name="firstName" placeholder="First Name" type="text" /><br/>
            <input className="field" name="lastName" placeholder="Last Name" type="text" /><br/>
            <input className="field" name="email" placeholder="Your Email" type="text" /><br/>
            <input className="field" name="companyName" placeholder="Company Name" type="text" /><br/>
            <input className="field" name="regCountry" placeholder="Registration Country" type="text" /><br/>
            <input className="field" name="companyNumber" placeholder="Company Number" type="text" /><br/>
            <input className="field" name="website" placeholder="Website" type="text" /><br/>
            <input className="field" name="phone" placeholder="Phone Number" type="text" /><br/>
            <input className="field" name="bizType" placeholder="Business Type" type="text" /><br/>
            <p>Inbound Funds</p>
            <span>B2B</span><input type="checkbox" name="inboundB2B" />
            <span style={{paddingLeft: "5px"}}>B2C</span><input type="checkbox" name="inboundB2C" />
            <span style={{paddingLeft: "5px"}}>C2B</span><input type="checkbox" name="inboundC2B" /><br/>
            <input className="field" name="inboundMonthlyVolume" placeholder="Monthly Volume" type="text" /><br/>
            <input className="field" name="inboundCurrencies" placeholder="Business Type" type="text" /><br/>
            <p>Outboundbound Funds</p>
            <span>B2B</span><input type="checkbox" name="B2B" />
            <span style={{paddingLeft: "5px"}}>B2C</span><input type="checkbox" name="B2C" />
            <span style={{paddingLeft: "5px"}}>C2B</span><input type="checkbox" name="C2B" /><br/>
            <input className="field" name="outboundMonthlyVolume" placeholder="Monthly Volume" type="text" /><br/>
            <input className="field" name="outboundCurrencies" placeholder="Business Type" type="text" /><br/>
            <textarea className="field" name="anyFurtherInfo" placeholder="Any Additional Information"/><br/>
            <Link style={{textDecoration: "none", color: "white"}} to="application-received"><button type="submit">Submit</button></Link>
        </form>
    </>
)

export default Form;