//Modules
import React from "react"
import { Link } from "gatsby"
//Icons
import { FaLongArrowAltRight } from "react-icons/fa"
//Sass
import styles from "./FlipCard.module.scss"

const FlipCard = ({ title, copy }) => {
  return (
    <Link to="/services" state={{ title: title }}>
      <div className={styles.Card}>
        <div className={styles.Front}>
          <h3>{title}</h3>
        </div>
        <div className={styles.Back}>
          <h3>{title}</h3>
          <div className={styles.Rule} />
          <p>{copy}</p>
          <FaLongArrowAltRight className={styles.Icon} />
        </div>
      </div>
    </Link>
  )
}

export default FlipCard
