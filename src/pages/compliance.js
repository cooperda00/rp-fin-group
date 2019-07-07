//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Utility/Hero/Hero"
import BannerText from "../components/Utility/BannerText/BannerText"

const CompliancePage = ({ data }) => {
  const image = data.bg.childImageSharp.fluid
  return (
    <Layout>
      <Hero image={image}>
        <BannerText title="Compliance" />
      </Hero>
    </Layout>
  )
}

export const query = graphql`
  {
    bg: file(relativePath: { eq: "sydney_skyline.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default CompliancePage
