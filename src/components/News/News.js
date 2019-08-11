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
        <Title title={"RP News Wire"} greenText={true} />
        <div className={styles.NewsCardContainer}>
          {news.map((item, index) => {
            if (index <= 2) {
              return <NewsCard key={item.node.id} newsItem={item.node} />
            }
          })}
        </div>
      </section>
    </Container>
  )
}

export default News
