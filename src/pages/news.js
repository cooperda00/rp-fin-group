//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import SEO from "../components/SEO/SEO"
import CTA from "../components/Utility/CTA/CTA"
import News from "../components/News/News"

const ContactPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  const news = data.news.edges

  return (
    <Layout>
      <SEO titleExtra="News" keywordsExtra="" descriptionExtra="News" />
      <Hero image={image}>
        <BannerText title="News" />
      </Hero>
      <News news={news} />
      <CTA />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "london_skyline.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    news: allContentfulRpNewsItem(
      sort: { fields: [date], order: DESC }
      limit: 100
    ) {
      edges {
        node {
          id
          title
          excerpt
          date
          image {
            fluid {
              ...GatsbyContentfulFluid_noBase64
            }
          }
          url
        }
      }
    }
  }
`

export default ContactPage
