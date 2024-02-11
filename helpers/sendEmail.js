const nodemailer = require("nodemailer");
require("dotenv").config();

const { PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: "story469@ukr.net",
    pass: PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "story469@ukr.net" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;

// const email = {
//   to: "olgadz469@gmail.com",
//   from: "story469@ukr.net",
//   subject: "Test email",
//   html: "<p><strong>Test email</strong>from localhost:3000</p>",
// };

// transport
//   .sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));
