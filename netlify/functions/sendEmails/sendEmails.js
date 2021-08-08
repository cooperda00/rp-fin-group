//Imports
const sgMail = require("@sendgrid/mail")
const fs = require("fs")

//Setup Sendgrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

//Change who the email comes from in environment variables
const fromEmail = process.env.SENDGRID_FROM_EMAIL

exports.handler = async function (event) {
  //Extract Form Data
  const {
    firstName,
    lastName,
    phone,
    email,
    country,
    pensionType,
    schemeType,
    pensionSize,
  } = JSON.parse(event.body)

  //TO DO : Validate form data

  const pdf = fs
    .readFileSync(require.resolve("./pension-guide.pdf"))
    .toString("base64")

  //Internal Message
  const message = {
    to: fromEmail,
    from: fromEmail,
    templateId: "d-b32eb037961a40a8acf0eea95f2d5b84",
    dynamicTemplateData: {
      firstName,
      lastName,
      email,
      phone,
      country,
      pensionType,
      schemeType,
      pensionSize,
    },
  }

  //Message To User
  const messageToClient = {
    to: email,
    from: fromEmail,
    templateId: "d-44d8408fc26c4e27af8a295e4644be4f",
    dynamicTemplateData: {
      firstName,
      lastName,
    },
    attachments: [
      {
        content: pdf,
        filename: "pension guide.pdf",
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
  }

  try {
    await sgMail.send(message)
    await sgMail.send(messageToClient)

    return {
      statusCode: 200,
      body: "success",
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    }
  }
}
