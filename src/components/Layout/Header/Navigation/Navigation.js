//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./Navigation.module.scss"
//Constants
import { links } from "../../../../constants/links"

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      {links.map(({ path, text }) => (
        <Link to={path} activeClassName="active-route">
          {text}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
