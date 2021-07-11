const sgMail = require("@sendgrid/mail")
const fs = require("fs")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const fromEmail = process.env.SENDGRID_FROM_EMAIL

exports.handler = async function (event, context) {
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

  const pdf = fs
    .readFileSync(require.resolve("./sample.pdf"))
    .toString("base64")

  const message = {
    to: fromEmail,
    from: fromEmail,
    subject: "Test subject",
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

  const messageToClient = {
    to: email,
    from: fromEmail,
    subject: "Your free pension guide",
    text: `
    Dear ${firstName} ${lastName},
    
    Thanks for expressing interest in our pension services.

    Please find attached a copy your free guide, free of charge.



    This is an automated message, please do not reply`,
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
