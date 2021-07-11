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
  } = event.body

  return {
    statusCode: 200,
    body: "success",
  }
}
