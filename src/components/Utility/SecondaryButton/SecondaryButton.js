//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./SecondaryButton.module.scss"

const SecondaryButton = ({ path, text }) => {
  return (
    <Link to={path} className={styles.SecondaryButton}>
      {text}
    </Link>
  )
}

export default SecondaryButton
