//Modules
import React from "react"
//Sass
import styles from "./Layout.module.scss"
import "./base.scss"
//Components
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = ({ children, location }) => {
  return (
    <div className={styles.Layout}>
      <Header location={location} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
