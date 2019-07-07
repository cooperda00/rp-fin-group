//Modules
import React from "react"
//Sass
import styles from "./BannerText.module.scss"

const BannerText = ({ title, info, children }) => {
  return (
    <section className={styles.BannerText}>
      <h1>{title}</h1>
      {info && <h2>{info}</h2>}
      {children}
    </section>
  )
}

export default BannerText
