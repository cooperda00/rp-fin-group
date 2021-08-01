//Imports
const sgMail = require("@sendgrid/mail")
const fs = require("fs")

//Setup Sendgrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

//Change who the email comes from in environment variables
const fromEmail = process.env.SENDGRID_FROM_EMAIL

exports.handler = async function (event, context) {
  //Extract Formm Data
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
    .readFileSync(require.resolve("./sample.pdf"))
    .toString("base64")

  //Internal Message
  const message = {
    to: fromEmail,
    from: fromEmail,
    subject: "You have a new pension guide form submission",
    text: `
    ${firstName} ${lastName} has expressed interest by ordering a guide.

    Email: ${email}
    Contact Number: ${phone}
    Country: ${country}
    Pension Type: ${pensionType}
    Scheme Type: ${schemeType}
    Pension Size: ${pensionSize}

    This is an automated message, please do not reply`,
  }

  //Message To User
  const messageToClient = {
    to: email,
    from: fromEmail,
    subject: "Your free pension guide",
    text: `
    Dear ${firstName} ${lastName},
    
    Thanks for expressing interest in our pension services.

    Please find attached a copy of your free guide, free of charge.

    This is an automated message, please do not reply.
    `,
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
