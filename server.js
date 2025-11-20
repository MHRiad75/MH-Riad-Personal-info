const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mozammelhoqueriad2029@gmail.com",
      pass: "fbyd lbbb fxxr tmsv" 
    }
  });

  const mailOptions = {
    from: `"Portfolio Contact" <mozammelhoqueriad2029@gmail.com>`,
    to: "mozammelhoqueriad2029@gmail.com",
    subject: `New message from ${name}`,
    html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent!" });
  } catch (err) {
    res.json({ success: false, message: "Failed to send", error: err });
  }
});

app.listen(5000, () => {
  console.log("SMTP Mail Server running on port 5000");
});
