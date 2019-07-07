//Modules
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//Sass
import styles from "./Contact.module.scss"
//Component
import Container from "../Layout/Container/Container"
import ContactForm from "./ContactForm/ContactForm"
import Title from "../Utility/Title/Title"
import Address from "./Address/Address"

const Contact = () => {
  const data = useStaticQuery(query)

  const bangkok = {
    fluid: data.bangkok.childImageSharp.fluid,
    city: "Bangkok",
    address: [
      "RP Financial Group,",
      "Level 30,",
      "Bhiraj Tower at EmQuartier,",
      "689 Sukhumvit Road (Soi 35),",
      "Klongton Nuea, Vadhana,",
      "Bangkok, 10110, Thailand",
      "Tel: +66 62 537 3272",
      "info@rpfingroup.com",
    ],
  }

  const hongkong = {
    fluid: data.hongkong.childImageSharp.fluid,
    city: "Hong Kong",
    address: [
      "RP Financial Group,",
      "Unit 1411,",
      "14F Cosco Tower,",
      "183 Queens Road Central,",
      "Sheung Wan, Hong Kong,",
      "Tel: +852 6271 6176",
      "info@rpfingroup.com",
    ],
  }

  return (
    <Container pattern="2">
      <div className={styles.Contact}>
        <div className={styles.Left}>
          <Title title="Get in touch with us" />
          <Address details={hongkong} />
          <Address details={bangkok} />
        </div>

        <ContactForm />
      </div>
    </Container>
  )
}

const query = graphql`
  {
    bangkok: file(relativePath: { eq: "bangkok_vertical.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    hongkong: file(relativePath: { eq: "hong_kong_vertical.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Contact
