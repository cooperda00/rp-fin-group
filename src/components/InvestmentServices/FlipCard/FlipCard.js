//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import { CardContainer, Front, Back, Rule } from "./FlipCard.module.scss"

const FlipCard = ({ title, copy, path }) => {
  return (
    <div className={CardContainer}>
      <Link to={path}>
        <div className={Front}>
          <h3>{title}</h3>
        </div>
        <div className={Back}>
          <h3>{title}</h3>
          <div className={Rule} />
          <p>{copy}</p>
        </div>
      </Link>
    </div>
  )
}

export default FlipCard
