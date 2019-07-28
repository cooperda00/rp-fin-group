//Modules
import React from "react"
import { graphql, Link } from "gatsby"
//Sass
import styles from "./newsTemplate.module.scss"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import SEO from "../components/SEO/SEO"
import CTA from "../components/Utility/CTA/CTA"
import News from "../components/News/News"

const NewsTemplate = ({ data, pageContext }) => {
  const news = data.news.edges
  const image = data.bg.childImageSharp.fluid
  const { numOfPages, currentPage } = pageContext

  return (
    <Layout>
      <SEO titleExtra="News" keywordsExtra="" descriptionExtra="News" />
      <Hero image={image}>
        <BannerText title="News" />
      </Hero>
      <News news={news} />
      <div className={styles.PageControls}>
        {currentPage !== 1 && (
          <Link
            className="btn-primary"
            to={currentPage === 2 ? `/news` : `/news/${currentPage - 1}`}
          >
            Previous
          </Link>
        )}

        {Array.from({ length: numOfPages }, (_, i) => {
          return (
            <Link
              key={i}
              to={i === 0 ? "/news" : `/news/${i + 1}`}
              className={
                i + 1 === currentPage
                  ? `${styles.Selected} btn-primary`
                  : `btn-primary`
              }
            >
              {i + 1}
            </Link>
          )
        })}

        {currentPage !== numOfPages && (
          <Link fade to={`/news/${currentPage + 1}`} className="btn-primary">
            Next
          </Link>
        )}
      </div>
      <CTA />
    </Layout>
  )
}

export const query = graphql`
  query getNews($skip: Int!, $limit: Int!) {
    news: allContentfulRpNewsItem(
      skip: $skip
      sort: { fields: [date], order: DESC }
      limit: $limit
    ) {
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

export default NewsTemplate
