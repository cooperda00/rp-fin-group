//Modules
import React from "react"
import { Link } from "gatsby"
//Icons
import { FaLongArrowAltRight } from "react-icons/fa"
//Sass
import styles from "./FlipCard.module.scss"

const FlipCard = ({ title, copy, path }) => {
  return (
    <div className={styles.Card}>
      <Link to={path}>
        <div className={styles.Front}>
          <h3>{title}</h3>
        </div>
        <div className={styles.Back}>
          <h3>{title}</h3>
          <div className={styles.Rule} />
          <p>{copy}</p>
          <FaLongArrowAltRight className={styles.Icon} />
        </div>
      </Link>
    </div>
  )
}

export default FlipCard
