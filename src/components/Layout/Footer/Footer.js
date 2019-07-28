//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./Footer.module.scss"
//Constants
import { footerMenuMain } from "../../../constants/footerMenuMain"
import { footerMenuSub } from "../../../constants/footerMenuSub"
import { servicesMenu } from "../../../constants/servicesMenu"
import { social } from "../../../constants/social"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Navigation}>
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
