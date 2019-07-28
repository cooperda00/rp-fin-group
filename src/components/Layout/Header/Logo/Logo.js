//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./Logo.module.scss"
//Logo
import logo from "../../../../images/logo.webp"

const Logo = () => {
  return (
    <Link to="/">
      <div className={styles.LogoContainer}>
        <img src={logo} alt="RP Financial Group Logo" />
      </div>
    </Link>
  )
}

export default Logo
