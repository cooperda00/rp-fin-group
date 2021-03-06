//Modules
import React from "react"
//Sass
import { CardContainer, Title, Copy } from "./Card.module.scss"
//Components
import CTAButton from "../../../Utility/CTAButton/CTAButton"

const Card = ({ card }) => {
  const { title, subtitle, paragraphs } = card
  return (
    <div className={CardContainer}>
      <div className={Title}>
        <h3>{title}</h3>
        <h3>{subtitle}</h3>
      </div>

      <div className={Copy}>
        {paragraphs.map((p, index) => {
          return <p key={index}>{p}</p>
        })}
      </div>

      <div style={{ marginTop: "auto" }}>
        <CTAButton path="/services" text="Find out more" />
      </div>
    </div>
  )
}

export default Card
