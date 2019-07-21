//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//Sass
import styles from "./InvestmentServices.module.scss"
//Component
import Hero from "../Utility/Hero/Hero"
import Title from "../Utility/Title/Title"
import FlipCard from "./FlipCard/FlipCard"
//Constants
import { servicesMenu } from "../../constants/servicesMenu"

const InvestmentServices = () => {
  const data = useStaticQuery(query)
  const image = data.bg.childImageSharp.fluid

  return (
    <Hero image={image} type="home">
      <div className={styles.InvestmentServices}>
        <Title title="investment services" whiteText={true} />
        <div className={styles.FlipCardContainer}>
          {servicesMenu.map((service, index) => {
            return (
              <FlipCard title={service.name} copy={service.copy} key={index} />
            )
          })}
        </div>
      </div>
    </Hero>
  )
}

const query = graphql`
  {
    bg: file(relativePath: { eq: "bangkok_night_skyline.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default InvestmentServices
