//Modules
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./About.module.scss"
//Component
import Container from "../Layout/Container/Container"

const About = () => {
  const data = useStaticQuery(query)
  console.log(data)

  return (
    <Container pattern="1">
      <div className={styles.About}>
        <div className={styles.Left}>
          <div className={styles.ImageContainer}>
            <Image
              fluid={data.image.childImageSharp.fluid}
              className={styles.Image}
            />
          </div>
        </div>

        <div className={styles.Right}>
          <h3>About Us</h3>
          <p>
            RP Financial Group is a trusted financial consultancy and private
            brokerage offering investment and financial planning solutions to
            individuals and businesses throughout Asia Pacific.
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
    image: file(relativePath: { eq: "singapore_skyline.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default About
