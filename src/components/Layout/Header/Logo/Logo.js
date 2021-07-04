//Modules
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
//Sass
import { LogoContainer, LogoImage } from "./Logo.module.scss"

const Logo = () => {
  const data = useStaticQuery(query)

  return (
    <Link to="/">
      <div className={LogoContainer}>
        <Image fluid={data.logo.childImageSharp.fluid} className={LogoImage} />
      </div>
    </Link>
  )
}

const query = graphql`
  {
    logo: file(relativePath: { eq: "logo_transparent.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default Logo
