//Modules
import React from "react"
//Sass
import styles from "./Header.module.scss"
//Components
import Logo from "./Logo/Logo"
import Navigation from "./Navigation/Navigation"
import Social from "./Social/Social"

const Header = () => {
  return (
    <header className={styles.Header}>
      <Logo />
      <div className={styles.Menu}>
        <Social />
        <Navigation />
      </div>
    </header>
  )
}

export default Header
