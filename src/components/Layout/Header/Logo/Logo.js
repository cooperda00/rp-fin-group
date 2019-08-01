//Modules
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./Logo.module.scss"

const Logo = () => {
  const data = useStaticQuery(query)

  return (
    <Link to="/">
      <div className={styles.LogoContainer}>
        <Image
          fluid={data.logo.childImageSharp.fluid}
          className={styles.LogoImage}
        />
      </div>
    </Link>
  )
}

const query = graphql`
  {
    logo: file(relativePath: { eq: "path14.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default Logo
