//Modules
import React from "react"
//Sass
import styles from "./Viewer.module.scss"
//Components
import Container from "../../Layout/Container/Container"
import Copy from "../Copy/Copy"
import SideMenu from "../SideMenu/SideMenu"

const Viewer = ({ menu, frontmatter, html, noScroll }) => {
  return (
    <Container>
      <div className={styles.Viewer}>
        <SideMenu menu={menu} />
        <Copy frontmatter={frontmatter} html={html} noScroll={noScroll} />
      </div>
    </Container>
  )
}

export default Viewer
