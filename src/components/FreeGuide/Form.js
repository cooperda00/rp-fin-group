//React
import React, { useState } from "react"
//Helpers
import { validateForm } from "./helpers"
import axios from "axios"
//Constants
import { countries } from "../../constants/countries"

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    pensionType: "",
    schemeType: "",
    pensionSize: "",
  })

  const [error, setError] = useState({
    error: "",
    message: "",
  })

  const handleChange = (e) => {
    const field = e.target.name
    const value = e.target.value

    setFormData((prevState) => {
      return {
        ...prevState,
        [field]: value,
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    //FE validation of data / show errors to user
    const [error, message] = validateForm(formData)

    if (error) {
      setError({
        error,
        message,
      })

      return
    }

    //axios post to endpoint
    const response = await axios.post(
      "/.netlify/functions/sendEmails",
      formData
    )

    console.log(response.data)

    //send email with download to user
    //send email with form details to James
    //Show loading spinner to user
    //If successful, redirect to a success page
    //If not successful, show error to user - provide contact email
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        {error.error === "firstName" && <p>{error.message}</p>}
      </div>

      <div className="form-control">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        {error.error === "lastName" && <p>{error.message}</p>}
      </div>

      <div className="form-control">
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        {error.error === "email" && <p>{error.message}</p>}
      </div>

      <div className="form-control">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        {error.error === "phone" && <p>{error.message}</p>}
      </div>

      <div className="form-control">
        <label htmlFor="country">Country</label>

        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Choose a country</option>
          {countries.map((country) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </select>

        {error.error === "country" && <p>{error.message}</p>}
      </div>

      <div className="form-control">
        <label htmlFor="pensionType">Type of Pension</label>
        <select
          name="pensionType"
          id="pensionType"
          value={formData.pensionType}
          onChange={handleChange}
        >
          <option value="">Choose a pension type</option>
          <option value="Private Pension">Private Pension</option>
          <option value="Company Pension">Company Pension</option>
        </select>

        {error.error === "pensionType" && <p>{error.message}</p>}
      </div>

      <div className="form-control">
        <label htmlFor="schemeType">Type of Scheme</label>
        <select
          name="schemeType"
          id="schemeType"
          value={formData.schemeType}
          onChange={handleChange}
        >
          <option value="">Choose a scheme type</option>
          <option value="Final Salary / Defined Benefit">
            Final Salary / Defined Benefit
          </option>
          <option value="Money Purchase / Defined">
            Money Purchase / Defined
          </option>
          <option value="Contribution / Personal Pension">
            Contribution / Personal Pension
          </option>
          <option value="Not Sure">Not Sure</option>
        </select>

        {error.error === "schemeType" && <p>{error.message}</p>}
      </div>

      <div className="form-control">
        <label htmlFor="pensionSize">Size of Pension</label>
        <select
          name="pensionSize"
          id="pensionSize"
          value={formData.pensionSize}
          onChange={handleChange}
        >
          <option value="">Choose a pension size</option>
          <option value="Less than £75k">Less than £75k</option>
          <option value="£75k - £150k">£75k - £150k</option>
          <option value="£150k - £300k">£150k - £300k</option>
          <option value="£300k - £500k">£300k - £500k</option>
          <option value="More than £500k">More than £500k</option>
        </select>

        {error.error === "pensionSize" && <p>{error.message}</p>}
      </div>

      <button>Please send me my free guide</button>
    </form>
  )
}

export default Form
