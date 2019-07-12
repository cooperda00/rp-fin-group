//Modules
import React from "react"
import { Link } from "gatsby"
//Sass
import styles from "./SideMenu.module.scss"
//Icons
import { FaCaretRight } from "react-icons/fa"

const SideMenu = ({ menu }) => {
  return (
    <nav className={styles.SideMenu}>
      <ul>
        {menu.map((item, index) => {
          return (
            <li>
              <FaCaretRight />
              <Link
                to={item.path}
                activeClassName="active-route-side"
                partiallyActive={true}
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default SideMenu
