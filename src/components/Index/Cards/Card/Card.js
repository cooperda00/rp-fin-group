//Modules
import React from "react"
//Sass
import styles from "./Card.module.scss"
//Components
import CTAButton from "../../../Utility/CTAButton/CTAButton"

const Card = ({ card }) => {
  const { title, subtitle, paragraphs } = card
  return (
    <div className={styles.Card}>
      <h3>{title}</h3>
      <h3>{subtitle}</h3>

      <div>
        {paragraphs.map((p, index) => {
          return <p key={index}>{p}</p>
        })}
      </div>

      <CTAButton path="/services" text="Find out more" />
    </div>
  )
}

export default Card
