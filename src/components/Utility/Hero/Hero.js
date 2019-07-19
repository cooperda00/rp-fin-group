//Modules
import React from "react"
import BackgroundImage from "gatsby-background-image"
//Sass
import styles from "./Hero.module.scss"

const Hero = ({ image, type, children }) => {
  const sizeClass = type === "home" ? `${styles.Home}` : `${styles.Page}`

  return (
    <BackgroundImage
      critical
      fadeIn={false}
      fluid={image}
      className={`${styles.Hero} ${sizeClass}`}
    >
      {children}
    </BackgroundImage>
  )
}

export default Hero
