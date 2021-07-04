//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//Sass
import {
  AboutContainer,
  Left,
  ImageContainer,
  Image,
  Right,
} from "./About.module.scss"
//Component
import Container from "../Layout/Container/Container"
import Title from "../Utility/Title/Title"

const About = () => {
  const { singapore } = useStaticQuery(query)
  const image = getImage(singapore)

  return (
    <Container>
      <div className={AboutContainer}>
        <div className={Left}>
          <div className={ImageContainer}>
            <GatsbyImage
              image={image}
              className={Image}
              alt="Singapore skyline"
            />
          </div>
        </div>

        <div className={Right}>
          <Title title="about us" greenText />
          <p>
            RP Financial Group is a trusted financial consultancy and private
            brokerage offering investment and financial planning solutions to
            individuals and businesses throughout the Asia Pacific region.
          </p>

          <p>
            As an independent and cutting-edge advisory firm, the group set
            ourselves apart with our client-based approach, enabling us to
            create unique value by way of bespoke, integrity driven financial
            advice.
          </p>

          <p>
            Our excellent client relationships set us apart as a leading firm in
            financial services in Asia and beyond. We continue to develop our
            approach based on the ever-changing landscape of the increasingly
            complex and international marketplace.
          </p>

          <p>
            As careful financial planning is the key to ensuring the long-term
            security of your family, business, and personal interests, our team
            of professional Financial Planners and Investment Advisors at RP
            financial group have the knowledge and experience to deliver clear,
            expert, and bespoke advice.
          </p>
        </div>
      </div>
    </Container>
  )
}

const query = graphql`
  {
    singapore: file(relativePath: { eq: "singapore2.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 500
          placeholder: NONE
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default About
