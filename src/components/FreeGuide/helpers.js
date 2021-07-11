export const validateForm = (formData) => {
  const {
    firstName,
    lastName,
    phone,
    email,
    country,
    pensionType,
    schemeType,
    pensionSize,
  } = formData

  //Name
  if (!firstName.trim()) return ["firstName", "Please provide a first name"]
  if (!lastName.trim()) return ["lastName", "Please provide a last name"]

  //Email
  if (!email.trim()) return ["email", "Please provide an email address"]

  const emailIsValid =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
      email
    )

  if (!emailIsValid) return ["email", "Please provide a valid email address"]

  //Phone
  if (!phone.trim()) return ["phone", "Please provide a contact number"]

  //Country
  if (!country.trim()) return ["country", "Please provide a country"]

  //Pension Type
  if (!pensionType) return ["pensionType", "Please provide a pension type"]

  //Scheme Type
  if (!schemeType) return ["schemeType", "Please provide a scheme type"]

  //Pension Size
  if (!pensionSize) return ["pensionSize", "Please provide a pension size"]

  return ["", ""]
}
