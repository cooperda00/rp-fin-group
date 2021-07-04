//Modules
import React from "react"
//Sass
import { TitleContainer, GreenText } from "./Title.module.scss"

const Title = ({ title, whiteText, greenText }) => {
  const addGreenText = greenText === true && GreenText

  return (
    <h3
      className={`${TitleContainer} ${addGreenText}`}
      style={whiteText && { color: "white", background: "transparent" }}
    >
      {title}
    </h3>
  )
}

export default Title
