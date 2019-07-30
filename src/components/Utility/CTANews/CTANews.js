//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./CTANews.module.scss"
//Components
import Container from "../../Layout/Container/Container"
import CTAButton from "../CTAButton/CTAButton"

const CTANews = () => {
  const {
    news: { edges },
  } = useStaticQuery(query)

  return (
    <Container pattern="0">
      <div className={styles.CTA}>
        <div className={styles.Left}>
          <p>Speak with one of our expert advisors today.</p>
          <CTAButton path="/contact" text="Get in touch" />
        </div>

        <div className={styles.Right}>
          <h3>Latest News</h3>

          <div className={styles.CardContainer}>
            {edges.map(({ node }) => {
              const { title, excerpt, date, image, url } = node
              return (
                <a
                  href={url}
                  className={styles.NewsCard}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <div className={styles.ImageContainer}>
                    <Image fluid={image.fluid} className={styles.Image} />
                  </div> */}
                  <h4>{title}</h4>
                  {/* <p className={styles.Date}>{date}</p>
                  <p className={styles.Excerpt}>{excerpt.substr(0, 125)}...</p> */}
                  <hr />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </Container>
  )
}

const query = graphql`
  {
    news: allContentfulRpNewsItem(
      sort: { fields: [date], order: DESC }
      limit: 3
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
  }
`

export default CTANews
