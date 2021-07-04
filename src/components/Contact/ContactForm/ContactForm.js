//Modules
import React from "react"
//Sass
import {
  ContactContainer,
  ContactFormContainer,
  InputGroup,
  SubmitBtn,
} from "./ContactForm.module.scss"

const ContactForm = () => {
  return (
    <section className={ContactContainer}>
      <form
        className={ContactFormContainer}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
      >
        <div className={InputGroup}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            placeholder="John Smith"
            name="name"
            id="name"
            onFocus={(e) => {
              e.target.placeholder = ""
            }}
            onBlur={(e) => {
              e.target.placeholder = "John Smith"
            }}
            required
          />
        </div>

        <div className={InputGroup}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="smith_jo@example.com"
            name="email"
            id="email"
            onFocus={(e) => {
              e.target.placeholder = ""
            }}
            onBlur={(e) => {
              e.target.placeholder = "smith_jo@example.com"
            }}
            required
          />
        </div>

        <div className={InputGroup}>
          <label htmlFor="message">Message: </label>
          <textarea
            placeholder="Dear Sir/Madame... "
            name="message"
            id="message"
            onFocus={(e) => {
              e.target.placeholder = ""
            }}
            onBlur={(e) => {
              e.target.placeholder = "Dear Sir/Madame... "
            }}
            required
          />
        </div>

        <div>
          <input type="submit" value="Submit" className={SubmitBtn} />
        </div>

        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
      </form>
    </section>
  )
}

export default ContactForm
