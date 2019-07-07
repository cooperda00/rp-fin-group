//Modules
import React from "react"
//Sass
import styles from "./Contact.module.scss"
//Component
import Container from "../Layout/Container/Container"
import ContactForm from "./ContactForm/ContactForm"
import Title from "../Utility/Title/Title"

const Contact = () => {
  return (
    <Container pattern="2">
      <div className={styles.Contact}>
        <div className={styles.AddressTest}>
          <Title title="Get in touch with us" />
        </div>

        <ContactForm />
      </div>
    </Container>
  )
}

export default Contact
