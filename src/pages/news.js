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

const NewsPage = ({ data }) => {
  const news = data.news.edges
  const image = data.bg.childImageSharp.fluid

  const [newsItems, setNewsItems] = useState([])
  const [noToShow, setNoToShow] = useState(2)

  console.log(noToShow)

  //On Mount
  useEffect(() => {
    const firstThreeItems = news.filter((item, index) => index <= noToShow)
    setNewsItems(firstThreeItems)
  }, [])

  const handleShowMore = () => {
    setNewsItems(news.filter((item, index) => index <= noToShow + 3))
    setNoToShow(noToShow + 3)
  }

  return (
    <Layout>
      <SEO titleExtra="News" keywordsExtra="" descriptionExtra="News" />

      <Hero image={image}>
        <BannerText title="News" />
      </Hero>

      <News news={newsItems} />

      <div className={styles.PageControls}>
        <a onClick={handleShowMore}>More</a>
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
