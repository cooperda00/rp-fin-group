//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO/SEO"

const ContactPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  return (
    <Layout>
      <SEO
        titleExtra="Contact Us"
        keywordsExtra=""
        descriptionExtra="Contact Us"
      />
      <Hero image={image}>
        <BannerText title="Contact Us" />
      </Hero>
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "auckland_skyline.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
