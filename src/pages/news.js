//Modules
import React, { useState } from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
//Sass
import { PageControls } from "../pageStyles/news.module.scss"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import SEO from "../components/SEO/SEO"
import CTA from "../components/Utility/CTA/CTA"
import News from "../components/News/News"

const NewsPage = ({ data }) => {
  const news = data.news.edges

  const imageFromQuery = data.bg
  const image = getImage(imageFromQuery)
  const bgImage = convertToBgImage(image)

  const [newsItems, setNewsItems] = useState(news)

  const handleShowMore = () => {
    const first3 = newsItems.filter((x, i) => i <= 2)
    const shiftedArray = newsItems.filter((x, i) => i > 2)
    const updatedArray = [...shiftedArray, ...first3]
    setNewsItems(updatedArray)
  }

  return (
    <Layout>
      <SEO titleExtra="News" keywordsExtra="" descriptionExtra="News" />

      <Hero image={bgImage}>
        <BannerText title="News" />
      </Hero>

      <News news={newsItems} />

      <div className={PageControls}>
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
            gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO])
          }
          url
        }
      }
    }
    bg: file(relativePath: { eq: "london_skyline.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1400
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default NewsPage
