//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//Sass
import {
  CTAContainer,
  Left,
  Right,
  CardContainer,
  NewsCard,
} from "./CTANews.module.scss"
//Components
import Container from "../../Layout/Container/Container"
import CTAButton from "../CTAButton/CTAButton"

const CTANews = () => {
  const {
    news: { edges },
  } = useStaticQuery(query)

  return (
    <Container pattern="3">
      <div className={CTAContainer}>
        <div className={Left}>
          <p>Speak with one of our expert advisors today.</p>
          <CTAButton path="/contact" text="Get in touch" />
        </div>

        <div className={Right}>
          <h3>Latest News</h3>

          <div className={CardContainer}>
            {edges.map(({ node }) => {
              const { title, excerpt, date, image, url } = node
              return (
                <a
                  href={url}
                  className={NewsCard}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>{title}</h4>

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
