//Modules
import React, { useState } from "react"
import { Link } from "gatsby"
import Slide from "react-reveal/Slide"
//Sass
import styles from "./Navigation.module.scss"
//Constants
import { links } from "../../../../constants/links"
//Icon
import { FaBars } from "react-icons/fa"

const Navigation = () => {
  const [menu, toggleMenu] = useState(false)

  return (
    <nav className={styles.Navigation}>
      <div className={styles.Links}>
        {links.map(({ path, text, partiallyActive }) => (
          <Link
            to={path}
            activeClassName="active-route"
            partiallyActive={partiallyActive}
          >
            {text}
          </Link>
        ))}
      </div>

      <button
        className={styles.HamburgerMenu}
        onClick={() => {
          toggleMenu(!menu)
        }}
      >
        <FaBars />
      </button>

      <Slide right when={menu}>
        <div className={styles.MiniMenu}>
          {links.map(({ path, text }) => (
            <Link to={path}>{text}</Link>
          ))}
        </div>
      </Slide>
    </nav>
  )
}

export default Navigation
