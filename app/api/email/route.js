import nodemailer from 'nodemailer';

export const POST = async (request) => {
  const { email, subject, message } = await request.json();

  try {
    // Create a transporter using your email service's SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'sagarathani0418@gmail.com',
        pass: 'sagar08052004$$$',
      },
    });

    // Define the email options
    const mailOptions = {
      from: email,
      to: 'sagarathani0418@gmail.com', // Set the destination email address
      subject: subject,
      text: message,
      html: `<p>${message}</p>`, // You can also include HTML content
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return new Response('Message sent successfully', { status: 201 });
  } catch (error) {
    console.error(error);
    // Return an error response
    return new Response('Failed to send message', { status: 500 });
  }
};
