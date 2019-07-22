//Modules
import React from "react"
import Image from "gatsby-image"
//Sass
import styles from "./NewsCard.module.scss"
//Icons
import { FaLongArrowAltRight } from "react-icons/fa"

const NewsCard = ({ newsItem }) => {
  const { title, excerpt, date, image, url } = newsItem

  return (
    <div className={styles.NewsCard}>
      <a href={url}>
        <div className={styles.ImageContainer}>
          <Image fluid={image.fluid} className={styles.Image} />
        </div>
        <h3>{title}</h3>
        <p className={styles.Date}>{date}</p>
        <p className={styles.Excerpt}>{excerpt}.. </p>
        <FaLongArrowAltRight className={styles.Icon} />
      </a>
    </div>
  )
}

export default NewsCard
