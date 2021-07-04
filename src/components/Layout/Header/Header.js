//Modules
import React from "react"
//Sass
import { HeaderContainer, Menu } from "./Header.module.scss"
//Components
import Logo from "./Logo/Logo"
import Navigation from "./Navigation/Navigation"
import Social from "./Social/Social"

const Header = ({ location }) => {
  return (
    <header className={HeaderContainer}>
      <Logo />
      <div className={Menu}>
        <Social />
        <Navigation location={location} />
      </div>
    </header>
  )
}

export default Header
