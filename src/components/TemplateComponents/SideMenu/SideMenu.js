//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./SideMenu.module.scss"

const SideMenu = ({ menu }) => {
  return (
    <nav className={styles.SideMenu}>
      <ul>
        {menu.map((item, index) => {
          return (
            <li>
              <Link to={item.path}>{item.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default SideMenu
