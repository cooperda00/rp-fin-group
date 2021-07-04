//Modules
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//Sass
import {
  NewsCardContainer,
  ImageContainer,
  Image,
  DateDisplay,
  Excerpt,
  ArticleBtn,
} from "./NewsCard.module.scss"

const NewsCard = ({ newsItem }) => {
  const { title, excerpt, date, image, url } = newsItem
  const imageDetails = getImage(image)

  return (
    <div className={NewsCardContainer}>
      <div className={ImageContainer}>
        <GatsbyImage image={imageDetails} className={Image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p className={DateDisplay}>{date}</p>
      <p className={Excerpt}>{excerpt}.. </p>
      <a href={url} className={ArticleBtn}>
        Read Article
      </a>
    </div>
  )
}

export default NewsCard
