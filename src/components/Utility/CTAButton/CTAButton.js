//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./CTAButton.module.scss"

const CTAButton = ({ path, text }) => {
  return (
    <Link to={path} className={styles.CTAButton}>
      {text}
    </Link>
  )
}

export default CTAButton
