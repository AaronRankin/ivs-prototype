import React from "react"
import { Link } from "gatsby"


const Form = () => (
    <>
        <form name="new-client" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/application-received">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="new-client" />
            <label htmlFor="firstName">
                <input className="field" name="firstName" id="firstName" placeholder="First Name" type="text" required/>
            </label>
            <br/>
            <label htmlFor="lastName">
                <input className="field" name="lastName" id="lastName" placeholder="Last Name" type="text" required/>
            </label>
            <br/>
            <label htmlFor="email">
                <input className="field" name="email" id="email" placeholder="Your Email" type="email" required/>
            </label>
            <br/>
            <label htmlFor="companyName">
                <input className="field" name="companyName" id="companyName" placeholder="Company Name" type="text" required/>
            </label>
            <br/>
            <label htmlFor="regCountry">
                <input className="field" name="regCountry" id="regCountry" placeholder="Registration Country" type="text" />
            </label>
            <br/>
            <label htmlFor="companyNumber">
                <input className="field" name="companyNumber" id="companyNumber" placeholder="Company Number" type="text" required/>
            </label>
            <br/>
            <label htmlFor="website">
                <input className="field" name="website" id="website" placeholder="Website" type="text" />
            </label>
            <br/>
            <label htmlFor="phone">
                <input className="field" name="phone" id="phone" placeholder="Phone Number" type="text" required/>
            </label>
            <br/>
            <label htmlFor="bizType">
                <input className="field" name="bizType" id="bizType" placeholder="Business Type" type="text" />
            </label>
            <br/>
            <p>Inbound Funds</p>
            <span>B2B</span>
            <label htmlFor="inboundB2B">
                <input type="checkbox" name="inboundB2B" id="inboundB2B" />
            </label>
            <span style={{paddingLeft: "5px"}}>B2C</span>
            <label htmlFor="inboundB2C">
                <input type="checkbox" name="inboundB2C" id="inboundB2C" />
            </label>
            <span style={{paddingLeft: "5px"}}>C2B</span>
            <label htmlFor="inboundC2B">
                <input type="checkbox" name="inboundC2B" id="inboundC2B" />
            </label>
            <br/>
            <label htmlFor="inboundMonthlyVolume">
                <input className="field" name="inboundMonthlyVolume" id="inboundMonthlyVolume" placeholder="Monthly Volume" type="text" />
            </label>
            <br/>
            <label htmlFor="inboundCurrencies">
                <input className="field" name="inboundCurrencies" id="inboundCurrencies" placeholder="Business Type" type="text" />
            </label><br/>
            <p>Outboundbound Funds</p>
            <span>B2B</span>
            <label htmlFor="outboundB2B">
                <input type="checkbox" name="outboundB2B" id="outboundB2B" />
            </label>
            <span style={{paddingLeft: "5px"}}>B2C</span>
            <label htmlFor="outboundB2C">
                <input type="checkbox" name="outboundB2C" id="outboundB2C" />
            </label>
            <span style={{paddingLeft: "5px"}}>C2B</span>
            <label htmlFor="outboundC2B">
                <input type="checkbox" name="outboundC2B" id="outboundC2B" />
            </label>
            <br/>
            <label htmlFor="outboundMonthlyVolume">
                <input className="field" name="outboundMonthlyVolume" id="outboundMonthlyVolume" placeholder="Monthly Volume" type="text" />
            </label>
            <br/>
            <label htmlFor="outboundCurrencies">
                <input className="field" name="outboundCurrencies" id="outboundCurrencies" placeholder="Business Type" type="text" />
            </label>
            <br/>
            <label htmlFor="anyFurtherInfo">
                <textarea className="field" name="anyFurtherInfo" id="anyFurtherInfo" placeholder="Any Additional Information" rows="6"/>
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    </>
)

export default Form;