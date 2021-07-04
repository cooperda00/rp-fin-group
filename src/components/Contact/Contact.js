//Modules
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//Sass
import { ContactContainer, Left } from "./Contact.module.scss"
//Component
import Container from "../Layout/Container/Container"
import ContactForm from "./ContactForm/ContactForm"
import Title from "../Utility/Title/Title"
import Address from "./Address/Address"

const Contact = () => {
  const { bangkok, hongkong } = useStaticQuery(query)

  const bangkokDetails = {
    image: bangkok,
    city: "Bangkok",
    address: [
      "RP Group Corporation Thailand Co. Ltd",
      "Planning and Consultancy,",
      "87/118, 15F Modern Town Tower,",
      "Ekkamai Soi 3, Sukhumvit Soi 63",
      "Bangkok, 10110, Thailand",
      "Tel: +66 (0) 2 0014 144",
      "info@rpfingroup.com",
    ],
  }

  const hongkongDetails = {
    image: hongkong,
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
    <Container>
      <div className={ContactContainer}>
        <div className={Left}>
          <Title title="Get in touch with us" greenText />
          <Address details={hongkongDetails} />
          <Address details={bangkokDetails} />
        </div>

        <ContactForm />
      </div>
    </Container>
  )
}

const query = graphql`
  {
    bangkok: file(relativePath: { eq: "bhiraj_tower_bkk.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 400
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    hongkong: file(relativePath: { eq: "cosco_tower_hk.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 400
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default Contact
