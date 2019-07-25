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
        {links.map(({ path, text, partiallyActive }) => {
          const linkStyle =
            text === "Contact Us" ? styles.ContactBtn : undefined

          return (
            <Link
              key={text}
              to={path}
              activeClassName={
                text === "Contact Us" ? "active-contact" : "active-route"
              }
              partiallyActive={partiallyActive}
              className={linkStyle}
            >
              {text}
            </Link>
          )
        })}
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
            <Link to={path} key={text} tabIndex="-1">
              {text}
            </Link>
          ))}
        </div>
      </Slide>
    </nav>
  )
}

export default Navigation
