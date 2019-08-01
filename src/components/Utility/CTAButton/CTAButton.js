//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./CTAButton.module.scss"

const CTAButton = ({ path, text, type }) => {
  return (
    <Link
      to={path}
      className={
        type === "2"
          ? `${styles.CTAButton} ${styles.AltColor}`
          : `${styles.CTAButton}`
      }
    >
      {text}
    </Link>
  )
}

export default CTAButton
