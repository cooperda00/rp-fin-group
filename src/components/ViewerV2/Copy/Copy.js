//Modules
import React from "react"
//Sass
import styles from "./Copy.module.scss"

const Copy = ({ title, html }) => {
  return (
    <div className={styles.Copy}>
      <h2>{title}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className={styles.Markdown}
      />
    </div>
  )
}

export default Copy
