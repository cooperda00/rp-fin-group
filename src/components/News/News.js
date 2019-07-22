//Modules
import React from "react"
//Sass
import styles from "./News.module.scss"
//Components
import Container from "../Layout/Container/Container"
import NewsCard from "./NewsCard/NewsCard"
import Title from "../Utility/Title/Title"

const News = ({ news }) => {
  return (
    <Container>
      <section className={styles.News}>
        <Title title={"RP News Wire"} />
        <div className={styles.NewsCardContainer}>
          {news.map(({ node }) => {
            return <NewsCard key={node.id} newsItem={node} />
          })}
        </div>
      </section>
    </Container>
  )
}

export default News
