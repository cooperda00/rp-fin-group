//Modules
import React from "react"
//Sass
import styles from "./Logo.module.scss"
//Logo
import logo from "../../../../images/logo.webp"

const Logo = () => {
  return (
    <div className={styles.LogoContainer}>
      <img src={logo} alt="RP Financial Group Logo" />
    </div>
  )
}

export default Logo
