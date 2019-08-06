//Modules
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
//Sass
import styles from "./Footer.module.scss"
//Constants
import { footerMenuMain } from "../../../constants/footerMenuMain"
import { footerMenuSub } from "../../../constants/footerMenuSub"
import { social } from "../../../constants/social"

const Footer = () => {
  const data = useStaticQuery(query)
  const logo = data.logo.childImageSharp.fixed

  return (
    <footer className={styles.Footer}>
      <div className={styles.Navigation}>
        <Image fixed={logo} className={styles.Logo} />
        {footerMenuMain.map((link, index) => {
          return (
            <Link to={link.path} key={index}>
              {link.text}
            </Link>
          )
        })}
      </div>

      <div className={styles.NavigationSub}>
        {footerMenuSub.map((link, index) => {
          return (
            <div key={index} className={styles.SubWrapper}>
              <div className={styles.SubTitle}>
                <Link to={link.path} state={{ active: link.text }}>
                  {link.text}
                </Link>
              </div>
              <div className={styles.SubSub}>
                {link.subMenu.map(({ title, path }, index) => {
                  return (
                    <Link to={path} key={index}>
                      {title}
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className={styles.SocialContainer}>
        <div className={styles.Social}>
          {social.map(link => {
            return (
              <a
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                key={link.name}
                style={{ color: link.color }}
                aria-label={`Link to our ${link.name}`}
              >
                <div></div>
                {link.icon}
              </a>
            )
          })}
        </div>
        <p>
          © 2019 RP Financial Group Ltd. All Rights Reserved. All data and
          information provided herein is for informational purposes only.
        </p>
      </div>
    </footer>
  )
}

const query = graphql`
  {
    logo: file(relativePath: { eq: "logo_transparent.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Footer
