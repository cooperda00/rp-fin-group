//Modules
import React from "react"
//Sass
import { LayoutContainer } from "./Layout.module.scss"
import "./base.scss"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
//Components
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import CookieConsent from "react-cookie-consent"

const Layout = ({ children, location }) => {
  return (
    <div className={LayoutContainer}>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        enableDeclineButton
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        style={{
          background: "#36723e",
          fontSize: "2rem",
          borderTop: "0.2rem solid #0c4413",
          alignItems: "center",
        }}
        buttonStyle={{
          fontSize: "2rem",
          padding: "1rem 2rem",
        }}
        declineButtonStyle={{
          fontSize: "2rem",
          padding: "1rem 2rem",
        }}
      >
        <h3
          style={{
            color: "hsl(24, 9%, 82%)",
            letterSpacing: "0.3rem",
            fontWeight: 400,
          }}
        >
          GDPR Notice
        </h3>
        <p style={{ color: "hsl(24, 9%, 82%)" }}>
          This site uses cookies to gather analytics data that helps us improve
          our website.
        </p>
      </CookieConsent>
      <Header location={location} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
