// File: app/api/send-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, phoneNumber, email, message, subject, recipients } = body;

    console.log(process.env.SMTP_HOST);
    console.log(process.env.SMTP_PORT);
    console.log(process.env.SMTP_SECURE);
    console.log(process.env.SMTP_USER);
    console.log(process.env.SMTP_PASSWORD);
    console.log(process.env.SMTP_FROM_EMAIL);

    // Create a transporter with your SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // Always true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    // Default email subject
    const defaultSubject = 'New contact form inquiry on centauruscharter.com';

    // Default recipients
    const defaultRecipients =
      'habibjutt868@gmail.com, sales@centauruscharter.com';

    // Format the email content
    const emailContent = `
      <h2>New contact form inquiry on centauruscharter.com</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phoneNumber}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    // Send the email
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      //   to: "habibjutt868@gmail.com",
      //   to: "habibjutt868@gmail.com, sales@centauruscharter.com",
      to: recipients && recipients.trim() ? recipients : defaultRecipients,
      subject: subject && subject.trim() ? subject : defaultSubject,
      html: emailContent,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Error sending email', error: error.message },
      { status: 500 }
    );
  }
}
