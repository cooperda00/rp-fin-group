//Modules
import React from "react"
import Image from "gatsby-image"
//Sass
import styles from "./Address.module.scss"

const Address = ({ details }) => {
  const { city, fluid, address } = details

  return (
    <address className={styles.Address}>
      <div className={styles.Left}>
        <div className={styles.ImageContainer}>
          <Image fluid={fluid} alt={city} />
        </div>
      </div>

      <div className={styles.Right}>
        <h3>{city}</h3>
        <ul>
          {address.map((line, index) => {
            return <li key={index}>{line}</li>
          })}
        </ul>
      </div>
    </address>
  )
}

export default Address
