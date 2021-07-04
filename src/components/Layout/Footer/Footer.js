//Modules
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//Sass
import {
  FooterContainer,
  Navigation,
  LogoContainer,
  NavigationSub,
  SubWrapper,
  SubSub,
  SocialContainer,
  Social,
  Logo,
  SubTitle,
  TextLink,
} from "./Footer.module.scss"
//Constants
import { footerMenuMain } from "../../../constants/footerMenuMain"
import { footerMenuSub } from "../../../constants/footerMenuSub"
import { social } from "../../../constants/social"

const Footer = () => {
  const { logo } = useStaticQuery(query)
  const image = getImage(logo)

  return (
    <footer className={FooterContainer}>
      <div className={Navigation}>
        <div className={LogoContainer}>
          <Link to="/">
            <GatsbyImage
              image={image}
              alt="RP Fin Group Logo"
              className={Logo}
            />
          </Link>
        </div>

        {footerMenuMain.map((link, index) => {
          return (
            <Link to={link.path} key={index} className={TextLink}>
              {link.text}
            </Link>
          )
        })}
      </div>

      <div className={NavigationSub}>
        {footerMenuSub.map((link, index) => {
          return (
            <div key={index} className={SubWrapper}>
              <div className={SubTitle}>
                <Link to={link.path} state={{ active: link.text }}>
                  {link.text}
                </Link>
              </div>
              <div className={SubSub}>
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

      <div className={SocialContainer}>
        <div className={Social}>
          {social.map((link) => {
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
        gatsbyImageData(
          width: 200
          placeholder: NONE
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default Footer
