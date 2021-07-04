//Modules
import React from "react"
//Sass
import { SocialContainer } from "./Social.module.scss"
//Constants
import { social } from "../../../../constants/social"

const Social = () => {
  return (
    <div className={SocialContainer}>
      {social.map((link) => {
        return (
          <a
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
            key={link.name}
            style={{ color: "white" }}
            aria-label={`Link to our ${link.name}`}
          >
            {/* <div className={styles.White} /> */}
            {link.icon}
          </a>
        )
      })}
    </div>
  )
}

export default Social
