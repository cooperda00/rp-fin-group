//Modules
import React from "react"
//Sass
import {
  ContainerStyles,
  ContentContainer,
  Pattern0,
  Pattern1,
  Pattern2,
  Pattern3,
} from "./Container.module.scss"

const Container = ({ children, pattern }) => {
  const getStyle = () => {
    if (pattern === "0") {
      return `${ContainerStyles} ${Pattern0}`
    } else if (pattern === "1") {
      return `${ContainerStyles} ${Pattern1}`
    } else if (pattern === "2") {
      return `${ContainerStyles} ${Pattern2}`
    } else if (pattern === "3") {
      return `${ContainerStyles} ${Pattern3}`
    }
  }

  return (
    <section className={getStyle()}>
      <div className={ContentContainer}>{children}</div>
    </section>
  )
}

export default Container
