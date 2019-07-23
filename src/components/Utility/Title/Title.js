//Modules
import React from "react"
//Sass
import styles from "./Title.module.scss"

const Title = ({ title, whiteText, greenText }) => {
  const addGreenText = greenText === true && styles.GreenText

  return (
    <h3
      className={`${styles.Title} ${addGreenText}`}
      style={whiteText && { color: "white", background: "transparent" }}
    >
      {title}
    </h3>
  )
}

export default Title
