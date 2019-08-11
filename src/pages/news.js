//Modules
import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
//Sass
import styles from "../pageStyles/news.module.scss"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import SEO from "../components/SEO/SEO"
import CTA from "../components/Utility/CTA/CTA"
import News from "../components/News/News"
//Lodash
import { cloneDeep } from "lodash"

const NewsPage = ({ data }) => {
  const news = data.news.edges
  const image = data.bg.childImageSharp.fluid

  const [newsItems, setNewsItems] = useState([])

  //On Mount
  useEffect(() => {
    setNewsItems(news)
  }, [])

  const handleShowMore = () => {
    //Copy Array
    const clonedNews = cloneDeep(newsItems)
    //Filter array 1 - save first 3 items
    const first3 = clonedNews.filter((x, i) => i <= 2)
    //Filter array 2 - remove first 3 items
    const shiftedArray = clonedNews.filter((x, i) => i > 2)
    //Spread - ...array2, ...array1
    const updatedArray = [...shiftedArray, ...first3]
    //Update state
    setNewsItems(updatedArray)
  }

  return (
    <Layout>
      <SEO titleExtra="News" keywordsExtra="" descriptionExtra="News" />

      <Hero image={image}>
        <BannerText title="News" />
      </Hero>

      <News news={newsItems} />

      <div className={styles.PageControls}>
        <a onClick={handleShowMore}>More Articles</a>
      </div>

      <CTA />
    </Layout>
  )
}

export const query = graphql`
  {
    news: allContentfulRpNewsItem(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          excerpt
          date(formatString: "DD/MM/YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid_noBase64
            }
          }
          url
        }
      }
    }
    bg: file(relativePath: { eq: "london_skyline.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default NewsPage
