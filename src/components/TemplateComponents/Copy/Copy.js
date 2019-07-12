//Modules
import React, { useEffect } from "react"
import { useScroll } from "../../../hooks/useScroll"
//Sass
import styles from "./Copy.module.scss"

const Copy = ({ frontmatter, html, noScroll }) => {
  const [executeScroll, scrollHtmlAttributes] = useScroll()

  if (!noScroll) {
    useEffect(() => {
      setTimeout(() => {
        executeScroll()
      }, 1000)
    }, [])
  }

  return (
    <div className={styles.Copy} {...scrollHtmlAttributes}>
      <h2>{frontmatter.title}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className={styles.Markdown}
      />
    </div>
  )
}

export default Copy
