//Modules
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./Logo.module.scss"
//Logo
import logo from "../../../../images/logov2.png"

const Logo = () => {
  const data = useStaticQuery(query)

  console.log(data.logo.childImageSharp.fluid)

  return (
    // <Link to="/">
    <div className={styles.LogoContainer}>
      {/* <img src={logo} alt="RP Financial Group Logo" /> */}
      <Image
        fluid={data.logo.childImageSharp.fluid}
        className={styles.LogoImage}
      />
    </div>
    // </Link>
  )
}

const query = graphql`
  {
    logo: file(relativePath: { eq: "logov3.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default Logo
