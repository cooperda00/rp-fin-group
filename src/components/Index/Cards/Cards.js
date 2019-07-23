//Modules
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//Sass
import styles from "./Cards.module.scss"
//Components
import Card from "./Card/Card"
import Hero from "../../Utility/Hero/Hero"

const Cards = () => {
  const imageData = useStaticQuery(query)

  const image = imageData.bg.childImageSharp.fluid

  return (
    <section className={styles.Cards}>
      <div className={styles.CardsContainer}>
        {data.map((card, index) => {
          return <Card key={index} card={card} />
        })}
      </div>
    </section>
    // <Hero image={image} type="home">
    //   <div className={styles.CardsContainer}>
    //     {data.map((card, index) => {
    //       return <Card key={index} card={card} />
    //     })}
    //   </div>
    // </Hero>
  )
}

const data = [
  {
    title: "Strategic",
    subtitle: "Investment",
    paragraphs: [
      "In an increasingly interconnected global marketplace, the need for strategic investment advice has never been more relevant. Our client-driven, market-oriented investment solutions cover a broad spectrum of asset classes.",

      "Coupled with our client driven approach to advising; RP financial provides comprehensive investment solitons to grow and protect your capital.",
    ],
  },
  {
    title: "Retirement",
    subtitle: "Planning",
    paragraphs: [
      "Planning for your retirement has never been more pertinent. Our experienced corps of advisers specialize in advice regarding retirement savings, and superannuation investment.",

      "Coupled with critical advice regarding international taxation of pension savings, QROPS, SIPP, and superannuation options, our expertise will assist in ensuring your future financial success into retirement.",
    ],
  },
  {
    title: "Portfolio",
    subtitle: "Management",
    paragraphs: [
      "Bespoke portfolio management is key to personal financial success. At RP Financial we provide client-focused, integrity-driven portfolio advice and management across a variety of asset classes in capital markets.",

      "We provide strategic personal advice on tax efficient savings, and have a wealth of private client experience in both investment management and in comprehensive tax planning",
    ],
  },
]

const query = graphql`
  {
    bg: file(relativePath: { eq: "sydney_skyline_2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default Cards
