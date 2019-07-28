//Modules
import React from "react"
//Sass
import styles from "./Header.module.scss"
//Components
import Logo from "./Logo/Logo"
import Navigation from "./Navigation/Navigation"
import Social from "./Social/Social"

const Header = ({ location }) => {
  return (
    <header className={styles.Header}>
      <Logo />
      <div className={styles.Menu}>
        <Social />
        <Navigation location={location} />
      </div>
    </header>
  )
}

export default Header
