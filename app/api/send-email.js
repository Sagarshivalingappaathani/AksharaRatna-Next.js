import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sagarathani0418@gmail.com',
      pass: 'sagar08052004$$$',
    },
  });

  const mailOptions = {
    from: email,
    to: 'sagarathani0418@gmail.com',
    subject: subject,
    text: `Email: ${email}\n\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.toString() });
  }
}
