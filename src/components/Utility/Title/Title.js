//Modules
import React from "react"
//Sass
import styles from "./Title.module.scss"

const Title = ({ title }) => {
  return <h3 className={styles.Title}>{title}</h3>
}

export default Title
