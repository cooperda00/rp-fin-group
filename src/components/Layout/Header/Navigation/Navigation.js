//Modules
import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Slide from "@stahl.luke/react-reveal"
//Sass
import {NavigationContainer, ContactBtn, Links, MenuItemWrapper, MenuItemLink, ServicesSubMenu, ComplianceSubMenu, HamburgerMenu,MiniMenu } from "./Navigation.module.scss"
//Constants
import { links } from "../../../../constants/links"
import { servicesMenu } from "../../../../constants/servicesMenu"
import { complianceMenu } from "../../../../constants/complianceMenu"
//Icon
import { FaBars } from "react-icons/fa"

const Navigation = ({ location }) => {
  const [menu, toggleMenu] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    if (location) {
      setActive(location.state.active)
    } else {
      setActive("")
    }
  }, [])

  return (
    <nav className={NavigationContainer}>
      <div className={Links}>
        {links.map(({ path, text, partiallyActive }) => {
          const linkStyle =
            text === "Contact Us" ? ContactBtn : undefined

          const activeClass = "active-route"

          return (
            <div
              className={MenuItemWrapper}
              style={{ position: "relative" }}
              key={text}
            >
              <Link
                to={path}
                activeClassName={
                  text === "Contact Us" ? "active-contact" : "active-route"
                }
                partiallyActive={partiallyActive}
                className={
                  active === text
                    ? `${linkStyle} ${activeClass} ${MenuItemLink}`
                    : `${linkStyle} ${MenuItemLink}`
                }
              >
                {text}
              </Link>
              {text === "Services" && (
                <div className={ServicesSubMenu}>
                  {servicesMenu.map(({ name, path }, index) => {
                    return (
                      <Link key={index} to={path}>
                        {name}
                      </Link>
                    )
                  })}
                </div>
              )}

              {text === "Compliance" && (
                <div className={ComplianceSubMenu}>
                  {complianceMenu.map(({ name, path }, index) => {
                    return (
                      <Link key={index} to={path}>
                        {name}
                      </Link>
                    )
                  })}
                </div>
              )}

              {text === "About Us" && (
                <div className={ComplianceSubMenu}>
                  <Link to="/about">Who We Are</Link>
                  <Link to="/location">Where We Are</Link>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <button
        className={HamburgerMenu}
        onClick={() => {
          toggleMenu(!menu)
        }}
      >
        <FaBars />
      </button>

      <Slide right when={menu}>
        <div className={MiniMenu}>
          {links.map(({ path, text }) => (
            <Link to={path} key={text} tabIndex="-1">
              {menu && text}
            </Link>
          ))}
          <Link to="/location" tabIndex="-1">
            Location
          </Link>
        </div>
      </Slide>
    </nav>
  )
}

export default Navigation
