//Modules
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//Sass
import {
  AddressContainer,
  Left,
  ImageContainer,
  Right,
} from "./Address.module.scss"

const Address = ({ details }) => {
  const { city, image, address } = details
  const imageDetails = getImage(image)

  return (
    <address className={AddressContainer}>
      <div className={Left}>
        <div className={ImageContainer}>
          <GatsbyImage image={imageDetails} className={Image} alt={city} />
        </div>
      </div>

      <div className={Right}>
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
