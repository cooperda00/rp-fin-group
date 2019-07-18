//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./Footer.module.scss"
//Constants
import { links } from "../../../constants/links"
import { social } from "../../../constants/social"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Navigation}>
        {links.map((link, index) => {
          return (
            <Link to={link.path} key={index}>
              {link.text}
            </Link>
          )
        })}
      </div>

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

      <div className={styles.Legal}>
        <p>
          © 2019 RP Financial Group Ltd. All Rights Reserved. All data and
          information provided herein is for informational purposes only.
        </p>
      </div>
    </footer>
  )
}

export default Footer
