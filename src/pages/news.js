//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"
import SEO from "../components/SEO/SEO"

const ContactPage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid

  return (
    <Layout>
      <SEO titleExtra="News" keywordsExtra="" descriptionExtra="News" />
      <Hero image={image}>
        <BannerText title="News" />
      </Hero>
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "london_skyline.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default ContactPage
