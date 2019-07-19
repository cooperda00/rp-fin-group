//Modules
import React from "react"
//Sass
import styles from "./InvestmentServices.module.scss"
//Component
import Container from "../Layout/Container/Container"
import Title from "../Utility/Title/Title"

const InvestmentServices = () => {
  return (
    <Container>
      <div className={styles.InvestmentServices}>
        <Title title="investment services" />
        <div className={styles.FlipCardContainer}>
          <h1>I will be a flippy boi</h1>
        </div>
      </div>
    </Container>
  )
}

export default InvestmentServices
