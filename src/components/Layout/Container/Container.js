//Modules
import React from "react"
//Sass
import styles from "./Container.module.scss"

const Container = ({ children, pattern }) => {
  // const style =
  //   pattern === "1"
  //     ? `${styles.Container} ${styles.Pattern1}`
  //     : `${styles.Container} ${styles.Pattern2}`

  const getStyle = () => {
    if (pattern === "0") {
      return `${styles.Container} ${styles.Pattern0}`
    } else if (pattern === "1") {
      return `${styles.Container} ${styles.Pattern1}`
    } else if (pattern === "2") {
      return `${styles.Container} ${styles.Pattern2}`
    }
  }

  return (
    <section className={getStyle()}>
      <div className={styles.ContentContainer}>{children}</div>
    </section>
  )
}

export default Container
