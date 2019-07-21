//Modules
import React from "react"
//Sass
import styles from "./Title.module.scss"

const Title = ({ title, whiteText }) => {
  return (
    <h3
      className={styles.Title}
      style={whiteText && { color: "white", background: "transparent" }}
    >
      {title}
    </h3>
  )
}

export default Title
