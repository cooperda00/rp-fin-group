//Modules
import React from "react"
//Sass
import { CopyContainer, Markdown } from "./Copy.module.scss"

const Copy = ({ title, html }) => {
  return (
    <div className={CopyContainer}>
      <h2>{title}</h2>

      <div dangerouslySetInnerHTML={{ __html: html }} className={Markdown} />
    </div>
  )
}

export default Copy
